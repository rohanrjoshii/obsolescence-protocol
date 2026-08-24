import TypewriterText from './TypewriterText'

const DAEMON_TASKS = [
  { time: '08:00', id: 'PID_080', process: 'REVERSE_GATEWAY_SYNC // Telemetry Ingestion', status: 'OK', desc: 'Ingest GitHub, Oura & Strava feeds' },
  { time: '10:00', id: 'PID_100', process: 'ICM_PRODUCTION_SPRINT // Supabase RLS & React UI', status: 'ACTIVE', desc: 'Ship production matrimonial features' },
  { time: '14:00', id: 'PID_140', process: 'DISTRIBUTED_SYSTEMS // Architecture & Docker', status: 'OK', desc: 'Low-latency API proxies & caching' },
  { time: '17:00', id: 'PID_170', process: 'LEETCODE_ALGO_PASS // Daily 39d Streak', status: 'ACTIVE', desc: 'Algorithmic benchmarks (Med/Hard)' },
  { time: '19:00', id: 'PID_190', process: 'STRAVA_CYCLING_TELEMETRY // Cadence & GPS', status: 'WAIT', desc: '22.8km evening endurance ride' },
  { time: '23:00', id: 'PID_230', process: 'OURA_SLEEP_MONITOR // Deep Rest Telemetry', status: 'STANDBY', desc: '86% sleep efficiency baseline' },
]

export default function CronSchedule() {
  return (
    <section className="w-full max-w-6xl mx-auto font-code-terminal">
      {/* Container Window */}
      <div className="win-window win-bevel-outset bg-[#1b1b22] text-[#f4f1de] shadow-[8px_8px_0px_rgba(0,0,0,0.8)] border-2 border-[#363545]">
        {/* Title Bar */}
        <div className="win-titlebar bg-[#000080] text-white px-3 py-1.5 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px] text-emerald-400">schedule</span>
            <span className="text-[11px] sm:text-[12px] font-bold tracking-wider">
              SYS.CRON // DAEMON_TASKS &amp; OPERATIONAL CADENCE
            </span>
          </div>
          <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-bold">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="bg-emerald-600 text-black px-1.5 py-0.2 rounded-xs font-bold text-[9px]">LIVE DAEMON</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-3 sm:p-4 bg-[#141419] space-y-2.5">
          {/* Table Column Headers */}
          <div className="grid grid-cols-12 gap-2 text-gray-400 text-[10px] sm:text-[11px] font-bold pb-1.5 border-b border-[#2e2d3e] uppercase tracking-wider">
            <div className="col-span-2 sm:col-span-2">TIMESTAMP</div>
            <div className="col-span-2 hidden sm:block">PROCESS_ID</div>
            <div className="col-span-7 sm:col-span-6">TASK_PAYLOAD</div>
            <div className="col-span-3 sm:col-span-2 text-right">STATUS</div>
          </div>

          {/* Daemon Tasks Grid */}
          <div className="space-y-1.5">
            {DAEMON_TASKS.map((task, index) => {
              const isActive = task.status === 'ACTIVE'
              const isOk = task.status === 'OK'

              const statusBadge =
                isActive
                  ? 'bg-emerald-500 text-black animate-pulse'
                  : isOk
                  ? 'bg-[#242330] text-emerald-400 border border-emerald-800/60'
                  : 'bg-[#181822] text-gray-500 border border-gray-800'

              return (
                <div
                  key={task.id}
                  className={`grid grid-cols-12 gap-2 items-center p-2 win-bevel-inset border border-[#2e2d3e] text-[11px] sm:text-[12px] font-mono transition-colors ${
                    isActive
                      ? 'bg-[#1a221a] border-emerald-500/40'
                      : 'bg-[#1a1a24] hover:bg-[#20202c]'
                  }`}
                >
                  {/* Timestamp */}
                  <div className="col-span-2 sm:col-span-2 text-amber-300 font-bold">
                    [{task.time}]
                  </div>

                  {/* Process ID */}
                  <div className="col-span-2 hidden sm:block text-gray-400 font-bold">
                    {task.id}
                  </div>

                  {/* Process Name with Staggered Typewriter Animation */}
                  <div className="col-span-7 sm:col-span-6 text-white truncate">
                    <TypewriterText
                      text={task.process}
                      delay={14}
                      startDelay={index * 260}
                      showCursor={isActive}
                    />
                  </div>

                  {/* Status Indicator */}
                  <div className="col-span-3 sm:col-span-2 text-right">
                    <span className={`inline-block px-1.5 py-0.5 text-[9px] font-bold win-bevel-outset ${statusBadge}`}>
                      [{task.status}]
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Footer Telemetry */}
          <div className="pt-2 border-t border-[#2e2d3e] flex justify-between items-center text-[10px] text-gray-400 font-mono">
            <span>SCHEDULE: 24-HOUR AUTOMATED CADENCE</span>
            <span className="text-[#81b29a] font-bold">6/6 DAEMONS SCHEDULED</span>
          </div>
        </div>
      </div>
    </section>
  )
}
