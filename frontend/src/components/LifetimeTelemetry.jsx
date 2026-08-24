import { useState, useEffect } from 'react'
import TypewriterText from './TypewriterText'
import { soundFx } from '../utils/audio'

const DEFAULT_METRICS = [
  { label: 'LIFETIME_COMMITS', value: '1,420', unit: 'OPS', status: 'SYNCED', desc: 'GitHub Production & OSS Commits' },
  { label: 'DISTANCE_CYCLED', value: '840.5', unit: 'KM', status: 'ACTIVE', desc: 'Strava GPS Cadence & Endurance' },
  { label: 'TOTAL_CODE_HOURS', value: '2,150', unit: 'HRS', status: 'TRACKED', desc: 'Deep Work & Architecture Time' },
  { label: 'BOOKS_&_PAPERS', value: '52', unit: 'VOL', status: 'PARSED', desc: 'Technical & CS Research Papers' },
  { label: 'ALGO_BENCHMARKS', value: '196', unit: 'PTS', status: 'ACTIVE', desc: 'LeetCode Solved (39d Streak)' },
  { label: 'AUDIO_STREAMS', value: '3,840', unit: 'TRK', status: 'STREAMED', desc: 'SoundCloud & Spotify Telemetry' },
]

export default function LifetimeTelemetry() {
  const [metrics, setMetrics] = useState(DEFAULT_METRICS)
  const [pulseIdx, setPulseIdx] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setPulseIdx((p) => (p + 1) % DEFAULT_METRICS.length)
    }, 2800)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="w-full max-w-6xl mx-auto font-code-terminal">
      {/* Container Window */}
      <div className="win-window win-bevel-outset bg-[#1b1b22] text-[#f4f1de] shadow-[8px_8px_0px_rgba(0,0,0,0.8)] border-2 border-[#363545]">
        {/* Title Bar */}
        <div className="win-titlebar bg-[#000080] text-white px-3 py-1.5 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px] text-amber-300">speed</span>
            <span className="text-[11px] sm:text-[12px] font-bold tracking-wider">
              SYS.TELEMETRY // MACRO_METRICS_AGGREGATOR [ODOMETER]
            </span>
          </div>
          <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-bold">
            <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-gray-300 font-mono">ODOMETER_REGISTERS: 6/6 OK</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-3 sm:p-4 bg-[#141419] space-y-3">
          {/* Diagnostic Subheader */}
          <div className="flex justify-between items-center text-[10px] text-gray-400 border-b border-[#2e2d3e] pb-1.5 font-mono">
            <span>&gt; LIFETIME AGGREGATED TELEMETRY [NON-VOLATILE CACHE]</span>
            <span className="text-emerald-400 font-bold">STATUS: VERIFIED</span>
          </div>

          {/* Odometer Counter Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
            {metrics.map((metric, index) => {
              const isPulsing = pulseIdx === index

              return (
                <div
                  key={index}
                  className={`p-3 win-bevel-inset border border-[#2e2d3e] flex flex-col justify-between transition-all hover:border-[#81b29a] ${
                    isPulsing ? 'bg-[#182218] border-emerald-500/50' : 'bg-[#1a1a24]'
                  }`}
                >
                  {/* Metric Top Label */}
                  <div className="flex justify-between items-start gap-1">
                    <span className="text-gray-400 text-[9px] sm:text-[10px] tracking-wider font-bold uppercase truncate">
                      {metric.label}
                    </span>
                    <span className="text-[9px] font-mono text-gray-600">
                      0x{70 + index}
                    </span>
                  </div>

                  {/* Digital Counter Value */}
                  <div className="flex items-baseline gap-1.5 my-2">
                    <span className="text-xl sm:text-2xl font-black text-white font-mono tracking-tight select-all">
                      {metric.value}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-bold text-amber-400 font-mono">
                      {metric.unit}
                    </span>
                  </div>

                  {/* Register Status Footer */}
                  <div className="flex justify-between items-center text-[9px] border-t border-[#2e2d3e] pt-1.5 font-mono">
                    <span className="text-gray-500 truncate max-w-[110px]">
                      {metric.desc}
                    </span>
                    <span className="text-emerald-400 font-bold flex-shrink-0">
                      [{metric.status}]
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Footer Telemetry */}
          <div className="pt-2 border-t border-[#2e2d3e] flex justify-between items-center text-[10px] text-gray-400 font-mono">
            <span>ODOMETER_ENGINE: ACTIVE POLLING (2800ms)</span>
            <span className="text-[#81b29a] font-bold">TYPE &quot;metrics&quot; IN CLI FOR AUDIT</span>
          </div>
        </div>
      </div>
    </section>
  )
}
