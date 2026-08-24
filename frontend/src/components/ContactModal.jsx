import { useState } from 'react'
import { soundFx } from '../utils/audio'

export default function ContactModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false)
  const email = 'rohan.joshi.dev@gmail.com'
  const phone = '+91 6361195409'

  if (!isOpen) return null

  const handleCopyEmail = () => {
    soundFx.playClick()
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleSendEmail = () => {
    soundFx.playExec()
    window.location.href = `mailto:${email}?subject=Software%20Engineering%20Opportunity%20-%20Rohan%20Joshi`
  }

  return (
    <div
      className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs font-code-terminal"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg win-window win-bevel-outset bg-[#1b1b24] shadow-[12px_12px_0px_rgba(0,0,0,0.9)] border-2 border-[#363545]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title Bar */}
        <div className="win-titlebar bg-[#000080] text-white px-3 py-1.5 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px] text-amber-300">mail</span>
            <span className="text-[12px] font-bold tracking-wider">
              TRANSMIT_DISPATCH // CONTACT ROHAN JOSHI
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

        {/* Content */}
        <div className="p-4 sm:p-5 space-y-4 text-[#f4f1de] bg-[#141419]">
          <div className="bg-[#1a1a24] p-3 win-bevel-inset border border-[#2e2d3e] space-y-2">
            <div className="flex items-center gap-2 text-primary-container text-[12px] font-bold">
              <span className="material-symbols-outlined text-[16px]">terminal</span>
              <span>&gt; RECRUITER &amp; INQUIRY DIRECT CHANNEL</span>
            </div>
            <p className="text-[12px] text-gray-300">
              Full-Stack &amp; AI Developer based in Bengaluru, Karnataka. Open to software engineering roles, internships, and technical discussions.
            </p>
          </div>

          {/* Email & Phone Card */}
          <div className="bg-[#242330] p-3 win-bevel-outset border border-[#3e3d50] space-y-2.5">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div>
                <span className="text-[10px] text-gray-400 font-bold block uppercase tracking-wider">Direct Email:</span>
                <span className="text-[13px] sm:text-[14px] text-white font-bold font-mono select-all">{email}</span>
              </div>
              <button
                onClick={handleCopyEmail}
                className="win-bevel-button bg-gray-300 hover:bg-white text-black px-2.5 py-1 text-[11px] font-bold transition-all"
              >
                {copied ? '✓ COPIED' : 'COPY EMAIL'}
              </button>
            </div>

            <div className="pt-2 border-t border-[#3e3d50] flex items-center justify-between text-[11px]">
              <span className="text-gray-400">Phone / WhatsApp:</span>
              <span className="text-[#d4a373] font-bold font-mono">{phone}</span>
            </div>
          </div>

          {/* Action Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
            <button
              onClick={handleSendEmail}
              className="win-bevel-button bg-[#000080] hover:bg-[#0000a0] text-white py-2.5 px-3 text-[12px] font-bold flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[16px]">send</span>
              <span>LAUNCH DEFAULT MAIL &rarr;</span>
            </button>
            <a
              href="https://linkedin.com/in/rohanrj1008"
              target="_blank"
              rel="noopener noreferrer"
              className="win-bevel-button bg-[#2b2a36] hover:bg-[#3b3a4a] text-white py-2.5 px-3 text-[12px] font-bold flex items-center justify-center gap-2 text-center"
            >
              <svg className="w-3.5 h-3.5 fill-current text-[#5eadf0]" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span>LINKEDIN MESSAGE</span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#1b1b24] px-4 py-2 border-t border-[#2e2d3e] flex justify-between items-center text-[10px] text-gray-400">
          <span>LOCATION: BENGALURU, INDIA</span>
          <button onClick={onClose} className="hover:text-white font-bold cursor-pointer">
            [ESC] CLOSE
          </button>
        </div>
      </div>
    </div>
  )
}
