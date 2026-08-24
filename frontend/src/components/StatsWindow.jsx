import { useState, useEffect } from 'react'
import DraggableWindow from './DraggableWindow'
import { fetchStats } from '../api/lifeFeed'

export default function StatsWindow({
  isOpen,
  isMinimized,
  onClose,
  onMinimize,
  onFocus,
  zIndex,
  isDemo,
}) {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (isOpen) {
      loadStats()
    }
  }, [isOpen, isDemo])

  const loadStats = async () => {
    try {
      setLoading(true)
      const data = await fetchStats({ demo: isDemo })
      setStats(data)
    } catch (err) {
      console.error('Failed to load stats:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <DraggableWindow
      id="stats"
      title="SYSTEM METRICS & ANALYTICS - [LIFE MONITOR]"
      isOpen={isOpen}
      isMinimized={isMinimized}
      onClose={onClose}
      onMinimize={onMinimize}
      onFocus={onFocus}
      zIndex={zIndex}
      width="max-w-4xl"
      titleBg="bg-[#008080]"
      headerIcon="analytics"
      initialPosition={{ x: 60, y: 50 }}
    >
      {loading ? (
        <div className="p-8 text-center font-code-terminal">
          <p>&gt; COMPUTING SYSTEM METRICS...</p>
          <p className="text-secondary-container mt-2">&gt; AGGREGATING DATA STREAMS...</p>
        </div>
      ) : !stats ? (
        <p className="text-error font-bold">&gt; UNABLE TO GENERATE STATS SUMMARY.</p>
      ) : (
        <div className="space-y-6">
          {/* Top Banner */}
          <div className="bg-black text-white p-3 win-bevel-inset flex justify-between items-center">
            <div>
              <span className="text-secondary-container font-bold">&gt; OBSOLESCENCE REPORT</span>
              <p className="text-[11px] text-gray-400">DATA STREAM METRICS OVERVIEW</p>
            </div>
            <button
              onClick={loadStats}
              className="win-bevel-button bg-gray-300 text-black px-3 py-1 text-[12px] font-bold"
            >
              REFRESH STATS
            </button>
          </div>

          {/* Grid of Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-code-terminal text-[13px]">
            {/* GitHub Card */}
            <div className="bg-white p-3 win-bevel-outset space-y-2">
              <div className="flex items-center gap-2 border-b border-gray-300 pb-1">
                <span className="material-symbols-outlined text-[#000080]">code</span>
                <span className="font-bold text-[#000080]">KNOWLEDGE & CODE (GITHUB)</span>
              </div>
              <div className="flex justify-between">
                <span>Total Commits:</span>
                <span className="font-bold text-black">{stats.github.commits}</span>
              </div>
              <div className="flex justify-between">
                <span>Pull Requests / Issues:</span>
                <span className="font-bold text-black">
                  {stats.github.pullRequests} PRs / {stats.github.issues} Issues
                </span>
              </div>
              <div className="pt-2 border-t border-gray-200">
                <p className="text-[11px] font-bold text-gray-700">TOP REPOSITORIES:</p>
                {stats.github.topRepos.slice(0, 3).map((r, i) => (
                  <div key={i} className="flex justify-between text-[11px] text-gray-800">
                    <span className="truncate max-w-[200px]">&gt; {r.repo}</span>
                    <span>{r.count} events</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sleep Card (Oura) */}
            <div className="bg-white p-3 win-bevel-outset space-y-2">
              <div className="flex items-center gap-2 border-b border-gray-300 pb-1">
                <span className="material-symbols-outlined text-[#800000]">bed</span>
                <span className="font-bold text-[#800000]">SLEEP RECOVERY (OURA)</span>
              </div>
              <div className="flex justify-between">
                <span>Average Duration:</span>
                <span className="font-bold text-black">{stats.sleep.avgDurationHours} hrs/night</span>
              </div>
              <div className="flex justify-between">
                <span>Average Efficiency:</span>
                <span className="font-bold text-black">{stats.sleep.avgEfficiency}%</span>
              </div>
              <div className="flex justify-between">
                <span>Sleep Score:</span>
                <span className="font-bold text-black">{stats.sleep.avgScore} / 100</span>
              </div>
              {/* Progress bar */}
              <div className="w-full bg-gray-300 h-4 win-bevel-inset overflow-hidden mt-2">
                <div
                  className="bg-[#800000] h-full text-white text-[9px] flex items-center justify-center font-bold"
                  style={{ width: `${Math.min(100, stats.sleep.avgScore)}%` }}
                >
                  {stats.sleep.avgScore}% RECOVERY
                </div>
              </div>
            </div>

            {/* Workouts Card (Strava) */}
            <div className="bg-white p-3 win-bevel-outset space-y-2">
              <div className="flex items-center gap-2 border-b border-gray-300 pb-1">
                <span className="material-symbols-outlined text-[#008000]">directions_run</span>
                <span className="font-bold text-[#008000]">MOVEMENT & FITNESS (STRAVA)</span>
              </div>
              <div className="flex justify-between">
                <span>Total Workouts:</span>
                <span className="font-bold text-black">{stats.workouts.totalWorkouts} activities</span>
              </div>
              <div className="flex justify-between">
                <span>Total Distance:</span>
                <span className="font-bold text-black">{stats.workouts.totalDistanceKm} km</span>
              </div>
              <div className="flex justify-between">
                <span>Total Calories Burned:</span>
                <span className="font-bold text-black">{stats.workouts.totalCalories} kcal</span>
              </div>
            </div>

            {/* RescueTime Productivity Card */}
            <div className="bg-white p-3 win-bevel-outset space-y-2">
              <div className="flex items-center gap-2 border-b border-gray-300 pb-1">
                <span className="material-symbols-outlined text-[#008080]">schedule</span>
                <span className="font-bold text-[#008080]">PRODUCTIVITY (RESCUETIME)</span>
              </div>
              <div className="flex justify-between">
                <span>Productive Hours:</span>
                <span className="font-bold text-black">{stats.timeTracking.productiveHours} hrs</span>
              </div>
              <div className="flex justify-between">
                <span>Distracting Hours:</span>
                <span className="font-bold text-black">{stats.timeTracking.distractingHours} hrs</span>
              </div>
              <div className="w-full bg-gray-300 h-4 win-bevel-inset overflow-hidden mt-2">
                <div
                  className="bg-[#008080] h-full text-white text-[9px] flex items-center justify-center font-bold"
                  style={{ width: `${Math.min(100, stats.timeTracking.productivityScore)}%` }}
                >
                  {stats.timeTracking.productivityScore}% PRODUCTIVE
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </DraggableWindow>
  )
}
