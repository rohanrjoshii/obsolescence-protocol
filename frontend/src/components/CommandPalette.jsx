import { useState, useEffect, useRef, useCallback } from 'react'
import { soundFx } from '../utils/audio'

const ALL_COMMANDS = (ctx) => [
  // Navigation
  {
    id: 'open-terminal',
    category: 'Navigate',
    label: 'Open Terminal',
    description: 'Launch the interactive CLI terminal',
    icon: 'terminal',
    shortcut: 'T',
    action: () => ctx.onOpenWindow('terminal'),
  },
  {
    id: 'open-stats',
    category: 'Navigate',
    label: 'Open Analytics Dashboard',
    description: 'View system metrics and life data stats',
    icon: 'analytics',
    shortcut: 'S',
    action: () => ctx.onOpenWindow('stats'),
  },
  {
    id: 'open-sources',
    category: 'Navigate',
    label: 'Manage Data Sources',
    description: 'Configure API connections (GitHub, Oura, Strava…)',
    icon: 'hub',
    shortcut: 'C',
    action: () => ctx.onOpenWindow('sources'),
  },
  {
    id: 'open-ipod',
    category: 'Navigate',
    label: 'Open Music Player',
    description: 'Launch the retro iPod — real music from SoundCloud',
    icon: 'graphic_eq',
    shortcut: 'P',
    action: () => ctx.onOpenWindow('ipod'),
  },
  {
    id: 'open-profile',
    category: 'Navigate',
    label: 'Open Profile — LinkedIn & LeetCode',
    description: 'View coding stats, connections, skills, and rankings',
    icon: 'person',
    action: () => ctx.onOpenWindow('profile'),
  },
  {
    id: 'open-contact',
    category: 'Navigate',
    label: 'Contact Rohan Joshi — Transmit Dispatch',
    description: 'Direct recruiter & engineering inquiries channel',
    icon: 'mail',
    action: () => ctx.onOpenContact?.(),
  },
  {
    id: 'open-resume',
    category: 'Navigate',
    label: 'Resume & CV — ATS-Optimized Document',
    description: 'Printable & machine-readable software engineer resume',
    icon: 'description',
    action: () => ctx.onOpenResume?.(),
  },
  {
    id: 'open-directives',
    category: 'Navigate',
    label: 'System Directives — Goals & Future Protocols',
    description: 'Sequential tele-printer checklist of engineering milestones',
    icon: 'checklist',
    action: () => ctx.onOpenWindow('directives'),
  },
  {
    id: 'open-memory',
    category: 'Navigate',
    label: 'Memory Bank Cache — Visual Artifacts & GIFs',
    description: 'Isolated sector of visual logs, Ghibli nostalgia & CRT animations',
    icon: 'photo_library',
    action: () => ctx.onOpenWindow('memory'),
  },
  // Data
  {
    id: 'export-json',
    category: 'Data',
    label: 'Export Feed as JSON',
    description: 'Download current life feed as a JSON file',
    icon: 'download',
    action: () => ctx.onExport?.('json'),
  },
  {
    id: 'export-csv',
    category: 'Data',
    label: 'Export Feed as CSV',
    description: 'Download current life feed as a CSV spreadsheet',
    icon: 'table_view',
    action: () => ctx.onExport?.('csv'),
  },
  {
    id: 'refresh-data',
    category: 'Data',
    label: 'Refresh Data Stream',
    description: 'Re-fetch all life events from connected sources',
    icon: 'refresh',
    action: () => ctx.onRefresh?.(),
  },
  // System
  {
    id: 'toggle-demo',
    category: 'System',
    label: ctx.isDemo ? 'Disable Demo Mode' : 'Enable Demo Mode',
    description: ctx.isDemo
      ? 'Switch back to live data sources'
      : 'Load anonymised sample data for presentation',
    icon: ctx.isDemo ? 'visibility_off' : 'play_demo',
    action: () => ctx.onToggleDemo(!ctx.isDemo),
  },
  {
    id: 'toggle-audio',
    category: 'System',
    label: ctx.isMuted ? 'Unmute UI Sounds' : 'Mute UI Sounds',
    description: 'Toggle retro click / beep sound effects',
    icon: ctx.isMuted ? 'volume_up' : 'volume_off',
    shortcut: 'M',
    action: () => ctx.onToggleAudio(),
  },
  // Links
  {
    id: 'view-github',
    category: 'Links',
    label: 'View on GitHub',
    description: 'Open the source code repository',
    icon: 'code',
    action: () => window.open('https://github.com', '_blank'),
  },
  {
    id: 'view-linkedin',
    category: 'Links',
    label: 'LinkedIn Profile',
    description: 'Open LinkedIn profile in new tab',
    icon: 'person',
    action: () => window.open('https://linkedin.com', '_blank'),
  },
]

const CATEGORIES = ['Navigate', 'Data', 'System', 'Links']

