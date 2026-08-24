import { useState, useEffect } from 'react'
import ShaderBackground from './components/ShaderBackground'
import Header from './components/Header'
import StatusWindow from './components/StatusWindow'
import DateRangePicker from './components/DateRangePicker'
import FeedWindow from './components/FeedWindow'
import TerminalWindow from './components/TerminalWindow'
import StatsWindow from './components/StatsWindow'
import SourceManagerWindow from './components/SourceManagerWindow'
import IPodWindow from './components/IPodWindow'
import MascotWidget from './components/MascotWidget'
import CommandPalette from './components/CommandPalette'
import ProfileWindow from './components/ProfileWindow'
import ProfileHero from './components/ProfileHero'
import CronSchedule from './components/CronSchedule'
import LifetimeTelemetry from './components/LifetimeTelemetry'
import ResumeModal from './components/ResumeModal'
import SystemDirectivesWindow from './components/SystemDirectivesWindow'
import MemoryBankCacheWindow from './components/MemoryBankCacheWindow'
import SecureTransmissionWindow from './components/SecureTransmissionWindow'
import SystemBootSequence from './components/SystemBootSequence'
import Taskbar from './components/Taskbar'
import { fetchFeed, fetchSources, getExportUrl } from './api/lifeFeed'
import { soundFx } from './utils/audio'

