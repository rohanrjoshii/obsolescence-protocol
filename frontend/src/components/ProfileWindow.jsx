import { useState, useEffect } from 'react'
import DraggableWindow from './DraggableWindow'

const PROFILE = {
  name: 'Rohan Joshi',
  title: 'Full-Stack & AI Developer',
  role: 'Software Developer Intern @ India Christian Matrimony (ICM)',
  location: 'Bengaluru, Karnataka',
  phone: '+91 6361195409',
  email: 'rohan.joshi.dev@gmail.com',
  education: 'BCA @ PES University (2023 - 2026)',
  linkedin: {
    url: 'https://linkedin.com/in/rohanrj1008',
    handle: 'rohanrj1008',
    connections: '500+',
    headline: 'Software Developer Intern @ India Christian Matrimony | BCA @ PES University',
    skills: ['React', 'FastAPI', 'PostgreSQL (Supabase)', 'SwiftUI', 'PyTorch', 'TensorFlow', 'Node.js', 'Docker', 'Firebase'],
  },
  github: {
    url: 'https://github.com/rohanrjoshii',
    handle: 'rohanrjoshii',
  },
  leetcode: {
    url: 'https://leetcode.com/u/Rohan2502/',
    handle: 'Rohan2502',
    solved: 196,
    easy: 62,
    medium: 98,
    hard: 36,
    ranking: '#862,436',
    streak: 39,
    badges: ['50 Days Badge 2026', 'Jul LeetCoding Challenge'],
  },
}

export default function ProfileWindow({
  isOpen,
  isMinimized,
  onClose,
  onMinimize,
  onFocus,
  zIndex,
}) {
  const [lcData, setLcData] = useState(null)

  useEffect(() => {
    if (isOpen) {
      fetch(`/api/profile/leetcode/${PROFILE.leetcode.handle}`)
        .then((r) => r.json())
        .then((data) => {
          if (!data.error) setLcData(data)
        })
        .catch(() => {})
    }
  }, [isOpen])

  const solved = lcData?.solved || PROFILE.leetcode
  const ranking = lcData?.ranking ? `#${lcData.ranking.toLocaleString()}` : PROFILE.leetcode.ranking
  const streak = lcData?.streak ?? PROFILE.leetcode.streak

  return (
    <DraggableWindow
      id="profile"
      title="DEVELOPER_PROFILE // CREDENTIALS & BENCHMARKS"
      isOpen={isOpen}
      isMinimized={isMinimized}
      onClose={() => onClose('profile')}
      onMinimize={onMinimize}
      onFocus={onFocus}
      zIndex={zIndex}
      width="max-w-3xl"
      titleBg="bg-[#000080]"
      headerIcon="badge"
      initialPosition={{ x: 70, y: 50 }}
    >
      <div className="bg-[#141419] text-[#f4f1de] font-code-terminal p-4 space-y-4 text-[12px]">
        {/* Header Bar */}
        <div className="bg-black text-white p-3 win-bevel-inset flex justify-between items-center">
          <div>
            <span className="text-secondary-container font-bold text-[13px]">&gt; ENGINEER DOSSIER: {PROFILE.name.toUpperCase()}</span>
            <p className="text-[11px] text-gray-400">{PROFILE.role} · {PROFILE.location}</p>
          </div>
          <span className="bg-[#0f6d00] text-white text-[10px] font-bold px-2 py-0.5 win-bevel-outset">
            ACTIVE
          </span>
        </div>

        {/* 2 Column Telemetry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Experience & Skills Section */}
          <div className="bg-[#1a1a24] p-3 win-bevel-outset space-y-3">
            <div className="flex items-center gap-2 border-b border-[#2e2d3e] pb-2">
              <span className="material-symbols-outlined text-[#5eadf0] text-[18px]">contact_page</span>
              <span className="font-bold text-[#5eadf0]">PROFESSIONAL EXPERIENCE</span>
            </div>

            <div className="space-y-1.5 text-[11px]">
              <div className="flex justify-between">
                <span className="text-gray-400">Current Role:</span>
                <span className="font-bold text-white">Software Developer Intern</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Company:</span>
                <span className="font-bold text-[#81b29a]">India Christian Matrimony</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Education:</span>
                <span className="font-bold text-[#d4a373]">PES University (BCA)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Email:</span>
                <span className="font-bold text-white font-mono">{PROFILE.email}</span>
              </div>
            </div>

            <div>
              <span className="text-[10px] text-gray-400 font-bold block mb-1">CORE TECH STACK:</span>
              <div className="flex flex-wrap gap-1">
                {PROFILE.linkedin.skills.map((s) => (
                  <span key={s} className="bg-[#242330] text-[#81b29a] text-[10px] px-1.5 py-0.5 win-bevel-outset font-mono">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-1.5 pt-1">
              <a
                href={PROFILE.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center win-bevel-button bg-[#000080] hover:bg-[#0000a0] text-white py-1.5 text-[11px] font-bold"
              >
                LinkedIn &rarr;
              </a>
              <a
                href={PROFILE.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center win-bevel-button bg-[#363545] hover:bg-[#4a485c] text-white py-1.5 text-[11px] font-bold"
              >
                GitHub &rarr;
              </a>
            </div>
          </div>

          {/* LeetCode & Projects Section */}
          <div className="bg-[#1a1a24] p-3 win-bevel-outset space-y-3">
            <div className="flex items-center gap-2 border-b border-[#2e2d3e] pb-2">
              <span className="material-symbols-outlined text-[#f59e0b] text-[18px]">code</span>
              <span className="font-bold text-[#f59e0b]">LEETCODE ALGORITHM BENCHMARK</span>
            </div>

            <div className="space-y-1.5 text-[11px]">
              <div className="flex justify-between">
                <span className="text-gray-400">Handle:</span>
                <span className="font-bold text-white">@{PROFILE.leetcode.handle}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Global Rank:</span>
                <span className="font-bold text-[#d4a373]">{ranking}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Active Streak:</span>
                <span className="font-bold text-amber-400">{streak} Days</span>
              </div>
            </div>

            {/* Solved breakdown */}
            <div className="space-y-1.5 pt-1 border-t border-[#2e2d3e]">
              <div className="flex justify-between text-[11px]">
                <span className="text-[#22c55e] font-bold">Easy Solved:</span>
                <span className="font-bold text-white">{solved.easy}</span>
              </div>
              <div className="flex justify-between text-[11px]">
                <span className="text-[#f59e0b] font-bold">Medium Solved:</span>
                <span className="font-bold text-white">{solved.medium}</span>
              </div>
              <div className="flex justify-between text-[11px]">
                <span className="text-[#ef4444] font-bold">Hard Solved:</span>
                <span className="font-bold text-white">{solved.hard}</span>
              </div>
              <div className="flex justify-between text-[11px] pt-1 border-t border-[#2e2d3e] font-bold">
                <span className="text-white">Total Solved:</span>
                <span className="text-[#d4a373] text-[13px]">{solved.total}</span>
              </div>
            </div>

            <a
              href={PROFILE.leetcode.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center win-bevel-button bg-[#363545] hover:bg-[#4a485c] text-white py-1.5 text-[11px] font-bold mt-2"
            >
              Open LeetCode Profile &rarr;
            </a>
          </div>

        </div>
      </div>
    </DraggableWindow>
  )
}