export default function CommandPalette({
  isOpen,
  onClose,
  onOpenWindow,
  onToggleDemo,
  onToggleAudio,
  onExport,
  onRefresh,
  onOpenContact,
  onOpenResume,
  isDemo,
  isMuted,
}) {
  const [query, setQuery] = useState('')
  const [selectedIdx, setSelectedIdx] = useState(0)
  const inputRef = useRef(null)

  const commands = ALL_COMMANDS({
    onOpenWindow,
    onToggleDemo,
    onToggleAudio,
    onExport,
    onRefresh,
    onOpenContact,
    onOpenResume,
    isDemo,
    isMuted,
  })

  const filtered = query.trim()
    ? commands.filter(
        (c) =>
          c.label.toLowerCase().includes(query.toLowerCase()) ||
          c.description.toLowerCase().includes(query.toLowerCase()) ||
          c.category.toLowerCase().includes(query.toLowerCase())
      )
    : commands

  const grouped = CATEGORIES.reduce((acc, cat) => {
    const items = filtered.filter((c) => c.category === cat)
    if (items.length) acc[cat] = items
    return acc
  }, {})

  // Reset when opened
  useEffect(() => {
    if (isOpen) {
      setQuery('')
      setSelectedIdx(0)
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [isOpen])

  // Keyboard navigation within palette
  useEffect(() => {
    if (!isOpen) return

    const handleKey = (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIdx((i) => Math.min(i + 1, filtered.length - 1))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIdx((i) => Math.max(i - 1, 0))
      } else if (e.key === 'Enter') {
        e.preventDefault()
        const cmd = filtered[selectedIdx]
        if (cmd) executeCommand(cmd)
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen, filtered, selectedIdx])

  const executeCommand = useCallback(
    (cmd) => {
      soundFx.playExec()
      onClose()
      setTimeout(() => cmd.action(), 80)
    },
    [onClose]
  )

  if (!isOpen) return null

  // Flat list index for keyboard navigation
  let flatIdx = 0

  return (
    <div
      className="fixed inset-0 z-[200] flex items-start justify-center pt-[15vh]"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Palette Panel */}
      <div
        className="relative w-full max-w-xl mx-4 rounded-xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#13121e',
          border: '1px solid #2e2d3e',
          boxShadow: '0 32px 64px rgba(0,0,0,0.8), 0 0 0 1px rgba(212,163,115,0.15)',
        }}
      >
        {/* Search Input */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[#2e2d3e]">
          <span className="material-symbols-outlined text-[#6b6880] text-[20px] flex-shrink-0">
            search
          </span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setSelectedIdx(0)
            }}
            placeholder="Search commands…"
            className="flex-1 bg-transparent text-[#f0eeff] text-[15px] outline-none placeholder-[#4a4862] font-sans"
          />
          <kbd className="text-[10px] font-bold text-[#4a4862] bg-[#1e1d2c] px-2 py-0.5 rounded border border-[#2e2d3e]">
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div className="overflow-y-auto" style={{ maxHeight: '55vh' }}>
          {filtered.length === 0 ? (
            <div className="px-4 py-8 text-center text-[#4a4862] text-[13px] font-code-terminal">
              No commands match "{query}"
            </div>
          ) : (
            Object.entries(grouped).map(([category, items]) => (
              <div key={category}>
                {/* Category label */}
                <div className="px-4 py-1.5 text-[10px] font-bold text-[#4a4862] uppercase tracking-widest border-b border-[#1e1d2c]">
                  {category}
                </div>

                {items.map((cmd) => {
                  const isSelected = flatIdx === selectedIdx
                  const currentFlatIdx = flatIdx++

                  return (
                    <button
                      key={cmd.id}
                      onMouseEnter={() => setSelectedIdx(currentFlatIdx)}
                      onClick={() => executeCommand(cmd)}
                      className={`w-full text-left flex items-center gap-3 px-4 py-2.5 transition-colors ${
                        isSelected
                          ? 'bg-[#d4a373]/15 border-l-2 border-[#d4a373]'
                          : 'border-l-2 border-transparent hover:bg-[#1e1d2c]'
                      }`}
                    >
                      {/* Icon */}
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          isSelected ? 'bg-[#d4a373]/20' : 'bg-[#1e1d2c]'
                        }`}
                      >
                        <span
                          className={`material-symbols-outlined text-[17px] ${
                            isSelected ? 'text-[#d4a373]' : 'text-[#6b6880]'
                          }`}
                        >
                          {cmd.icon}
                        </span>
                      </div>

                      {/* Label + description */}
                      <div className="flex-1 min-w-0">
                        <p
                          className={`text-[13px] font-semibold truncate ${
                            isSelected ? 'text-[#f0eeff]' : 'text-[#c9c5e0]'
                          }`}
                        >
                          {cmd.label}
                        </p>
                        <p className="text-[11px] text-[#4a4862] truncate">{cmd.description}</p>
                      </div>

                      {/* Shortcut badge */}
                      {cmd.shortcut && (
                        <kbd className="text-[10px] font-bold text-[#6b6880] bg-[#1e1d2c] px-1.5 py-0.5 rounded border border-[#2e2d3e] flex-shrink-0">
                          {cmd.shortcut}
                        </kbd>
                      )}
                    </button>
                  )
                })}
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-4 py-2 border-t border-[#2e2d3e] bg-[#0f0e18]">
          <span className="text-[10px] text-[#4a4862] font-code-terminal">
            OBSOLESCENCE PROTOCOL // COMMAND PALETTE
          </span>
          <div className="flex items-center gap-3 text-[10px] text-[#4a4862]">
            <span><kbd className="bg-[#1e1d2c] border border-[#2e2d3e] px-1 rounded">↑↓</kbd> navigate</span>
            <span><kbd className="bg-[#1e1d2c] border border-[#2e2d3e] px-1 rounded">↵</kbd> run</span>
            <span><kbd className="bg-[#1e1d2c] border border-[#2e2d3e] px-1 rounded">⌘K</kbd> toggle</span>
          </div>
        </div>
      </div>
    </div>
  )
}
