import { useState, useEffect } from 'react'
import { soundFx } from '../utils/audio'

const BOOT_LOGS = [
  'AWARD MODULAR BIOS v4.51PG, An Energy Star Ally',
  'Copyright (C) 1984-2026, Award Software, Inc.',
  'PENTIUM-PRO CPU at 200MHz',
  'Memory Test : 65536K OK',
  'Award Plug and Play BIOS Extension v1.0A',
  'Initialize Plug and Play Cards...',
  'PNP Init Completed',
  'Detecting Primary Master ... OBSOLESCENCE_SSD_512MB',
  'Detecting Primary Slave  ... NONE',
  'Mounting ROHAN_JOSHI_KERNEL (v4.19.95-darwin)... [OK]',
  'Initializing Reverse Gateway Subsystem (Port 3000)... [OK]',
  'Synchronizing In-Memory TTL Cache Layer (180s)... [OK]',
  'Loading Telemetry Daemons (GitHub, Oura, Strava)... [OK]',
  'Mounting PGP Secure Transmission Relay (Port 25)... [OK]',
  'Allocating WebGL Three.js CRT Shaders (60 FPS)... [OK]',
  'Bypassing Security Protocols & System Guardrails... [DONE]',
  '==========================================================',
  'INIT: OBSOLESCENCE PROTOCOL v4.19.95 ENGAGED — SYSTEM READY',
]

export default function SystemBootSequence({ onBootComplete }) {
  const [visibleLogs, setVisibleLogs] = useState([])
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let currentIndex = 0

    const bootInterval = setInterval(() => {
      if (currentIndex < BOOT_LOGS.length) {
        soundFx.playClick()
        setVisibleLogs((prev) => [...prev, BOOT_LOGS[currentIndex]])
        currentIndex++
        setProgress(Math.round((currentIndex / BOOT_LOGS.length) * 100))
      } else {
        clearInterval(bootInterval)
        soundFx.playExec()
        setTimeout(onBootComplete, 700)
      }
    }, 140) // Rapid 140ms per line for fast, aggressive terminal startup

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        clearInterval(bootInterval)
        soundFx.playExec()
        onBootComplete()
      }
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      clearInterval(bootInterval)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onBootComplete])

  return (
    <div
      className="fixed inset-0 z-[200] bg-black text-[#00ff00] font-code-terminal flex flex-col justify-between p-6 sm:p-10 select-none overflow-hidden cursor-pointer"
      onClick={() => {
        soundFx.playExec()
        onBootComplete()
      }}
    >
      {/* CRT Scanline Overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-30 opacity-30"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #000 2px, #000 4px)',
        }}
      />

      {/* Top BIOS Banner */}
      <div className="relative z-20 flex justify-between items-start border-b border-[#00ff00]/40 pb-3 text-[11px] sm:text-[13px] font-mono">
        <div>
          <div className="font-bold text-[#00ff00] tracking-wider text-[13px] sm:text-[15px]">
            &gt; OBSOLESCENCE KERNEL BOOTLOADER // BIOS v4.19
          </div>
          <div className="text-gray-400 text-[10px] sm:text-[11px]">
            ROHAN JOSHI ARCHITECTURE · BENGALURU SECTOR
          </div>
        </div>

        <div className="text-right font-mono">
          <span className="text-amber-400 font-bold animate-pulse text-[11px]">
            BOOTING {progress}%
          </span>
          <div className="text-[10px] text-gray-500 hidden sm:block">
            [PRESS SPACE / ESC TO SKIP]
          </div>
        </div>
      </div>

      {/* Log Feed */}
      <div className="relative z-20 flex-1 my-4 overflow-y-auto space-y-1 text-[11px] sm:text-[13px] font-mono leading-snug">
        {visibleLogs.map((log, index) => (
          <div
            key={index}
            className={
              log.includes('OK') || log.includes('DONE') || log.includes('ENGAGED')
                ? 'text-[#00ff00] font-bold'
                : log.includes('==')
                ? 'text-amber-300 font-bold'
                : 'text-[#88ff88]'
            }
          >
            {log}
          </div>
        ))}
        {/* Blinking Phosphor Cursor */}
        <div className="inline-block w-2.5 h-4 bg-[#00ff00] animate-pulse ml-0.5 align-middle" />
      </div>

      {/* Bottom Status Ticker */}
      <div className="relative z-20 border-t border-[#00ff00]/40 pt-2 flex justify-between items-center text-[10px] sm:text-[11px] text-gray-400 font-mono">
        <span>GATEWAY: CONNECTED (127.0.0.1:3000)</span>
        <button
          onClick={(e) => {
            e.stopPropagation()
            soundFx.playExec()
            onBootComplete()
          }}
          className="text-[#00ff00] hover:text-white font-bold underline cursor-pointer"
        >
          [SKIP TO DESKTOP]
        </button>
      </div>
    </div>
  )
}
