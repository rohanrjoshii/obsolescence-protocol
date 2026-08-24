import { soundFx } from '../utils/audio'

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null

  const handlePrint = () => {
    soundFx.playExec()
    window.print()
  }

  const handleDownloadTxt = () => {
    soundFx.playClick()
    const resumeText = `================================================================================
                                 ROHAN JOSHI
  Bengaluru, Karnataka • +91 6361195409 • rohan.joshi.dev@gmail.com
  LinkedIn: linkedin.com/in/rohanrj1008 • GitHub: github.com/rohanrjoshii
================================================================================

SUMMARY
Full-stack developer with experience building production web applications using React,
FastAPI, PostgreSQL (Supabase), Firebase, and SwiftUI. Built AI-powered applications
using PyTorch and TensorFlow, including a deepfake detection platform and real-time
emotion recognition system.

--------------------------------------------------------------------------------
EXPERIENCE
--------------------------------------------------------------------------------
Software Developer Intern                                 Dec 2025 – Present
India Christian Matrimony (ICM)                           Bengaluru, India
• Built a full-stack matrimonial platform with 15+ responsive UI screens,
  authentication workflows, backend APIs, and CI/CD deployment pipelines.
• Built the Supabase (PostgreSQL) backend with Row Level Security (RLS) for secure
  real-time sync and scalable profile management.
• Developed onboarding, profile management, and matchmaking features using React,
  Supabase, and REST APIs.
• Implemented RESTful API layer with structured validation and optimised client-server
  data handling.

--------------------------------------------------------------------------------
TECHNICAL SKILLS
--------------------------------------------------------------------------------
• Frontend: React, SwiftUI, AppKit, React Native, Tailwind CSS, Vite
• Backend: FastAPI, Node.js, Firebase, REST APIs
• Databases: PostgreSQL (Supabase), MySQL, Firestore
• AI / ML: PyTorch, TensorFlow, OpenCV, Hugging Face Transformers, NLP
• Languages: Python, JavaScript, TypeScript, Swift, Java, Dart, HTML/CSS
• Tools: Docker, Git, GitHub Actions, CI/CD

--------------------------------------------------------------------------------
FEATURED PROJECTS
--------------------------------------------------------------------------------
1. Nimbus | macOS Dynamic Island Clone (Swift, SwiftUI, AppKit, CoreLocation, EventKit)
   • Built a macOS Dynamic Island clone with live system monitoring (CPU, RAM,
     network, battery), media controls, real-time weather, and calendar integration
     with zero external dependencies.
   • Engineered morphing between 5 window geometries using NSPanel + NSAnimationContext
     with cubic Bézier easing; sourced telemetry directly from raw kernel APIs
     (host_processor_info, IOKit, getifaddrs).
   • Integrated CoreLocation + Open-Meteo weather, EventKit calendar, and SMAppService
     launch-at-login with graceful permission-denied fallbacks.

2. FilterIQ | Smart Data Filtering App (Python, FastAPI, Pandas, JavaScript, Docker)
   • Built a full-stack app for filtering Excel/CSV/PDF files via natural language
     queries, processing 10,000+ rows in under 2 seconds.
   • Engineered a data normalisation system with 95%+ accuracy using regex + Pandas,
     supporting 12+ operators (equals, contains, between, AND/OR logic).
   • Reduced manual filtering time by 80%; built responsive UI with Chart.js
     visualisations and dark/light themes.

3. Satya | Deepfake Detection Platform (React, FastAPI, PyTorch, OpenCV)
   • Developed an AI-powered deepfake detection platform achieving 90%+ prediction
     accuracy on manipulated media during internal testing.
   • Integrated OpenCV frame-extraction pipeline processing 500+ video frames per
     submission; displayed real-time confidence scores via React frontend.

4. BizzConnect | B2B Networking App (Flutter, Firebase, K-Means)
   • Built a location-based B2B networking app with intelligent business discovery
     powered by K-Means clustering for matchmaking relevance.
   • Implemented Firebase backend with authentication and real-time profile updates
     for 100+ simulated users.

--------------------------------------------------------------------------------
CERTIFICATIONS
--------------------------------------------------------------------------------
• Oracle OCI Generative AI Professional – Oracle
• Google AI Intensive (5-Day) – Google
• McKinsey Forward Program – McKinsey & Company
• AI Fluency for Students – Anthropic

--------------------------------------------------------------------------------
EDUCATION
--------------------------------------------------------------------------------
PES University, RR Campus                                 Bengaluru, India
Bachelor of Computer Applications (BCA)                   Aug 2023 – May 2026
================================================================================`

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'Rohan_Joshi_Software_Developer_Resume.txt'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  return (
    <div
      className="fixed inset-0 z-[160] flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-xs font-code-terminal"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl max-h-[90vh] win-window win-bevel-outset bg-[#1b1b24] shadow-[16px_16px_0px_rgba(0,0,0,0.95)] border-2 border-[#363545] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title Bar */}
        <div className="win-titlebar bg-[#000080] text-white px-3 py-1.5 flex items-center justify-between select-none flex-shrink-0">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px] text-amber-300">description</span>
            <span className="text-[12px] font-bold tracking-wider">
              ATS_RESUME_VIEWER // ROHAN_JOSHI_RESUME.PDF
            </span>
          </div>
          <button
            onClick={() => {
              soundFx.playClick()
              onClose()
            }}
            className="win-bevel-button bg-gray-300 text-black px-2 py-0.5 text-[11px] font-bold hover:bg-white leading-none"
          >
            ✕
          </button>
        </div>

        {/* Action Toolbar */}
        <div className="bg-[#242330] p-2.5 border-b border-[#363545] flex items-center justify-between gap-2 flex-wrap flex-shrink-0">
          <div className="flex items-center gap-2 text-[11px] text-gray-300">
            <span className="bg-[#0f6d00] text-white text-[9px] font-bold px-1.5 py-0.5 win-bevel-outset">
              ATS-OPTIMIZED
            </span>
            <span className="hidden sm:inline">Clean, machine-readable developer curriculum vitae.</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadTxt}
              className="win-bevel-button bg-gray-300 hover:bg-white text-black px-2.5 py-1 text-[11px] font-bold flex items-center gap-1 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[14px]">download</span>
              <span>DOWNLOAD .TXT</span>
            </button>
            <button
              onClick={handlePrint}
              className="win-bevel-button bg-[#000080] hover:bg-[#0000a0] text-white px-3 py-1 text-[11px] font-bold flex items-center gap-1 shadow-[2px_2px_0px_rgba(0,0,0,0.5)] cursor-pointer"
            >
              <span className="material-symbols-outlined text-[14px]">print</span>
              <span>PRINT / PDF &rarr;</span>
            </button>
          </div>
        </div>

        {/* Resume Content Paper */}
        <div className="p-4 sm:p-6 overflow-y-auto bg-[#ffffff] text-[#111111] font-mono text-[11px] sm:text-[12px] leading-relaxed space-y-4 select-text">
          {/* Header */}
          <div className="text-center border-b-2 border-black pb-3">
            <h1 className="text-[22px] sm:text-[26px] font-black tracking-tight uppercase">Rohan Joshi</h1>
            <p className="text-[11px] text-gray-700 mt-0.5">
              Bengaluru, Karnataka • +91 6361195409 • <a href="mailto:rohan.joshi.dev@gmail.com" className="underline font-bold">rohan.joshi.dev@gmail.com</a>
            </p>
            <p className="text-[11px] text-gray-700 mt-0.5">
              LinkedIn: <a href="https://linkedin.com/in/rohanrj1008" target="_blank" rel="noreferrer" className="underline font-bold">linkedin.com/in/rohanrj1008</a> • GitHub: <a href="https://github.com/rohanrjoshii" target="_blank" rel="noreferrer" className="underline font-bold">github.com/rohanrjoshii</a>
            </p>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-[12px] font-black uppercase tracking-wider bg-gray-200 px-2 py-0.5 mb-1.5 border-l-4 border-black">
              Summary
            </h2>
            <p className="text-gray-900">
              Full-stack developer with experience building production web applications using <strong>React</strong>, <strong>FastAPI</strong>, <strong>PostgreSQL (Supabase)</strong>, <strong>Firebase</strong>, and <strong>SwiftUI</strong>. Built AI-powered applications using <strong>PyTorch</strong> and <strong>TensorFlow</strong>, including a deepfake detection platform and real-time emotion recognition system.
            </p>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-[12px] font-black uppercase tracking-wider bg-gray-200 px-2 py-0.5 mb-1.5 border-l-4 border-black">
              Experience
            </h2>
            <div className="space-y-1 text-gray-900">
              <div className="flex justify-between font-bold">
                <span>Software Developer Intern</span>
                <span className="text-gray-600">Dec 2025 – Present</span>
              </div>
              <div className="flex justify-between text-gray-700 italic text-[11px]">
                <span>India Christian Matrimony (ICM)</span>
                <span>Bengaluru, India</span>
              </div>
              <ul className="list-disc list-inside space-y-0.5 text-gray-800 text-[11px] pt-1">
                <li>Built a full-stack matrimonial platform with 15+ responsive UI screens, authentication workflows, backend APIs, and CI/CD deployment pipelines.</li>
                <li>Built the Supabase (PostgreSQL) backend with Row Level Security (RLS) for secure real-time sync and scalable profile management.</li>
                <li>Developed onboarding, profile management, and matchmaking features using React, Supabase, and REST APIs.</li>
                <li>Implemented RESTful API layer with structured validation and optimised client-server data handling.</li>
              </ul>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-[12px] font-black uppercase tracking-wider bg-gray-200 px-2 py-0.5 mb-1.5 border-l-4 border-black">
              Skills
            </h2>
            <div className="space-y-1 text-gray-900 text-[11px]">
              <p><strong>Frontend:</strong> React, SwiftUI, AppKit, React Native, Tailwind CSS, Vite</p>
              <p><strong>Backend:</strong> FastAPI, Node.js, Firebase, REST APIs</p>
              <p><strong>Databases:</strong> PostgreSQL (Supabase), MySQL, Firestore</p>
              <p><strong>AI / ML:</strong> PyTorch, TensorFlow, OpenCV, Hugging Face Transformers, NLP</p>
              <p><strong>Languages:</strong> Python, JavaScript, TypeScript, Swift, Java, Dart, HTML/CSS</p>
              <p><strong>Tools:</strong> Docker, Git, GitHub Actions, CI/CD</p>
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="text-[12px] font-black uppercase tracking-wider bg-gray-200 px-2 py-0.5 mb-1.5 border-l-4 border-black">
              Projects
            </h2>
            <div className="space-y-2.5 text-gray-900">
              <div>
                <div className="flex justify-between font-bold text-[11px]">
                  <span>Nimbus | macOS Dynamic Island Clone</span>
                  <span className="text-gray-600">June 2026</span>
                </div>
                <p className="text-[10px] text-gray-600 italic">Swift, SwiftUI, AppKit, CoreLocation, EventKit</p>
                <ul className="list-disc list-inside space-y-0.5 text-gray-800 text-[11px] mt-0.5">
                  <li>Built a macOS Dynamic Island clone with live system monitoring (CPU, RAM, network, battery), media controls, real-time weather, and calendar integration — zero external dependencies.</li>
                  <li>Engineered morphing between 5 window geometries using NSPanel + NSAnimationContext with cubic Bézier easing; sourced telemetry directly from raw kernel APIs (host_processor_info, IOKit, getifaddrs).</li>
                  <li>Integrated CoreLocation + Open-Meteo weather, EventKit calendar, and SMAppService launch-at-login with graceful permission-denied fallbacks.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between font-bold text-[11px]">
                  <span>FilterIQ | Smart Data Filtering App</span>
                  <span className="text-gray-600">Feb 2026</span>
                </div>
                <p className="text-[10px] text-gray-600 italic">Python, FastAPI, Pandas, JavaScript, Docker</p>
                <ul className="list-disc list-inside space-y-0.5 text-gray-800 text-[11px] mt-0.5">
                  <li>Built a full-stack app for filtering Excel/CSV/PDF files via natural language queries, processing 10,000+ rows in under 2 seconds.</li>
                  <li>Engineered a data normalisation system with 95%+ accuracy using regex + Pandas, supporting 12+ operators (equals, contains, between, AND/OR logic).</li>
                  <li>Reduced manual filtering time by 80%; built responsive UI with Chart.js visualisations and dark/light themes.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between font-bold text-[11px]">
                  <span>Satya | Deepfake Detection Platform</span>
                  <span className="text-gray-600">Jan 2025</span>
                </div>
                <p className="text-[10px] text-gray-600 italic">React, FastAPI, PyTorch, OpenCV</p>
                <ul className="list-disc list-inside space-y-0.5 text-gray-800 text-[11px] mt-0.5">
                  <li>Developed an AI-powered deepfake detection platform achieving 90%+ prediction accuracy on manipulated media during internal testing.</li>
                  <li>Integrated OpenCV frame-extraction pipeline processing 500+ video frames per submission; displayed real-time confidence scores via React frontend.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between font-bold text-[11px]">
                  <span>BizzConnect | B2B Networking App</span>
                  <span className="text-gray-600">May 2024 – Dec 2025</span>
                </div>
                <p className="text-[10px] text-gray-600 italic">Flutter, Firebase, K-Means</p>
                <ul className="list-disc list-inside space-y-0.5 text-gray-800 text-[11px] mt-0.5">
                  <li>Built a location-based B2B networking app with intelligent business discovery powered by K-Means clustering for matchmaking relevance.</li>
                  <li>Implemented Firebase backend with authentication and real-time profile updates for 100+ simulated users.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-[12px] font-black uppercase tracking-wider bg-gray-200 px-2 py-0.5 mb-1.5 border-l-4 border-black">
              Certifications
            </h2>
            <ul className="list-disc list-inside text-gray-900 text-[11px] space-y-0.5">
              <li>Oracle OCI Generative AI Professional – Oracle</li>
              <li>Google AI Intensive (5-Day) – Google</li>
              <li>McKinsey Forward Program – McKinsey &amp; Company</li>
              <li>AI Fluency for Students – Anthropic</li>
            </ul>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-[12px] font-black uppercase tracking-wider bg-gray-200 px-2 py-0.5 mb-1.5 border-l-4 border-black">
              Education
            </h2>
            <div className="flex justify-between text-gray-900 font-bold text-[11px]">
              <span>PES University, RR Campus</span>
              <span className="text-gray-600">Aug 2023 – May 2026</span>
            </div>
            <p className="text-[11px] text-gray-700">Bachelor of Computer Applications (BCA) • Bengaluru, India</p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#1b1b24] px-4 py-2 border-t border-[#2e2d3e] flex justify-between items-center text-[10px] text-gray-400 flex-shrink-0">
          <span>VERIFIED RESUME // ROHAN JOSHI</span>
          <button onClick={onClose} className="hover:text-white font-bold cursor-pointer">
            [ESC] CLOSE
          </button>
        </div>
      </div>
    </div>
  )
}
