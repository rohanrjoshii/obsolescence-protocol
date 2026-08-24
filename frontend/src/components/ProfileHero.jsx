import { useState, useEffect } from 'react'

const ME = {
  name: 'Rohan Joshi',
  title: 'Full-Stack & AI Developer',
  role: 'Software Developer Intern @ India Christian Matrimony',
  education: 'BCA @ PES University, Bengaluru',
  email: 'rohan.joshi.dev@gmail.com',
  phone: '+91 6361195409',
  location: 'Bengaluru, Karnataka',
  linkedin: {
    handle: 'rohanrj1008',
    url: 'https://linkedin.com/in/rohanrj1008',
    connections: '500+',
    status: 'Open to Opportunities',
    skills: [
      'React',
      'FastAPI',
      'PostgreSQL',
      'Supabase',
      'SwiftUI',
      'PyTorch',
      'TensorFlow',
      'Node.js',
      'Docker',
      'Firebase',
      'Python',
      'TypeScript',
    ],
  },
  github: {
    handle: 'rohanrjoshii',
    url: 'https://github.com/rohanrjoshii',
  },
  leetcode: {
    handle: 'Rohan2502',
    url: 'https://leetcode.com/u/Rohan2502/',
  },
}

const METRIC_CONFIG = {
  easy: { label: 'Easy', color: '#22c55e', barColor: 'bg-emerald-500', totalInLc: 830 },
  medium: { label: 'Medium', color: '#f59e0b', barColor: 'bg-amber-500', totalInLc: 1730 },
  hard: { label: 'Hard', color: '#ef4444', barColor: 'bg-rose-500', totalInLc: 750 },
}

