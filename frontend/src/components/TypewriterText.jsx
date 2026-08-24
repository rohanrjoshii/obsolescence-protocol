import { useState, useEffect } from 'react'

export default function TypewriterText({
  text = '',
  delay = 20,
  startDelay = 0,
  className = '',
  cursorChar = '▋',
  showCursor = true,
  onComplete,
}) {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hasStarted, setHasStarted] = useState(startDelay === 0)

  useEffect(() => {
    setCurrentText('')
    setCurrentIndex(0)
    setHasStarted(startDelay === 0)

    let startTimeout = null
    if (startDelay > 0) {
      startTimeout = setTimeout(() => {
        setHasStarted(true)
      }, startDelay)
    }

    return () => {
      if (startTimeout) clearTimeout(startTimeout)
    }
  }, [text, startDelay])

  useEffect(() => {
    if (!hasStarted || !text) return

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, delay)

      return () => clearTimeout(timeout)
    } else if (onComplete) {
      onComplete()
    }
  }, [hasStarted, currentIndex, delay, text, onComplete])

  return (
    <span className={`font-mono inline ${className}`}>
      {currentText}
      {showCursor && hasStarted && currentIndex < text.length && (
        <span className="inline-block animate-pulse text-[#81b29a] ml-0.5 opacity-80 select-none">
          {cursorChar}
        </span>
      )}
    </span>
  )
}