function App() {
  const [isBooting, setIsBooting] = useState(() => !sessionStorage.getItem('system_booted'))
  const [feed, setFeed] = useState([])
  const [sources, setSources] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isDemo, setIsDemo] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [showCommandPalette, setShowCommandPalette] = useState(false)
  const [showResumeModal, setShowResumeModal] = useState(false)

  const handleBootComplete = () => {
    sessionStorage.setItem('system_booted', 'true')
    setIsBooting(false)
  }

  const triggerReboot = () => {
    setIsBooting(true)
  }

  // Track selection for retro iPod player
  const [selectedIPodTrack, setSelectedIPodTrack] = useState(null)

  // Filters & Query state
  const [selectedSource, setSelectedSource] = useState(null)
  const [selectedType, setSelectedType] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [dateRange, setDateRange] = useState({
    from: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // 30 days ago
    to: new Date(),
  })

  // Window Management State
  const [activeWindowId, setActiveWindowId] = useState('feed')
  const [topZ, setTopZ] = useState(20)

  const [windowStates, setWindowStates] = useState({
    terminal: { isOpen: false, isMinimized: false, zIndex: 10, icon: 'terminal', title: 'Terminal' },
    stats: { isOpen: false, isMinimized: false, zIndex: 10, icon: 'analytics', title: 'Stats' },
    sources: { isOpen: false, isMinimized: false, zIndex: 10, icon: 'hub', title: 'Sources' },
    ipod: { isOpen: false, isMinimized: false, zIndex: 10, icon: 'graphic_eq', title: 'iPod' },
    profile: { isOpen: false, isMinimized: false, zIndex: 10, icon: 'person', title: 'Profile' },
    directives: { isOpen: false, isMinimized: false, zIndex: 10, icon: 'checklist', title: 'Directives' },
    memory: { isOpen: false, isMinimized: false, zIndex: 10, icon: 'photo_library', title: 'Memory Cache' },
    transmission: { isOpen: false, isMinimized: false, zIndex: 10, icon: 'mark_email_read', title: 'Transmit' },
  })

  useEffect(() => {
    loadData()
    loadSources()

    const interval = setInterval(loadData, 5 * 60 * 1000)
    return () => clearInterval(interval)
  }, [dateRange, selectedSource, selectedType, searchQuery, isDemo])

  // Global Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Cmd+K / Ctrl+K → Command Palette
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setShowCommandPalette((prev) => !prev)
        return
      }
      // Escape closes command palette
      if (e.key === 'Escape') {
        setShowCommandPalette(false)
        return
      }

      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return
      if (showCommandPalette) return

      if (e.key === 't' || e.key === 'T') {
        openWindow('terminal')
      } else if (e.key === 's' || e.key === 'S') {
        openWindow('stats')
      } else if (e.key === 'c' || e.key === 'C') {
        openWindow('sources')
      } else if (e.key === 'p' || e.key === 'P') {
        openWindow('ipod')
      } else if (e.key === 'd' || e.key === 'D') {
        setIsDemo((prev) => !prev)
        soundFx.playBeep(700, 'square', 0.1)
      } else if (e.key === 'm' || e.key === 'M') {
        toggleAudio()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [showCommandPalette])

  const loadData = async () => {
    try {
      setLoading(true)
      const data = await fetchFeed({
        from: dateRange.from,
        to: dateRange.to,
        sources: selectedSource ? [selectedSource] : undefined,
        type: selectedType || undefined,
        search: searchQuery || undefined,
        demo: isDemo,
      })
      setFeed(data.feed || [])

      if (data.meta?.isDemo) {
        setIsDemo(true)
      }
      setError(null)
    } catch (err) {
      console.error('Error loading feed:', err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const loadSources = async () => {
    try {
      const sourcesData = await fetchSources()
      setSources(sourcesData.sources || [])
    } catch (err) {
      console.error('Error loading sources:', err)
    }
  }

  const focusWindow = (id) => {
    const nextZ = topZ + 1
    setTopZ(nextZ)
    setActiveWindowId(id)
    setWindowStates((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        zIndex: nextZ,
        isMinimized: false,
      },
    }))
  }

  const openWindow = (id) => {
    const nextZ = topZ + 1
    setTopZ(nextZ)
    setActiveWindowId(id)
    soundFx.playClick()
    setWindowStates((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        isOpen: true,
        isMinimized: false,
        zIndex: nextZ,
      },
    }))
  }

  const openIPodWithTrack = (trackData) => {
    setSelectedIPodTrack({ ...trackData, _ts: Date.now() })
    openWindow('ipod')
  }

  const closeWindow = (id) => {
    soundFx.playClick()
    setWindowStates((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        isOpen: false,
      },
    }))
  }

  const minimizeWindow = (id) => {
    soundFx.playClick()
    setWindowStates((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        isMinimized: true,
      },
    }))
  }

  const toggleWindowFromTaskbar = (id) => {
    const win = windowStates[id]
    if (!win) return
    if (!win.isOpen || win.isMinimized) {
      openWindow(id)
    } else if (activeWindowId === id) {
      minimizeWindow(id)
    } else {
      focusWindow(id)
    }
  }

  const toggleAudio = () => {
    const muted = soundFx.toggleMute()
    setIsMuted(muted)
  }

  const triggerExport = (format = 'json') => {
    const url = getExportUrl({
      format,
      from: dateRange.from,
      to: dateRange.to,
      sources: selectedSource ? [selectedSource] : undefined,
      type: selectedType || undefined,
      search: searchQuery || undefined,
      demo: isDemo,
    })
    window.open(url, '_blank')
  }

  const anomaliesCount = feed.filter(
    (event) =>
      event.type === 'commit' &&
      event.data?.messages?.some(
        (msg) => msg.toLowerCase().includes('error') || msg.toLowerCase().includes('fix')
      )
  ).length

  const activeWindowsForTaskbar = Object.entries(windowStates)
    .filter(([_, win]) => win.isOpen)
    .map(([id, win]) => ({
      id,
      title: win.title,
      icon: win.icon,
      isMinimized: win.isMinimized,
    }))

  // Main Screen View Tab State ('feed' | 'telemetry' | 'dossier' | 'all')
  const [mainViewTab, setMainViewTab] = useState('feed')

  return (
    <div className="relative min-h-screen bg-[#0f0f13] overflow-x-hidden selection:bg-[#d4a373] selection:text-black font-code-terminal">
      {/* BIOS Splash Boot Sequence */}
      {isBooting && <SystemBootSequence onBootComplete={handleBootComplete} />}

      <ShaderBackground />
      <div className="fixed inset-0 crt-scanlines z-50 pointer-events-none"></div>

      {/* Command Palette — Cmd+K */}
      <CommandPalette
        isOpen={showCommandPalette}
        onClose={() => setShowCommandPalette(false)}
        onOpenWindow={openWindow}
        onToggleDemo={setIsDemo}
        onToggleAudio={toggleAudio}
        onOpenContact={() => openWindow('transmission')}
        onOpenResume={() => setShowResumeModal(true)}
        isDemo={isDemo}
        isMuted={isMuted}
      />

      <Header
        onOpenWindow={openWindow}
        onToggleAudio={toggleAudio}
        onOpenContact={() => openWindow('transmission')}
        isMuted={isMuted}
        isDemo={isDemo}
      />

      <main className="relative z-10 pt-24 pb-28 px-margin-edge sm:px-8 max-w-7xl mx-auto min-h-screen flex flex-col gap-6 sm:gap-8">
        {/* Status Window */}
        <StatusWindow
          anomaliesCount={anomaliesCount}
          sources={sources}
          onRefresh={loadData}
          onOpenSources={() => openWindow('sources')}
          onOpenTerminal={() => openWindow('terminal')}
          onOpenResume={() => setShowResumeModal(true)}
        />

        {/* Main View Tab Selector Bar */}
        <div className="flex items-center justify-between bg-[#121218] p-1.5 rounded-lg border border-[#2e2d3e] font-mono text-[11px] flex-wrap gap-2 shadow-md">
          <span className="text-gray-400 font-bold text-[10px] uppercase ml-1 hidden sm:inline">
            &gt; ACTIVE_VIEW:
          </span>

          <div className="flex items-center gap-1.5 flex-wrap">
            {[
              { id: 'feed', label: '📡 LIVE FEED', desc: 'Active Telemetry Stream' },
              { id: 'telemetry', label: '⚙️ DAEMON & METRICS', desc: 'Cron Routine & Odometers' },
              { id: 'dossier', label: '👤 DEV DOSSIER', desc: 'Rohan Joshi Profile & Bio' },
              { id: 'all', label: '📑 ALL MODULES', desc: 'Full System View' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  soundFx.playClick()
                  setMainViewTab(tab.id)
                }}
                className={`px-3 py-1.5 win-bevel-outset text-[11px] font-bold cursor-pointer transition-all ${
                  mainViewTab === tab.id
                    ? 'bg-[#000080] text-white border-white'
                    : 'bg-[#1c1b26] text-gray-300 hover:text-white hover:bg-[#252433]'
                }`}
                title={tab.desc}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => openWindow('directives')}
            className="win-bevel-button px-2.5 py-1 text-[10px] bg-[#1a1924] text-emerald-400 hover:text-white font-bold ml-auto"
          >
            [✓] GOALS &amp; DIRECTIVES
          </button>
        </div>

        {/* Date Range Picker (Visible on Feed & All Views) */}
        {(mainViewTab === 'feed' || mainViewTab === 'all') && (
          <DateRangePicker dateRange={dateRange} setDateRange={setDateRange} />
        )}

        {/* Profile Hero (Visible on Dossier & All Views) */}
        {(mainViewTab === 'dossier' || mainViewTab === 'all') && (
          <ProfileHero
            onOpenContact={() => openWindow('transmission')}
            onOpenResume={() => setShowResumeModal(true)}
          />
        )}

        {/* 24-Hour Daemon Cron Routine Timeline (Visible on Telemetry & All Views) */}
        {(mainViewTab === 'telemetry' || mainViewTab === 'all') && (
          <CronSchedule />
        )}

        {/* Macro Odometer Telemetry Counters (Visible on Telemetry & All Views) */}
        {(mainViewTab === 'telemetry' || mainViewTab === 'all') && (
          <LifetimeTelemetry />
        )}

        {/* Main Feed Window (Visible on Feed & All Views) */}
        {(mainViewTab === 'feed' || mainViewTab === 'all') && (
          loading && feed.length === 0 ? (
            <div className="endacopia-clay-card p-4 mx-auto mt-8 max-w-md">
              <p className="font-bold text-[14px] text-[#81b29a] animate-pulse">&gt; LOADING LIFE STREAM...</p>
              <p className="text-[#d4a373] mt-1 text-[12px]">&gt; SYNCHRONIZING DATA STREAMS...</p>
            </div>
          ) : error ? (
            <div className="endacopia-clay-card p-4 mx-auto mt-8 max-w-md">
              <p className="font-bold text-[14px] text-[#e07a5f]">&gt; STREAM FETCH ERROR: {error}</p>
              <button
                onClick={loadData}
                className="endacopia-clay-button px-4 py-2 mt-4 text-[12px]"
              >
                RETRY STREAM
              </button>
            </div>
          ) : (
            <FeedWindow
              feed={feed}
              selectedSource={selectedSource}
              onSelectSource={setSelectedSource}
              selectedType={selectedType}
              onSelectType={setSelectedType}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onExport={triggerExport}
              onExecuteCommand={(cmd) => {
                openWindow('terminal')
              }}
              onOpenIPodWithTrack={openIPodWithTrack}
            />
          )
        )}
      </main>

      {/* ATS Resume Modal */}
      <ResumeModal
        isOpen={showResumeModal}
        onClose={() => setShowResumeModal(false)}
      />

      {/* Floating Modals / Windows */}
      <TerminalWindow
        isOpen={windowStates.terminal.isOpen}
        isMinimized={windowStates.terminal.isMinimized}
        onClose={closeWindow}
        onMinimize={minimizeWindow}
        onFocus={focusWindow}
        zIndex={windowStates.terminal.zIndex}
        sources={sources}
        onSetFilter={setSelectedSource}
        onToggleDemo={setIsDemo}
        isDemo={isDemo}
        onExecuteSearch={setSearchQuery}
        onTriggerExport={triggerExport}
        onOpenContact={() => openWindow('transmission')}
        onOpenResume={() => setShowResumeModal(true)}
        onOpenWindow={openWindow}
        onPlayTrack={openIPodWithTrack}
        onReboot={triggerReboot}
      />

      <StatsWindow
        isOpen={windowStates.stats.isOpen}
        isMinimized={windowStates.stats.isMinimized}
        onClose={closeWindow}
        onMinimize={minimizeWindow}
        onFocus={focusWindow}
        zIndex={windowStates.stats.zIndex}
        isDemo={isDemo}
      />

      <SourceManagerWindow
        isOpen={windowStates.sources.isOpen}
        isMinimized={windowStates.sources.isMinimized}
        onClose={closeWindow}
        onMinimize={minimizeWindow}
        onFocus={focusWindow}
        zIndex={windowStates.sources.zIndex}
        sources={sources}
        isDemo={isDemo}
        onToggleDemo={setIsDemo}
        onRefreshSources={loadSources}
      />

      <IPodWindow
        isOpen={windowStates.ipod.isOpen}
        isMinimized={windowStates.ipod.isMinimized}
        onClose={closeWindow}
        onMinimize={minimizeWindow}
        onFocus={focusWindow}
        zIndex={windowStates.ipod.zIndex}
        currentTrack={selectedIPodTrack}
      />

      <ProfileWindow
        isOpen={windowStates.profile.isOpen}
        isMinimized={windowStates.profile.isMinimized}
        onClose={closeWindow}
        onMinimize={minimizeWindow}
        onFocus={focusWindow}
        zIndex={windowStates.profile.zIndex}
      />

      <SystemDirectivesWindow
        isOpen={windowStates.directives.isOpen}
        isMinimized={windowStates.directives.isMinimized}
        onClose={closeWindow}
        onMinimize={minimizeWindow}
        onFocus={focusWindow}
        zIndex={windowStates.directives.zIndex}
      />

      <MemoryBankCacheWindow
        isOpen={windowStates.memory.isOpen}
        isMinimized={windowStates.memory.isMinimized}
        onClose={closeWindow}
        onMinimize={minimizeWindow}
        onFocus={focusWindow}
        zIndex={windowStates.memory.zIndex}
      />

      <SecureTransmissionWindow
        isOpen={windowStates.transmission.isOpen}
        isMinimized={windowStates.transmission.isMinimized}
        onClose={closeWindow}
        onMinimize={minimizeWindow}
        onFocus={focusWindow}
        zIndex={windowStates.transmission.zIndex}
      />

      {/* Mascot Widget */}
      <MascotWidget
        onOpenTerminal={() => openWindow('terminal')}
        onOpenIPod={() => openWindow('ipod')}
        onOpenCommandPalette={() => setShowCommandPalette(true)}
      />

      {/* Win95 Taskbar */}
      <Taskbar
        windows={activeWindowsForTaskbar}
        activeWindowId={activeWindowId}
        onToggleWindow={toggleWindowFromTaskbar}
        onOpenWindow={openWindow}
        onToggleAudio={toggleAudio}
        isMuted={isMuted}
        isDemo={isDemo}
        onToggleDemo={setIsDemo}
        onOpenCommandPalette={() => setShowCommandPalette(true)}
      />
    </div>
  )
}

export default App
