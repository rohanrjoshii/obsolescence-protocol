import { useState, useRef, useEffect } from 'react'
import { soundFx } from '../utils/audio'

export default function DraggableWindow({
  id,
  title,
  children,
  isOpen = true,
  isMinimized = false,
  onClose,
  onMinimize,
  onFocus,
  zIndex = 10,
  initialPosition = { x: 0, y: 0 },
  width = 'max-w-2xl',
  titleBg = 'bg-[#000080]',
  headerIcon = 'window',
  className = '',
}) {
  const [position, setPosition] = useState(initialPosition)
  const [isDragging, setIsDragging] = useState(false)
  const [isMaximized, setIsMaximized] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const dragStartRef = useRef({ x: 0, y: 0 })
  const posStartRef = useRef({ x: 0, y: 0 })

  // Detect mobile viewports to prevent broken drag translations
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleStartDrag = (clientX, clientY) => {
    if (isMaximized || isMobile) return
    setIsDragging(true)
    dragStartRef.current = { x: clientX, y: clientY }
    posStartRef.current = { ...position }
    if (onFocus) onFocus(id)
    soundFx.playClick()
  }

  const handleMouseDown = (e) => {
    if (e.button !== 0) return
    handleStartDrag(e.clientX, e.clientY)
  }

  const handleTouchStart = (e) => {
    if (isMobile) return
    const touch = e.touches[0]
    if (touch) handleStartDrag(touch.clientX, touch.clientY)
  }

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging || isMobile) return
      const dx = e.clientX - dragStartRef.current.x
      const dy = e.clientY - dragStartRef.current.y
      setPosition({
        x: Math.max(-100, posStartRef.current.x + dx),
        y: Math.max(-30, posStartRef.current.y + dy),
      })
    }

    const handleTouchMove = (e) => {
      if (!isDragging || isMobile) return
      const touch = e.touches[0]
      if (touch) {
        const dx = touch.clientX - dragStartRef.current.x
        const dy = touch.clientY - dragStartRef.current.y
        setPosition({
          x: Math.max(-100, posStartRef.current.x + dx),
          y: Math.max(-30, posStartRef.current.y + dy),
        })
      }
    }

    const handleEndDrag = () => {
      if (isDragging) setIsDragging(false)
    }

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleEndDrag)
      window.addEventListener('touchmove', handleTouchMove)
      window.addEventListener('touchend', handleEndDrag)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleEndDrag)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleEndDrag)
    }
  }, [isDragging, isMobile])

  if (!isOpen || isMinimized) return null

  // Mobile layout docks window into clean viewport modal without overflow
  const style = isMobile
    ? { top: '72px', left: '8px', right: '8px', maxHeight: 'calc(100vh - 120px)', zIndex: Math.max(50, zIndex) }
    : isMaximized
    ? { top: '80px', left: '16px', right: '16px', zIndex: 100 }
    : {
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        zIndex,
      }

  return (
    <div
      onClick={() => {
        if (onFocus) onFocus(id)
      }}
      style={style}
      className={`win-window win-bevel-outset p-[2px] shadow-[8px_8px_0px_rgba(0,0,0,0.85)] transition-shadow duration-150 flex flex-col ${
        isMobile || isMaximized ? 'fixed' : 'relative'
      } ${isMobile ? 'w-auto max-w-full' : width} ${className}`}
    >
      {/* Titlebar */}
      <div
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        className={`win-titlebar flex justify-between items-center px-2 py-1 select-none ${
          isMobile ? 'cursor-default' : 'cursor-move'
        } ${titleBg}`}
      >
        <div className="flex items-center gap-1.5 min-w-0">
          {headerIcon && (
            <span className="material-symbols-outlined text-[15px] text-white flex-shrink-0">
              {headerIcon}
            </span>
          )}
          <span className="font-code-terminal text-[11px] sm:text-[13px] font-bold tracking-wide text-white truncate">
            {title}
          </span>
        </div>
        <div className="flex items-center gap-1 flex-shrink-0">
          {!isMobile && onMinimize && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                soundFx.playClick()
                onMinimize(id)
              }}
              className="win-bevel-button bg-gray-300 w-5 h-5 flex items-center justify-center text-black font-bold text-[10px] hover:bg-white"
              title="Minimize"
            >
              _
            </button>
          )}
          {!isMobile && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                soundFx.playClick()
                setIsMaximized(!isMaximized)
              }}
              className="win-bevel-button bg-gray-300 w-5 h-5 flex items-center justify-center text-black font-bold text-[10px] hover:bg-white"
              title="Maximize"
            >
              {isMaximized ? '❐' : '□'}
            </button>
          )}
          {onClose && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                soundFx.playClick()
                onClose(id)
              }}
              className="win-bevel-button bg-gray-300 w-5 h-5 flex items-center justify-center text-black font-bold text-[12px] hover:bg-red-400 hover:text-white"
              title="Close"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-window-padding bg-[#c0c0c0] font-code-terminal text-code-terminal text-black overflow-y-auto flex-1 max-h-[75vh] sm:max-h-none">
        {children}
      </div>
    </div>
  )
}
