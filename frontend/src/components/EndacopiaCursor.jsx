import { useState, useEffect } from 'react'

export default function EndacopiaCursor() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Calculate pupil offset for background eyes pointing toward cursor
  const getPupilStyle = (eyeX, eyeY) => {
    const dx = mousePos.x - eyeX
    const dy = mousePos.y - eyeY
    const angle = Math.atan2(dy, dx)
    const dist = Math.min(5, Math.hypot(dx, dy) / 30)
    const px = Math.cos(angle) * dist
    const py = Math.sin(angle) * dist
    return { transform: `translate(${px}px, ${py}px)` }
  }

  return (
    <>
      {/* Custom Endacopia Eye Cursor Follower */}
      <div
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
        }}
        className="pointer-events-none fixed z-50 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out hidden sm:block"
      >
        <div className="w-5 h-5 rounded-full bg-[#d4a373] border-2 border-[#121216] flex items-center justify-center shadow-md">
          <div className="w-2 h-2 rounded-full bg-[#121216]" />
        </div>
      </div>

      {/* Interactive Muted Background Eyes Watching Cursor */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-20">
        {/* Left Background Eye */}
        <div
          style={{ top: '25%', left: '10%' }}
          className="absolute w-14 h-10 bg-[#1a1a22] border-2 border-[#d4a373] rounded-full flex items-center justify-center shadow-inner"
        >
          <div
            style={getPupilStyle(
              window.innerWidth * 0.1,
              window.innerHeight * 0.25
            )}
            className="w-5 h-5 rounded-full bg-[#81b29a] border border-[#121216] flex items-center justify-center"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#121216]" />
          </div>
        </div>

        {/* Right Background Eye */}
        <div
          style={{ top: '70%', right: '12%' }}
          className="absolute w-16 h-12 bg-[#1a1a22] border-2 border-[#81b29a] rounded-full flex items-center justify-center shadow-inner"
        >
          <div
            style={getPupilStyle(
              window.innerWidth * 0.88,
              window.innerHeight * 0.7
            )}
            className="w-6 h-6 rounded-full bg-[#d4a373] border border-[#121216] flex items-center justify-center"
          >
            <div className="w-2 h-2 rounded-full bg-[#121216]" />
          </div>
        </div>
      </div>
    </>
  )
}