export default function ProfileHero({ onOpenContact, onOpenResume }) {
  const [lcData, setLcData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`/api/profile/leetcode/${ME.leetcode.handle}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.error) throw new Error(data.error)
        setLcData(data)
        setLoading(false)
      })
      .catch(() => {
        // Fallback with verified stats
        setLcData({
          username: ME.leetcode.handle,
          ranking: 862436,
          solved: { total: 196, easy: 62, medium: 98, hard: 36 },
          streak: 39,
          activeDays: 78,
          badges: ['50 Days Badge 2026', 'Jul LeetCoding Challenge'],
        })
        setLoading(false)
      })
  }, [])

  const totalSolved = lcData?.solved?.total || 196
  const rankingFormatted = lcData?.ranking ? lcData.ranking.toLocaleString() : '862,436'

  return (
    <section className="w-full max-w-6xl mx-auto font-code-terminal">
      {/* Container Window */}
      <div className="win-window win-bevel-outset bg-[#1b1b22] text-[#f4f1de] shadow-[8px_8px_0px_rgba(0,0,0,0.8)] border-2 border-[#363545]">
        {/* Title Bar */}
        <div className="win-titlebar bg-[#000080] text-white px-3 py-1.5 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <span className="material-symbols-outlined text-[16px] text-primary-container flex-shrink-0">badge</span>
            <span className="text-[11px] sm:text-[12px] font-bold tracking-wider truncate">
              DEVELOPER_DOSSIER // TELEMETRY &amp; CREDENTIALS [ID: {ME.name.toUpperCase()}]
            </span>
          </div>
          <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-bold text-gray-300">
            <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span>VERIFIED CREDENTIALS</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-3 sm:p-5 space-y-4 bg-[#141419]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            
            {/* LEFT: Experience, Skills & Credentials Dossier (5 cols) */}
            <div className="lg:col-span-5 bg-[#1a1a24] p-3.5 sm:p-4 win-bevel-inset border border-[#2e2d3e] flex flex-col justify-between space-y-3.5">
              <div>
                {/* Header info */}
                <div className="flex items-start justify-between border-b border-[#2e2d3e] pb-3">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h2 className="text-[17px] sm:text-[19px] font-bold text-white tracking-wide">{ME.name}</h2>
                      <span className="bg-[#0f6d00] text-white text-[9px] font-bold px-1.5 py-0.5 win-bevel-outset">
                        INTERN @ ICM
                      </span>
                    </div>
                    <p className="text-[12px] sm:text-[13px] text-[#81b29a] font-bold mt-0.5">{ME.title}</p>
                    <p className="text-[11px] text-gray-400 mt-0.5">
                      {ME.location} • {ME.phone}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-[10px] text-gray-400 block font-bold">EDUCATION</span>
                    <span className="text-[12px] font-bold text-[#d4a373]">PES University</span>
                  </div>
                </div>

                {/* Experience Banner */}
                <div className="mt-3 bg-[#242330] p-2.5 win-bevel-inset border-l-2 border-[#d4a373] space-y-0.5">
                  <span className="text-[9px] text-gray-400 block uppercase font-bold">Current Production Role:</span>
                  <p className="text-[11px] text-white font-bold">&gt; {ME.role}</p>
                  <p className="text-[10px] text-gray-300">FastAPI, PostgreSQL (Supabase RLS), React, CI/CD</p>
                </div>

                {/* Technical Stack */}
                <div className="mt-3 space-y-1.5">
                  <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">
                    Core Technical Competencies:
                  </span>
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {ME.linkedin.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-[#242330] text-[#f4f1de] text-[10px] sm:text-[11px] px-2 py-0.5 win-bevel-outset border border-[#3e3d50] font-mono hover:text-[#d4a373] transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons: Contact + Resume + Links */}
              <div className="pt-2 space-y-2">
                <div className="grid grid-cols-2 gap-1.5">
                  <button
                    onClick={onOpenContact}
                    className="w-full flex items-center justify-center gap-1 win-bevel-button bg-[#000080] hover:bg-[#0000a0] text-white py-2 px-1.5 text-[11px] font-bold transition-all shadow-[2px_2px_0px_rgba(0,0,0,0.6)] cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[14px] text-amber-300">mail</span>
                    <span>CONTACT</span>
                  </button>
                  <button
                    onClick={onOpenResume}
                    className="w-full flex items-center justify-center gap-1 win-bevel-button bg-[#363545] hover:bg-[#4a485c] text-white py-2 px-1.5 text-[11px] font-bold transition-all shadow-[2px_2px_0px_rgba(0,0,0,0.6)] cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[14px] text-primary-container">description</span>
                    <span>VIEW RESUME</span>
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-1.5">
                  <a
                    href={ME.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-1 win-bevel-button bg-[#2b2a36] hover:bg-[#3b3a4a] text-white py-1.5 px-1.5 text-[10px] font-bold transition-all text-center"
                  >
                    <svg className="w-3 h-3 fill-current text-[#5eadf0]" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <span>LINKEDIN</span>
                  </a>
                  <a
                    href={ME.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-1 win-bevel-button bg-[#2b2a36] hover:bg-[#3b3a4a] text-white py-1.5 px-1.5 text-[10px] font-bold transition-all text-center"
                  >
                    <span className="material-symbols-outlined text-[13px] text-amber-300">code</span>
                    <span>GITHUB</span>
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT: Featured Projects & LeetCode Benchmarks (7 cols) */}
            <div className="lg:col-span-7 bg-[#1a1a24] p-3.5 sm:p-4 win-bevel-inset border border-[#2e2d3e] flex flex-col justify-between space-y-4">
              <div>
                {/* Header Metrics Bar */}
                <div className="flex items-center justify-between border-b border-[#2e2d3e] pb-3 flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#f59e0b] text-[18px] sm:text-[20px]">code_blocks</span>
                    <div>
                      <span className="text-[12px] sm:text-[13px] font-bold text-white">LEETCODE BENCHMARK</span>
                      <span className="text-[10px] sm:text-[11px] text-gray-400 block">HANDLE: @{ME.leetcode.handle}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-4 text-right">
                    <div>
                      <span className="text-[10px] text-gray-400 block font-bold">GLOBAL RANK</span>
                      <span className="text-[12px] sm:text-[13px] font-bold text-[#d4a373]">#{rankingFormatted}</span>
                    </div>
                    {lcData?.streak > 0 && (
                      <div className="pl-3 border-l border-[#2e2d3e]">
                        <span className="text-[10px] text-gray-400 block font-bold">STREAK</span>
                        <span className="text-[12px] sm:text-[13px] font-bold text-amber-400">{lcData.streak} DAYS</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Primary Metric Scoreboard */}
                <div className="grid grid-cols-3 gap-2 my-3">
                  <div className="bg-[#242330] p-2 sm:p-2.5 win-bevel-inset text-center">
                    <span className="text-[9px] sm:text-[10px] text-gray-400 block font-bold">TOTAL SOLVED</span>
                    <span className="text-[17px] sm:text-[20px] font-bold text-white">{totalSolved}</span>
                  </div>
                  <div className="bg-[#242330] p-2 sm:p-2.5 win-bevel-inset text-center">
                    <span className="text-[9px] sm:text-[10px] text-gray-400 block font-bold">ACTIVE DAYS</span>
                    <span className="text-[17px] sm:text-[20px] font-bold text-[#81b29a]">{lcData?.activeDays || 78}</span>
                  </div>
                  <div className="bg-[#242330] p-2 sm:p-2.5 win-bevel-inset text-center">
                    <span className="text-[9px] sm:text-[10px] text-gray-400 block font-bold">STATUS</span>
                    <span className="text-[13px] sm:text-[14px] font-bold text-green-400 leading-[26px] sm:leading-[30px]">ACTIVE</span>
                  </div>
                </div>

                {/* Breakdown Bars */}
                <div className="space-y-2 sm:space-y-2.5 mt-3">
                  {Object.entries(METRIC_CONFIG).map(([key, config]) => {
                    const count = lcData?.solved?.[key] || 0
                    const percent = Math.min(100, Math.round((count / config.totalInLc) * 100))

                    return (
                      <div key={key} className="space-y-1">
                        <div className="flex justify-between text-[10px] sm:text-[11px] font-mono">
                          <span style={{ color: config.color }} className="font-bold">
                            &gt; {config.label.toUpperCase()}
                          </span>
                          <span className="text-gray-300">
                            <strong className="text-white">{count}</strong> solved
                          </span>
                        </div>
                        <div className="w-full bg-[#121216] h-2.5 win-bevel-inset overflow-hidden">
                          <div
                            className={`h-full ${config.barColor} transition-all duration-700`}
                            style={{ width: `${Math.max(4, percent * 3)}%` }}
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Featured Projects Highlight */}
                <div className="mt-3.5 pt-3 border-t border-[#2e2d3e] space-y-1.5">
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">
                    Featured Systems &amp; Projects:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[10px]">
                    <div className="bg-[#242330] p-1.5 win-bevel-inset">
                      <span className="font-bold text-emerald-400">⚡ Nimbus (macOS Island)</span>
                      <p className="text-gray-300">Swift, AppKit, Kernel APIs</p>
                    </div>
                    <div className="bg-[#242330] p-1.5 win-bevel-inset">
                      <span className="font-bold text-amber-300">📊 FilterIQ (Data Engine)</span>
                      <p className="text-gray-300">FastAPI, Pandas, Docker</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <a
                  href={ME.leetcode.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 win-bevel-button bg-[#363545] hover:bg-[#4a485c] text-white py-2 px-3 text-[11px] sm:text-[12px] font-bold transition-all shadow-[2px_2px_0px_rgba(0,0,0,0.6)] cursor-pointer text-center"
                >
                  <span className="material-symbols-outlined text-[15px] text-[#f59e0b]">open_in_new</span>
                  <span>VIEW LEETCODE PROFILE &amp; SUBMISSIONS &rarr;</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
