import puppeteer from 'puppeteer-core'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const docsDir = path.join(__dirname, '..', 'docs')
if (!fs.existsSync(docsDir)) fs.mkdirSync(docsDir, { recursive: true })

async function run() {
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,920'],
    defaultViewport: { width: 1440, height: 920, deviceScaleFactor: 2 },
  })

  const page = await browser.newPage()

  // 1. Capture BIOS Boot Screen
  console.log('Capturing BIOS Boot Screen...')
  await page.goto('http://localhost:5173', { waitUntil: 'domcontentloaded' })
  await new Promise((r) => setTimeout(r, 600))
  await page.screenshot({ path: path.join(docsDir, 'screenshot_boot.png') })

  // 2. Click skip or set sessionStorage to load Main Dashboard
  console.log('Transitioning to Main Dashboard...')
  await page.evaluate(() => {
    sessionStorage.setItem('system_booted', 'true')
    window.location.reload()
  })
  await page.waitForNavigation({ waitUntil: 'networkidle0' }).catch(() => {})
  await new Promise((r) => setTimeout(r, 3000))

  // Capture Main Dashboard
  console.log('Capturing Main Dashboard...')
  await page.screenshot({ path: path.join(docsDir, 'screenshot_dashboard.png') })
  await page.screenshot({ path: path.join(docsDir, 'screenshot.png') }) // Hero

  // 3. Switch to Developer Dossier Tab
  console.log('Switching to Developer Dossier view...')
  const dossierTab = await page.$('button[title*="Rohan Joshi Profile"]')
  if (dossierTab) {
    await dossierTab.click()
    await new Promise((r) => setTimeout(r, 1000))
    await page.screenshot({ path: path.join(docsDir, 'screenshot_dossier.png') })
  }

  // 4. Switch to Daemon & Metrics Tab
  console.log('Switching to Daemon & Metrics view...')
  const metricsTab = await page.$('button[title*="Cron Routine"]')
  if (metricsTab) {
    await metricsTab.click()
    await new Promise((r) => setTimeout(r, 1000))
    await page.screenshot({ path: path.join(docsDir, 'screenshot_daemon.png') })
  }

  console.log('All real screenshots captured successfully into docs/')
  await browser.close()
}

run().catch((err) => {
  console.error('Screenshot capture error:', err)
  process.exit(1)
})
