import { useState, useEffect } from 'react'
import { soundFx } from '../utils/audio'

export default function StatusWindow({
  sources = [],
  onRefresh,
  onOpenSources,
  onOpenTerminal,
  onOpenResume,
}) {
  const [health, setHealth] = useState(null)
  const [latency, setLatency] = useState(null)

  const enabledSources = sources.filter((s) => s.enabled).length
  const healthySources = sources.filter((s) => s.healthy).length

  const checkHealth = async () => {
    const t0 = performance.now()
    try {
      const res = await fetch('/api/health')
      const data = await res.json()
      const t1 = performance.now()
      setHealth(data)
      setLatency(Math.round(t1 - t0))
    } catch {
      setHealth({ status: 'OFFLINE', uptime: 'N/A', memory: { heapUsedMB: 0 } })
    }
  }

  useEffect(() => {
    checkHealth()
    const interval = setInterval(checkHealth, 15000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="win-window win-bevel-outset p-[2px] w-full max-w-xl mx-auto shadow-[8px_8px_0px_rgba(0,0,0,0.8)] relative mt-4 font-code-terminal">
      {/* Titlebar */}
      <div className="win-titlebar flex justify-between items-center px-2 py-1 bg-[#000080] text-white select-none">
        <div className="flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[15px] text-green-400">dns</span>
          <span className="text-[12px] font-bold tracking-wide">
            GATEWAY.TELEMETRY // LIVE INFRASTRUCTURE MONITOR
          </span>
        </div>
        <button
          onClick={() => {
            soundFx.playClick()
            checkHealth()
            if (onRefresh) onRefresh()
          }}
          className="win-bevel-button bg-gray-300 w-5 h-5 flex items-center justify-center text-black font-bold text-[12px] hover:bg-white cursor-pointer"
          title="Refresh Server Health & Sources"
        >
          ↻
        </button>
      </div>

      {/* Body */}
      <div className="p-3 bg-[#c0c0c0] text-black space-y-2.5 text-[11px] sm:text-[12px]">
        {/* Top telemetry badge */}
        <div className="bg-[#121216] text-[#f4f1de] p-2.5 win-bevel-inset flex items-center justify-between gap-2 flex-wrap font-mono">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-bold text-white">NODE_GATEWAY: {health?.status || 'POLLING...'}</span>
          </div>
          <div className="flex items-center gap-3 text-[10px] text-gray-300">
            {latency !== null && <span>PING: <strong className="text-emerald-400">{latency}ms</strong></span>}
            {health?.uptime && <span>UPTIME: <strong className="text-amber-300">{health.uptime}</strong></span>}
            {health?.memory && <span>HEAP: <strong className="text-sky-300">{health.memory.heapUsedMB}MB</strong></span>}
          </div>
        </div>

        {/* Status Details */}
        <div className="space-y-1">
          <p className="text-[#000080] font-bold">
            &gt; TELEMETRY AGGREGATOR: {healthySources}/{enabledSources || sources.length} LIVE SOURCES ACTIVE
          </p>
          <p className="text-gray-800">
            &gt; PIPELINES: GITHUB · SPOTIFY · STRAVA · OURA · RESCUETIME · LEETCODE
          </p>
          <p className="text-[#0f6d00] font-bold">
            &gt; FAULT ISOLATION: ENGAGED | IN-MEMORY TTL CACHE: ACTIVE (180s/600s)
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 pt-1 flex-wrap">
          <button
            onClick={() => {
              soundFx.playClick()
              if (onOpenTerminal) onOpenTerminal()
            }}
            className="bg-black text-[#00ff00] font-bold text-[11px] px-2.5 py-1 win-bevel-outset hover:bg-gray-900 cursor-pointer active:translate-y-0.5"
          >
            &gt; /SYS/TERMINAL
          </button>
          <button
            onClick={() => {
              soundFx.playClick()
              if (onOpenSources) onOpenSources()
            }}
            className="bg-black text-secondary-container font-bold text-[11px] px-2.5 py-1 win-bevel-outset hover:bg-gray-900 cursor-pointer active:translate-y-0.5"
          >
            &gt; /SYS/SOURCES
          </button>
          {onOpenResume && (
            <button
              onClick={() => {
                soundFx.playClick()
                onOpenResume()
              }}
              className="bg-[#000080] text-amber-300 font-bold text-[11px] px-2.5 py-1 win-bevel-outset hover:bg-[#0000a0] cursor-pointer active:translate-y-0.5 ml-auto"
            >
              &gt; EXEC RESUME
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
