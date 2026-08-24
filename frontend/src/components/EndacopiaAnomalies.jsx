import { useState, useEffect } from 'react'
import { soundFx } from '../utils/audio'

const ANOMALIES_POOL = [
  { id: 'eye-1', name: 'OVERSEER_EYE.DAT', icon: 'visibility', type: 'eye', text: 'You feel THE OVERSEER watching your commit history...' },
  { id: 'cube-1', name: 'SOUL_CUBE.EXE', icon: 'deployed_code', type: 'cube', text: 'Extracted 1.44 MB of corrupted soul memory.' },
  { id: 'orb-1', name: 'NEURAL_ORB.SYS', icon: 'blur_on', type: 'orb', text: 'Parasympathetic frequency synchronized.' },
  { id: 'key-1', name: 'BIO_KEY_ALPHA', icon: 'key', type: 'key', text: 'Sigil Omega decrypted: Endacopia protocol unlocked!' },
]

export default function EndacopiaAnomalies({
  onUnlockEndacopiaMode,
  isEndacopiaMode,
}) {
  const [anomalies, setAnomalies] = useState([])
  const [syncScore, setSyncScore] = useState(0)
  const [lastLog, setLastLog] = useState(null)

  useEffect(() => {
    // Periodically spawn desktop anomalies
    const spawnTimer = setInterval(() => {
      if (anomalies.length < 3) {
        const item = ANOMALIES_POOL[Math.floor(Math.random() * ANOMALIES_POOL.length)]
        const id = `${item.id}-${Date.now()}`
        const x = Math.floor(Math.random() * 70) + 15 // 15% to 85% width
        const y = Math.floor(Math.random() * 60) + 20 // 20% to 80% height

        setAnomalies((prev) => [...prev, { ...item, instanceId: id, x, y }])
      }
    }, 9000)

    return () => clearInterval(spawnTimer)
  }, [anomalies])

  const handleCollectAnomaly = (instanceId, name, text) => {
    soundFx.playBeep(940, 'triangle', 0.15)
    setSyncScore((prev) => prev + 100)
    setLastLog({ name, text })
    setAnomalies((prev) => prev.filter((a) => a.instanceId !== instanceId))
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
      {/* Floating Interactive Desktop Anomalies */}
      {anomalies.map((item) => (
        <div
          key={item.instanceId}
          onClick={(e) => {
            e.stopPropagation()
            handleCollectAnomaly(item.instanceId, item.name, item.text)
          }}
          style={{ top: `${item.y}%`, left: `${item.x}%` }}
          className="pointer-events-auto absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 group transition-all duration-300 hover:scale-110"
        >
          <div className="bg-[#1a1a22] border-2 border-[#363545] text-[#81b29a] p-2 endacopia-clay-card flex items-center gap-1.5 shadow-md">
            <span className="material-symbols-outlined text-[18px] text-[#d4a373]">
              {item.icon}
            </span>
            <span className="font-code-terminal text-[10px] font-bold text-[#f4f1de] tracking-wider uppercase">
              {item.name}
            </span>
          </div>
        </div>
      ))}

      {/* Log Notification popup when an anomaly is clicked */}
      {lastLog && (
        <div className="pointer-events-auto fixed top-20 right-6 z-50 bg-[#1a1a22] border-2 border-[#d4a373] text-[#f4f1de] p-3 endacopia-clay-card font-code-terminal text-[11px] max-w-sm shadow-xl">
          <div className="flex justify-between items-center border-b border-[#363545] pb-1 mb-1 text-[10px] text-[#81b29a] font-bold">
            <span>ENDACOPIA // ANOMALY RECOVERED</span>
            <button onClick={() => setLastLog(null)} className="hover:text-white">
              ✕
            </button>
          </div>
          <p className="font-bold text-[#d4a373]">&gt; {lastLog.name}</p>
          <p className="mt-1 text-gray-300">{lastLog.text}</p>
          <div className="mt-2 text-[10px] text-[#81b29a] font-bold">
            +100 SYNCHRONIZATION (TOTAL: {syncScore})
          </div>
        </div>
      )}

      {/* Synchronization Score Widget (Top Center) */}
      {syncScore > 0 && (
        <div className="pointer-events-auto fixed top-18 left-1/2 transform -translate-x-1/2 z-40 bg-[#1a1a22] text-[#81b29a] font-code-terminal text-[11px] px-3 py-1.5 border border-[#363545] rounded-full flex items-center gap-2 shadow-md">
          <span className="material-symbols-outlined text-[14px] text-[#d4a373]">psychology</span>
          <span>ENDACOPIA SYNC: {syncScore} PTS</span>
        </div>
      )}
    </div>
  )
}
