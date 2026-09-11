import { useState, useEffect } from 'react'
import { TRACK_DB } from '../data/trackDatabase'
import { soundFx } from '../utils/audio'

export default function IPodClassic({ isOpen, onClose, currentTrack }) {
  const [playlist] = useState(TRACK_DB)
  const [trackIndex, setTrackIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showMenu, setShowMenu] = useState(true)
  const [volume, setVolume] = useState(70)
  const [embedKey, setEmbedKey] = useState(0)

  const activeTrack = playlist[trackIndex] || playlist[0]

  const goToTrack = (idx) => {
    soundFx.playClick()
    setTrackIndex(idx)
    setIsPlaying(true)
    setShowMenu(false)
    setEmbedKey(k => k + 1)
  }

  const togglePlay = () => {
    soundFx.playClick()
    setIsPlaying(!isPlaying)
    if (!isPlaying) setEmbedKey(k => k + 1)
  }

  const nextTrack = () => {
    goToTrack((trackIndex + 1) % playlist.length)
  }

  const prevTrack = () => {
    goToTrack((trackIndex - 1 + playlist.length) % playlist.length)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div 
        className="relative bg-gradient-to-b from-[#e8e8e8] to-[#c0c0c0] rounded-[32px] shadow-2xl"
        style={{ width: '320px', height: '520px' }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg z-50"
        >
          ×
        </button>

        {/* iPod Screen */}
        <div className="mx-6 mt-6 bg-[#b8d4e8] rounded-lg border-4 border-[#888] shadow-inner overflow-hidden"
             style={{ height: '200px' }}>
          
          {/* YouTube Audio Engine (hidden) */}
          {isPlaying && activeTrack.youtubeId && (
            <iframe
              key={`yt-${activeTrack.id}-${embedKey}`}
              title="YouTube Audio"
              width="300"
              height="169"
              src={`https://www.youtube.com/embed/${activeTrack.youtubeId}?autoplay=1&mute=0&controls=1&modestbranding=1`}
              allow="autoplay; encrypted-media"
              className="w-full h-full"
            />
          )}

          {/* Now Playing Screen */}
          {!isPlaying && (
            <div className="h-full bg-gradient-to-b from-[#e0f0ff] to-[#b8d4e8] p-4 flex flex-col items-center justify-center text-[#333]">
              <img 
                src={activeTrack.coverArt} 
                alt="Album" 
                className="w-32 h-32 object-cover rounded-lg shadow-lg mb-3 border-2 border-[#666]"
              />
              <div className="text-center">
                <p className="font-bold text-sm truncate w-full">{activeTrack.track_name}</p>
                <p className="text-xs text-gray-700 truncate w-full">{activeTrack.artist}</p>
              </div>
            </div>
          )}
        </div>

        {/* Click Wheel */}
        <div className="mx-auto mt-8 relative" style={{ width: '200px', height: '200px' }}>
          {/* Outer Ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#f0f0f0] to-[#b0b0b0] shadow-2xl">
            {/* Touch Ring */}
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-[#e0e0e0] to-[#d0d0d0] shadow-inner">
              
              {/* Menu Button (Top) */}
              <button
                onClick={() => {
                  soundFx.playClick()
                  setShowMenu(!showMenu)
                }}
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-10 flex items-center justify-center text-[#333] font-bold text-xs hover:text-black"
              >
                MENU
              </button>

              {/* Forward Button (Right) */}
              <button
                onClick={nextTrack}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-10 h-16 flex items-center justify-center text-[#333] font-bold text-lg hover:text-black"
              >
                ⏭
              </button>

              {/* Back Button (Left) */}
              <button
                onClick={prevTrack}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-16 flex items-center justify-center text-[#333] font-bold text-lg hover:text-black"
              >
                ⏮
              </button>

              {/* Play/Pause Button (Bottom) */}
              <button
                onClick={togglePlay}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-16 h-10 flex items-center justify-center text-[#333] font-bold text-lg hover:text-black"
              >
                {isPlaying ? '⏸' : '▶'}
              </button>
            </div>
          </div>

          {/* Center Button */}
          <button
            onClick={togglePlay}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-[#f8f8f8] to-[#d0d0d0] shadow-xl hover:shadow-2xl active:shadow-inner flex items-center justify-center transition-all"
          >
            <span className="text-2xl text-[#333]">{isPlaying ? '⏸' : '▶'}</span>
          </button>
        </div>

        {/* Playlist Overlay */}
        {showMenu && (
          <div className="absolute top-20 left-6 right-6 bg-white/95 backdrop-blur rounded-lg shadow-2xl p-3 max-h-64 overflow-y-auto border-2 border-gray-400">
            <p className="font-bold text-xs mb-2 text-gray-700 border-b pb-1">Music Library</p>
            {playlist.map((track, idx) => (
              <button
                key={track.id}
                onClick={() => goToTrack(idx)}
                className={`w-full text-left px-2 py-2 text-xs rounded mb-1 transition-all ${
                  idx === trackIndex
                    ? 'bg-blue-500 text-white font-bold'
                    : 'hover:bg-gray-200 text-gray-800'
                }`}
              >
                <div className="font-semibold truncate">{track.track_name}</div>
                <div className="text-[10px] opacity-75 truncate">{track.artist}</div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
