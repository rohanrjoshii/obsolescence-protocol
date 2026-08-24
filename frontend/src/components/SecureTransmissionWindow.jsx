import { useState, useEffect } from 'react'
import DraggableWindow from './DraggableWindow'
import { soundFx } from '../utils/audio'

export default function SecureTransmissionWindow({
  isOpen,
  isMinimized,
  onClose,
  onMinimize,
  onFocus,
  zIndex,
}) {
  const [formData, setFormData] = useState({
    callsign: '',
    frequency: '',
    classification: 'RECRUITER',
    payload: '',
  })
  const [status, setStatus] = useState('IDLE') // 'IDLE' | 'ENCRYPTING' | 'TRANSMITTING' | 'SENT'
  const [scrambleText, setScrambleText] = useState('')

  const recipientEmail = 'rohan.joshi.dev@gmail.com'

  // Matrix cipher scrambling effect on submission
  useEffect(() => {
    if (status === 'ENCRYPTING') {
      const chars = '0123456789ABCDEF$#@%*!<>~_/'
      let iteration = 0
      const maxIterations = 16

      const interval = setInterval(() => {
        let result = ''
        for (let i = 0; i < 48; i++) {
          result += chars[Math.floor(Math.random() * chars.length)]
        }
        setScrambleText(result)
        iteration++

        if (iteration >= maxIterations) {
          clearInterval(interval)
          setStatus('TRANSMITTING')
          setTimeout(() => {
            setStatus('SENT')
            soundFx.playExec()
          }, 1200)
        }
      }, 70)

      return () => clearInterval(interval)
    }
  }, [status])

  if (!isOpen) return null

  const handleTransmit = (e) => {
    e.preventDefault()
    if (!formData.callsign.trim() || !formData.frequency.trim() || !formData.payload.trim()) return

    soundFx.playExec()
    setStatus('ENCRYPTING')
  }

  const handleReset = () => {
    soundFx.playClick()
    setFormData({
      callsign: '',
      frequency: '',
      classification: 'RECRUITER',
      payload: '',
    })
    setStatus('IDLE')
  }

  const handleLaunchMailtoFallback = () => {
    soundFx.playExec()
    const subject = encodeURIComponent(`[${formData.classification}] Transmission from ${formData.callsign || 'Recruiter'}`)
    const body = encodeURIComponent(
      `SENDER_CALLSIGN: ${formData.callsign}\nRETURN_FREQUENCY: ${formData.frequency}\nCLASSIFICATION: ${formData.classification}\n\nPAYLOAD:\n${formData.payload}`
    )
    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`
  }

  return (
    <DraggableWindow
      id="transmission"
      title="SYS.TRANSMITTER // PGP_SECURE_RELAY [PORT_25]"
      isOpen={isOpen}
      isMinimized={isMinimized}
      onClose={() => {
        setStatus('IDLE')
        if (onClose) onClose('transmission')
      }}
      onMinimize={onMinimize}
      onFocus={onFocus}
      zIndex={zIndex}
      width="max-w-lg"
      titleBg="bg-[#000080]"
      headerIcon="mark_email_read"
      initialPosition={{ x: 65, y: 40 }}
    >
      <div className="bg-[#141419] text-[#f4f1de] font-code-terminal p-4 sm:p-5 space-y-4 text-[12px]">
        {/* HUD Subheader */}
        <div className="bg-black text-white p-3 win-bevel-inset flex justify-between items-center flex-wrap gap-2">
          <div>
            <span className="text-emerald-400 font-bold text-[12px] block font-mono">
              &gt; DESTINATION: ROHAN JOSHI [{recipientEmail}]
            </span>
            <p className="text-[10px] text-gray-400 font-mono mt-0.5">
              Secure PGP-Encrypted Dispatch Protocol · Bengaluru Sector
            </p>
          </div>
          <span className="bg-[#0f6d00] text-white text-[10px] font-bold px-2 py-0.5 win-bevel-outset">
            RELAY: ARMED
          </span>
        </div>

        {status === 'SENT' ? (
          /* TRANSMISSION CONFIRMED VIEW */
          <div className="py-6 px-4 bg-[#182218] border border-emerald-500/50 win-bevel-inset text-center space-y-3 font-mono">
            <div className="inline-block p-2 rounded-full bg-emerald-500 text-black mb-1">
              <span className="material-symbols-outlined text-2xl font-bold">check_circle</span>
            </div>
            <p className="text-emerald-400 font-bold text-[14px]">
              &gt; TRANSMISSION DELIVERED TO GATEWAY [200 OK]
            </p>
            <p className="text-gray-300 text-[11px]">
              Payload encrypted &amp; logged for Rohan Joshi. Expected turnaround: &lt;12 hours.
            </p>
            <div className="bg-black/60 p-2 border border-emerald-900 text-[10px] text-emerald-600 font-mono text-left space-y-0.5">
              <div>ENCRYPTION_HASH : SHA256_0x7FE99B8820A</div>
              <div>SENDER_CALLSIGN : {formData.callsign}</div>
              <div>CLASSIFICATION  : [{formData.classification}]</div>
            </div>

            <div className="pt-2 flex justify-center gap-2 flex-wrap">
              <button
                onClick={handleLaunchMailtoFallback}
                className="win-bevel-button bg-[#000080] hover:bg-[#0000a0] text-white px-3 py-1.5 text-[11px] font-bold cursor-pointer"
              >
                OPEN IN DEFAULT MAIL CLIENT &rarr;
              </button>
              <button
                onClick={handleReset}
                className="win-bevel-button bg-[#242330] hover:bg-[#343340] text-gray-300 px-3 py-1.5 text-[11px] font-bold cursor-pointer"
              >
                TRANSMIT ANOTHER
              </button>
            </div>
          </div>
        ) : status === 'ENCRYPTING' || status === 'TRANSMITTING' ? (
          /* MATRIX CIPHER SCRAMBLING SCREEN */
          <div className="py-8 px-4 bg-black border-2 border-emerald-500/60 win-bevel-inset text-center space-y-3 font-mono">
            <div className="text-emerald-400 font-bold text-[13px] animate-pulse">
              &gt; {status === 'ENCRYPTING' ? 'ENCRYPTING BUFFER VIA PGP SHA-256 CIPHER...' : 'RELAYING THROUGH REVERSE GATEWAY...'}
            </div>
            <div className="text-emerald-500 text-[12px] font-mono break-all tracking-widest bg-[#0a120a] p-3 border border-emerald-900 select-none">
              {scrambleText}
            </div>
            <p className="text-[10px] text-gray-400">
              Generating cryptographic payload handshake on PORT_25...
            </p>
          </div>
        ) : (
          /* TRANSMISSION FORM */
          <form onSubmit={handleTransmit} className="space-y-3">
            {/* Classification Toggle Buttons */}
            <div>
              <label className="block text-gray-400 text-[10px] font-bold uppercase mb-1 font-mono">
                &gt; CLASSIFICATION LEVEL:
              </label>
              <div className="grid grid-cols-3 gap-1.5">
                {['RECRUITER', 'COLLABORATION', 'GENERAL_QUERY'].map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => {
                      soundFx.playClick()
                      setFormData({ ...formData, classification: c })
                    }}
                    className={`py-1 px-1.5 win-bevel-outset text-[10px] font-bold font-mono cursor-pointer transition-all ${
                      formData.classification === c
                        ? 'bg-[#000080] text-white border-white'
                        : 'bg-[#242330] text-gray-400 hover:text-white'
                    }`}
                  >
                    [{c}]
                  </button>
                ))}
              </div>
            </div>

            {/* Callsign & Return Frequency Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-gray-400 text-[10px] font-bold uppercase mb-1 font-mono">
                  &gt; SENDER_CALLSIGN (NAME):
                </label>
                <input
                  required
                  type="text"
                  value={formData.callsign}
                  onChange={(e) => setFormData({ ...formData, callsign: e.target.value })}
                  className="w-full bg-black text-emerald-400 border border-[#3e3d50] font-mono px-2.5 py-1.5 text-[11px] focus:outline-none focus:border-emerald-500 rounded"
                  placeholder="e.g. Alex Mercer"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-[10px] font-bold uppercase mb-1 font-mono">
                  &gt; RETURN_FREQUENCY (EMAIL):
                </label>
                <input
                  required
                  type="email"
                  value={formData.frequency}
                  onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
                  className="w-full bg-black text-emerald-400 border border-[#3e3d50] font-mono px-2.5 py-1.5 text-[11px] focus:outline-none focus:border-emerald-500 rounded"
                  placeholder="e.g. alex@company.com"
                />
              </div>
            </div>

            {/* Payload Buffer */}
            <div>
              <label className="block text-gray-400 text-[10px] font-bold uppercase mb-1 font-mono">
                &gt; PAYLOAD_BUFFER (MESSAGE):
              </label>
              <textarea
                required
                rows={4}
                value={formData.payload}
                onChange={(e) => setFormData({ ...formData, payload: e.target.value })}
                className="w-full bg-black text-emerald-400 border border-[#3e3d50] font-mono p-2 text-[11px] focus:outline-none focus:border-emerald-500 rounded resize-none"
                placeholder="Enter technical proposal, role requirements, or general inquiry..."
              />
            </div>

            {/* Form Footer Controls */}
            <div className="pt-2 flex justify-between items-center border-t border-[#2e2d3e] font-mono">
              <span className="text-[10px] text-gray-500">PGP_STATUS: IDLE_WAIT</span>
              <button
                type="submit"
                className="win-bevel-button bg-[#000080] hover:bg-[#0000a0] text-white px-4 py-2 text-[11px] font-bold flex items-center gap-1.5 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[14px]">lock</span>
                <span>[ EXECUTE TRANSMISSION ]</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </DraggableWindow>
  )
}
