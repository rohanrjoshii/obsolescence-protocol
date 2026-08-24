import { useState, useRef, useEffect } from 'react'
import DraggableWindow from './DraggableWindow'
import { TRACK_DB } from '../data/trackDatabase'
import { soundFx } from '../utils/audio'

export default function TerminalWindow({
  isOpen,
  isMinimized,
  onClose,
  onMinimize,
  onFocus,
  zIndex,
  sources = [],
  onSetFilter,
  onToggleDemo,
  isDemo,
  onExecuteSearch,
  onTriggerExport,
  onOpenContact,
  onOpenResume,
  onOpenWindow,
  onPlayTrack,
  onReboot,
}) {
  const [history, setHistory] = useState([
    { text: 'OBSOLESCENCE PROTOCOL [Version 4.19.95]', type: 'system' },
    { text: '(C) 1995-2026 DIGITAL ARCHAEOLOGY CORP. ALL RIGHTS RESERVED.', type: 'system' },
    { text: 'Type "help" FOR COMMAND MANUAL, "neofetch" FOR SPECS, OR "play apocalypse" FOR AUDIO.', type: 'system' },
  ])
  const [inputVal, setInputVal] = useState('')
  const [cmdHistory, setCmdHistory] = useState([])
  const [cmdIndex, setCmdIndex] = useState(-1)
  const inputRef = useRef(null)
  const bottomRef = useRef(null)

  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus()
    }
  }, [isOpen, isMinimized])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const rawCmd = inputVal.trim()
      if (!rawCmd) return

      soundFx.playExec()
      const newHistory = [...history, { text: `C:\\> ${rawCmd}`, type: 'input' }]
      setCmdHistory((prev) => [...prev, rawCmd])
      setCmdIndex(-1)

      const parts = rawCmd.split(' ')
      const command = parts[0].toLowerCase()
      const args = parts.slice(1)
      const fullArg = args.join(' ').toLowerCase().trim()

      switch (command) {
        case 'help':
          newHistory.push({
            text: `=====================================================
  OBSOLESCENCE COMMAND INTERPRETER // COMMAND MANUAL
=====================================================
[SYSTEM & SPECS]
  neofetch / sysinfo  - Output host telemetry & retro ASCII badge
  boot / reboot       - Re-trigger BIOS cold boot sequence
  status              - Query API & gateway infrastructure health
  ping [host]         - Ping gateway endpoint for latency test
  date / time         - Display system synchronization clock

[CAREER & RESUME]
  resume / cv         - Launch ATS-optimized resume viewer
  mail / contact      - Transmit dispatch to rohan.joshi.dev@gmail.com
  whoami / profile    - Query developer bio & academic credentials
  projects            - List software engineering project directory
  skills              - List technical stack & competencies
  directives / todo   - Open interactive System Directives & Goals

[MEDIA & AUDIO]
  play <track_name>   - Play track on 3D Retro iPod (e.g. "play apocalypse")
  ipod / music        - Open retro iPod media player
  memory / gallery    - Open Memory Bank visual GIF artifact cache

[TELEMETRY & DATA]
  stats / metrics     - Display macro-telemetry odometer registers
  filter <source>     - Filter feed (github, spotify, strava, oura, rescuetime, all)
  search <query>      - Search life feed telemetry events
  export [json|csv]   - Download telemetry export payload
  demo [on|off]       - Toggle synthetic demo telemetry mode

[SHELL UTILITIES]
  cat <filename>      - Read file (e.g. "cat resume.txt", "cat config.sys")
  ls / dir            - List files in current working sector
  matrix              - Stream real-time telemetry flux
  sudo <command>      - Execute with superuser privileges
  clear / cls         - Clear terminal display buffer`,
            type: 'output',
          })
          break

        case 'neofetch':
        case 'sysinfo':
        case 'specs':
          newHistory.push({
            text: `  .--------------------.   OS      : Obsolescence OS 4.19 (Win95 CRT Hybrid)
  | [x]   OBSOLESCENCE |   HOST    : Reverse Gateway (Node.js 20 / Express)
  | .----------------. |   KERNEL  : x86_64 Darwin / React 18 + Vite 5
  | |  >_            | |   UPTIME  : 99.98% (Fault-Isolated Parallel Engine)
  | |  TELEMETRY OK  | |   MEMORY  : 64.2 MB / 512 MB (TTL Cache Synced)
  | '----------------' |   GRAPHICS: Three.js WebGL CRT Shader @ 60 FPS
  '--------------------'   AUDIO   : Off-Screen SoundCloud Viewport Engine
                           SECURITY: Supabase PostgreSQL RLS Enabled`,
            type: 'output',
          })
          break

        case 'play':
          if (!fullArg) {
            newHistory.push({
              text: `Usage: play <track_name>\nAvailable tracks in DB:\n${TRACK_DB.map((t) => `  • ${t.track_name} (${t.artist})`).join('\n')}`,
              type: 'output',
            })
          } else {
            const matched = TRACK_DB.find(
              (t) =>
                t.track_name.toLowerCase().includes(fullArg) ||
                t.artist.toLowerCase().includes(fullArg) ||
                t.id.toLowerCase().includes(fullArg)
            )
            if (matched) {
              newHistory.push({
                text: `> ENGAGING AUDIO ENGINE // STREAMING: "${matched.track_name}" by ${matched.artist}...`,
                type: 'output',
              })
              if (onPlayTrack) onPlayTrack(matched)
            } else {
              newHistory.push({
                text: `Track "${fullArg}" not found in TRACK_DB. Type "play" for tracklist.`,
                type: 'error',
              })
            }
          }
          break

        case 'ipod':
        case 'music':
        case 'player':
          newHistory.push({ text: '> LAUNCHING RETRO IPOD CLASSIC...', type: 'output' })
          if (onOpenWindow) onOpenWindow('ipod')
          break

        case 'ping':
          newHistory.push({
            text: `PING api.obsolescence.local (127.0.0.1): 56 data bytes
64 bytes from 127.0.0.1: icmp_seq=0 ttl=64 time=1.24 ms
64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.98 ms
64 bytes from 127.0.0.1: icmp_seq=2 ttl=64 time=1.05 ms
--- api.obsolescence.local ping statistics ---
3 packets transmitted, 3 received, 0.0% packet loss, min/avg/max = 0.98/1.09/1.24 ms`,
            type: 'output',
          })
          break

        case 'cat':
        case 'type':
          const file = args[0]?.toLowerCase()
          if (file === 'resume.txt' || file === 'resume' || file === 'cv') {
            newHistory.push({
              text: `=====================================================
ROHAN JOSHI — SOFTWARE DEVELOPER INTERN @ ICM
=====================================================
Location: Bengaluru, Karnataka • Phone: +91 6361195409
Email: rohan.joshi.dev@gmail.com
GitHub: github.com/rohanrjoshii • LinkedIn: linkedin.com/in/rohanrj1008
Education: BCA @ PES University (2023 - 2026)

EXPERIENCE:
• Software Developer Intern @ India Christian Matrimony (Dec 2025 - Present)
  - Full-stack matrimonial architecture with 15+ screens, Supabase RLS, FastAPI, React.

PROJECTS:
• Nimbus: macOS Dynamic Island clone (Swift, SwiftUI, AppKit, Raw Kernel APIs)
• FilterIQ: Smart NLP Data Filtering (FastAPI, Pandas, Docker)
• Satya: AI Deepfake Detection platform with 90%+ prediction accuracy (PyTorch, React)

Type "resume" to open the interactive ATS visualizer.`,
              type: 'output',
            })
          } else if (file === 'config.sys') {
            newHistory.push({
              text: `FILES=40
BUFFERS=20
DEVICE=C:\\DOS\\HIMEM.SYS
DOS=HIGH,UMB
DEVICEHIGH=C:\\GATEWAY\\TTL_CACHE.SYS /TTL=180
DEVICEHIGH=C:\\AUDIO\\SOUNDCLOUD_OFFSCREEN.SYS`,
              type: 'output',
            })
          } else if (file === 'secrets.env') {
            newHistory.push({
              text: `[RESTRICTED ACCESS]
SUPABASE_SERVICE_ROLE_KEY=••••••••••••••••••••••••••••••••
FASTAPI_SECRET_KEY=••••••••••••••••••••••••••••••••
GITHUB_PERSONAL_ACCESS_TOKEN=••••••••••••••••••••••••••••••••
Access denied to unauthenticated telemetry clients.`,
              type: 'output',
            })
          } else {
            newHistory.push({
              text: `File not found: "${args.join(' ')}". Available files: resume.txt, config.sys, secrets.env`,
              type: 'error',
            })
          }
          break

        case 'ls':
        case 'dir':
          newHistory.push({
            text: `DIRECTORY OF C:\\
  <DIR>          PROJECTS
  <DIR>          MEMORY_CACHE
  <DIR>          AUDIO_DB
  -rw-r--r--     resume.txt       (3.4 KB)
  -rw-r--r--     config.sys       (128 B)
  -rw-------     secrets.env      (256 B)
  4 File(s), 3 Dir(s)  52,428,800 bytes free`,
            type: 'output',
          })
          break

        case 'directives':
        case 'todo':
        case 'plans':
        case 'checklist':
          newHistory.push({
            text: `SYSTEM DIRECTIVES & PROTOCOL MILESTONES:
  [X] Build & Deploy Obsolescence Protocol Reverse Gateway (DONE)
  [X] Ship Production Supabase RLS & Matrimonial UI @ ICM (DONE)
  [X] Engineer Nimbus macOS Dynamic Island with Raw Kernel APIs (DONE)
  [X] Solve 196+ Algorithmic Benchmarks & Maintain 39d Streak (DONE)
  [ ] Graduate BCA @ PES University, Bengaluru (May 2026)
  [ ] Target 500+ LeetCode Solved & Knight Tier Benchmark
  [ ] Secure High-Impact Full-Stack / Distributed SWE Role
  [ ] Open-Source Retro Telemetry OS Component Framework

> LAUNCHING DIRECTIVES WINDOW...`,
            type: 'output',
          })
          if (onOpenWindow) onOpenWindow('directives')
          break

        case 'memory':
        case 'gifs':
        case 'gallery':
        case 'cache':
        case 'art':
          newHistory.push({
            text: `DIRECTORY C:\\MEMORY_CACHE\\SECTOR_07:
  [MEM_01] SYSTEM_BOOT_SEQUENCE.GIF     (1.2 MB · 0x8F9A · [CORE_OS])
  [MEM_02] NEURAL_NET_TRAINING.GIF      (890 KB · 0x3C4B · [AI_ML])
  [MEM_03] GHIBLI_TRAIN_COASTAL.GIF     (1.8 MB · 0x9E21 · [NOSTALGIA])
  [MEM_04] RETRO_CYBER_MATRIX.GIF       (1.4 MB · 0x55FA · [CORE_OS])
  [MEM_05] DOCKER_CONTAINER_CLUSTER.GIF (950 KB · 0x1A8E · [INFRA])
  [MEM_06] GHIBLI_STUDY_DESK.GIF        (2.1 MB · 0x4D0C · [NOSTALGIA])

> LAUNCHING MEMORY BANK VIEWFINDER...`,
            type: 'output',
          })
          if (onOpenWindow) onOpenWindow('memory')
          break

        case 'resume':
        case 'cv':
          newHistory.push({
            text: `> LAUNCHING ATS RESUME VIEWER...`,
            type: 'output',
          })
          if (onOpenResume) onOpenResume()
          break

        case 'mail':
        case 'email':
        case 'contact':
        case 'hire':
        case 'transmit':
        case 'relay':
          newHistory.push({
            text: `=====================================================
  SYS.TRANSMITTER // PGP_SECURE_RELAY [PORT_25]
=====================================================
  [DESTINATION] Rohan Joshi (Full-Stack & AI Developer)
  [LOCATION]    Bengaluru, Karnataka · rohan.joshi.dev@gmail.com
  [ENCRYPTION]  PGP SHA-256 Relay Buffer
  [STATUS]      ARMED // READY TO DISPATCH

> LAUNCHING SECURE TRANSMISSION WINDOW...`,
            type: 'output',
          })
          if (onOpenWindow) {
            onOpenWindow('transmission')
          } else if (onOpenContact) {
            onOpenContact()
          }
          break

        case 'exec':
          const target = args[0]?.toLowerCase()
          if (target === 'mail' || target === 'contact') {
            if (onOpenContact) onOpenContact()
            newHistory.push({ text: '> DISPATCH TRANSMITTED TO CONTACT ROUTE.', type: 'output' })
          } else if (target === 'resume' || target === 'cv') {
            if (onOpenResume) onOpenResume()
            newHistory.push({ text: '> ATS RESUME VIEWER LAUNCHED.', type: 'output' })
          } else {
            newHistory.push({ text: `Unknown exec target: "${args.join(' ')}". Try "exec mail" or "exec resume".`, type: 'error' })
          }
          break

        case 'whoami':
        case 'profile':
          newHistory.push({
            text: `ROHAN JOSHI // FULL-STACK & AI DEVELOPER
--------------------------------------------------
Role: Software Developer Intern @ India Christian Matrimony (ICM)
Education: BCA @ PES University, Bengaluru (Aug 2023 – May 2026)
Location: Bengaluru, Karnataka • +91 6361195409
Email: rohan.joshi.dev@gmail.com
GitHub: https://github.com/rohanrjoshii
LinkedIn: https://linkedin.com/in/rohanrj1008`,
            type: 'output',
          })
          break

        case 'projects':
          newHistory.push({
            text: `PROJECT DIRECTORY C:\\PROJECTS:
  1. [Nimbus]      macOS Dynamic Island clone (Swift, SwiftUI, AppKit, Kernel APIs)
  2. [FilterIQ]    Smart NLP Data Filtering app (Python, FastAPI, Pandas, Docker)
  3. [Satya]       AI Deepfake Detection platform 90%+ acc (React, FastAPI, PyTorch)
  4. [BizzConnect] B2B Networking app with K-Means clustering (Flutter, Firebase)
  -rw-r--r--       resume.txt (Type "cat resume.txt" or "resume" to open)`,
            type: 'output',
          })
          break

        case 'skills':
          newHistory.push({
            text: `TECHNICAL SKILLS:
  • Frontend:    React, SwiftUI, AppKit, React Native, Tailwind CSS, Vite
  • Backend:     FastAPI, Node.js, Firebase, REST APIs
  • Databases:   PostgreSQL (Supabase), MySQL, Firestore
  • AI / ML:     PyTorch, TensorFlow, OpenCV, Hugging Face Transformers, NLP
  • Languages:   Python, JavaScript, TypeScript, Swift, Java, Dart, HTML/CSS
  • Tools:       Docker, Git, GitHub Actions, CI/CD`,
            type: 'output',
          })
          break

        case 'sudo':
          soundFx.playError()
          newHistory.push({
            text: `Permission denied: user 'recruiter' is not in the sudoers file.
This incident will be reported to Rohan Joshi.`,
            type: 'error',
          })
          break

        case 'matrix':
          newHistory.push({
            text: `01001111 01000010 01010011 01001111 01001100 01000101 01010011 01000011 01000101 01001110 01000011 01000101
TELEMETRY FLUX SYNCHRONIZED:
1001001 01001100 01001001 01000110 01000101 00100000 01000110 01000101 01000101 01000100
[STREAM STATUS: NOMINAL]`,
            type: 'output',
          })
          break

        case 'status':
          const statusLines = sources.map(
            (s) => `  [${s.name.toUpperCase()}] Enabled: ${s.enabled ? 'YES' : 'NO'} | Healthy: ${s.healthy ? 'OK' : 'OFFLINE'}`
          )
          newHistory.push({
            text: `SYSTEM SOURCE DIAGNOSTICS:\n${statusLines.join('\n') || 'No sources registered.'}\nGateway TTL Cache: ACTIVE\nSynthetic Demo Fallback: ${isDemo ? 'ENABLED' : 'DISABLED'}`,
            type: 'output',
          })
          break

        case 'demo':
          if (args[0] === 'off') {
            onToggleDemo(false)
            newHistory.push({ text: '> SYNTHETIC DEMO MODE DISABLED.', type: 'output' })
          } else {
            onToggleDemo(true)
            newHistory.push({ text: '> SYNTHETIC DEMO MODE ENABLED WITH RICH SAMPLE STREAMS.', type: 'output' })
          }
          break

        case 'filter':
          const src = args[0] ? args[0].toLowerCase() : 'all'
          onSetFilter(src === 'all' ? null : src)
          newHistory.push({ text: `> FEED SOURCE FILTER SET TO: ${src.toUpperCase()}`, type: 'output' })
          break

        case 'search':
          const q = args.join(' ')
          if (q) {
            onExecuteSearch(q)
            newHistory.push({ text: `> SEARCH QUERY APPLIED: "${q}"`, type: 'output' })
          } else {
            onExecuteSearch('')
            newHistory.push({ text: '> SEARCH QUERY CLEARED.', type: 'output' })
          }
          break

        case 'stats':
        case 'metrics':
        case 'odometer':
        case 'telemetry':
          newHistory.push({
            text: `=====================================================
  SYS.TELEMETRY // MACRO_METRICS_AGGREGATOR [ODOMETER]
=====================================================
  [0x70] LIFETIME_COMMITS   : 1,420 OPS  [SYNCED]
  [0x71] DISTANCE_CYCLED    : 840.5 KM   [ACTIVE]
  [0x72] TOTAL_CODE_HOURS   : 2,150 HRS  [TRACKED]
  [0x73] BOOKS_&_PAPERS     : 52 VOL     [PARSED]
  [0x74] ALGO_BENCHMARKS    : 196 PTS    [ACTIVE - 39d Streak]
  [0x75] AUDIO_STREAMS      : 3,840 TRK  [STREAMED]
-----------------------------------------------------
  REGISTERS STATUS: 6/6 OK · POLLING: ACTIVE (2800ms)
=====================================================`,
            type: 'output',
          })
          break

        case 'export':
          const fmt = args[0] === 'csv' ? 'csv' : 'json'
          onTriggerExport(fmt)
          newHistory.push({ text: `> INITIATING FEED EXPORT [FORMAT: ${fmt.toUpperCase()}]...`, type: 'output' })
          break

        case 'boot':
        case 'reboot':
        case 'restart':
          newHistory.push({
            text: `=====================================================
  INITIATING COLD SYSTEM REBOOT // OBSOLESCENCE KERNEL
=====================================================
Flushing TTL caches...
Resetting WebGL pipeline...
Executing hardware restart in 500ms...`,
            type: 'output',
          })
          if (onReboot) {
            setTimeout(onReboot, 600)
          }
          break

        case 'clear':
        case 'cls':
          setHistory([])
          setInputVal('')
          return

        case 'date':
        case 'time':
          newHistory.push({ text: `Current System Time: ${new Date().toString()}`, type: 'output' })
          break

        default:
          soundFx.playError()
          newHistory.push({
            text: `Bad command or file name: "${rawCmd}". Type "help" or "neofetch" for commands.`,
            type: 'error',
          })
          break
      }

      setHistory(newHistory)
      setInputVal('')
    } else if (e.key === 'ArrowUp') {
      if (cmdHistory.length > 0) {
        const nextIdx = cmdIndex + 1 < cmdHistory.length ? cmdIndex + 1 : cmdIndex
        setCmdIndex(nextIdx)
        setInputVal(cmdHistory[cmdHistory.length - 1 - nextIdx] || '')
      }
    } else if (e.key === 'ArrowDown') {
      if (cmdIndex > 0) {
        const nextIdx = cmdIndex - 1
        setCmdIndex(nextIdx)
        setInputVal(cmdHistory[cmdHistory.length - 1 - nextIdx] || '')
      } else if (cmdIndex === 0) {
        setCmdIndex(-1)
        setInputVal('')
      }
    }
  }

  return (
    <DraggableWindow
      id="terminal"
      title="C:\WINDOWS\SYSTEM32\CMD.EXE - [OBSOLESCENCE CLI]"
      isOpen={isOpen}
      isMinimized={isMinimized}
      onClose={onClose}
      onMinimize={onMinimize}
      onFocus={onFocus}
      zIndex={zIndex}
      width="max-w-3xl"
      titleBg="bg-black"
      headerIcon="terminal"
      initialPosition={{ x: 40, y: 40 }}
    >
      <div
        className="bg-black p-4 font-code-terminal text-code-terminal text-[#00ff00] h-96 overflow-y-auto space-y-2 border-t-2 border-b-2 border-[#333]"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((item, idx) => (
          <div key={idx} className="leading-tight break-words">
            {item.type === 'system' && <p className="text-[#888888]">{item.text}</p>}
            {item.type === 'input' && <p className="text-white font-bold">{item.text}</p>}
            {item.type === 'output' && (
              <pre className="text-[#00ff00] font-code-terminal whitespace-pre-wrap">{item.text}</pre>
            )}
            {item.type === 'error' && <p className="text-red-500 font-bold">{item.text}</p>}
          </div>
        ))}

        <div className="flex items-center gap-1 text-white">
          <span>C:\&gt;</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleCommand}
            className="flex-1 bg-transparent text-[#00ff00] font-code-terminal outline-none border-none p-0 focus:ring-0"
            autoFocus
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </DraggableWindow>
  )
}
