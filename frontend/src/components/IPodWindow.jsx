import { useState, useEffect } from 'react'
import DraggableWindow from './DraggableWindow'
import IPodCRTVisualizer from './IPodCRTVisualizer'
import { TRACK_DB } from '../data/trackDatabase'
import { soundFx } from '../utils/audio'

export default function IPodWindow({
  isOpen,
  isMinimized,
  onClose,
  onMinimize,
  onFocus,
  zIndex,
  currentTrack,
}) {
  const [playlist, setPlaylist] = useState(TRACK_DB)
  const [trackIndex, setTrackIndex] = useState(0)
  const [showPlaylist, setShowPlaylist] = useState(false)
  const [screenMode, setScreenMode] = useState('crt') // 'crt' | 'art' | 'video'
  const [isPlaying, setIsPlaying] = useState(false)
  const [embedKey, setEmbedKey] = useState(0)

  const activeTrack = playlist[trackIndex] || playlist[0]

  // External track selection from feed cards
  useEffect(() => {
    if (!currentTrack) return

    const targetTitle = (currentTrack.track_name || currentTrack.title || '').toLowerCase().trim()
    const targetArtist = (currentTrack.artist || '').toLowerCase().trim()

    let idx = playlist.findIndex((t) => {
      const tName = t.track_name.toLowerCase()
      const tArtist = t.artist.toLowerCase()
      return (
        tName.includes(targetTitle) ||
        targetTitle.includes(tName) ||
        (targetArtist && tArtist.includes(targetArtist))
      )
    })

    if (idx !== -1) {
      goToTrack(idx)
    } else {
      const newTrack = {
        id: `DYN_${Date.now()}`,
        track_name: currentTrack.track_name || currentTrack.title || 'Live Stream Track',
        artist: currentTrack.artist || 'Featured Artist',
        album: currentTrack.album || 'Digital Audio Stream',
        coverArt: currentTrack.coverArt || '/album_art.jpg',
        youtubeId: currentTrack.youtubeId || '5NV6Rdv1a3I', // default to Get Lucky
      }
      setPlaylist((prev) => [newTrack, ...prev])
      goToTrack(0)
    }
  }, [currentTrack]) // eslint-disable-line

  const goToTrack = (idx) => {
    soundFx.playClick()
    setTrackIndex(idx)
    setShowPlaylist(false)
    setIsPlaying(true)
    setEmbedKey((k) => k + 1)
  }

  const togglePlay = () => {
    soundFx.playClick()
    setIsPlaying(!isPlaying)
    setEmbedKey((k) => k + 1)
  }

  const nextTrack = () => {
    goToTrack((trackIndex + 1) % playlist.length)
  }

  const prevTrack = () => {
    goToTrack((trackIndex - 1 + playlist.length) % playlist.length)
  }

  return (
    <DraggableWindow
      id="ipod"
      title="iPod CLASSIC // OFFICIAL STUDIO AUDIO ENGINE"
      isOpen={isOpen}
      isMinimized={isMinimized}
      onClose={() => {
        setIsPlaying(false)
        if (onClose) onClose('ipod')
      }}
      onMinimize={onMinimize}
      onFocus={onFocus}
      zIndex={zIndex}
      width="max-w-xs"
      titleBg="bg-[#1c1b26]"
      headerIcon="graphic_eq"
      initialPosition={{ x: 100, y: 40 }}
    >
      <div className="flex flex-col items-center bg-[#16151f] rounded-b-xl px-4 sm:px-5 py-4 space-y-3.5 border-x-2 border-b-2 border-[#2e2d3e] font-code-terminal">

        {/* OFF-SCREEN YOUTUBE AUDIO ENGINE (Plays 100% Original Studio Masters) */}
        {isPlaying && activeTrack.youtubeId && screenMode !== 'video' && (
          <iframe
            key={`yt-offscreen-${activeTrack.id}-${embedKey}`}
            title="YouTube Audio Engine"
            width="320"
            height="180"
            src={`https://www.youtube.com/embed/${activeTrack.youtubeId}?autoplay=1&controls=0&modestbranding=1&rel=0&iv_load_policy=3&enablejsapi=1`}
            allow="autoplay; encrypted-media"
            className="fixed -left-[9999px] -top-[9999px] w-[320px] h-[180px] pointer-events-auto opacity-0"
          />
        )}

        {/* Mode Toggle Switch Bar */}
        <div className="w-full flex items-center justify-between gap-1 text-[9px] font-bold">
          <div className="flex gap-1">
            <button
              onClick={() => {
                soundFx.playClick()
                setScreenMode('crt')
                setShowPlaylist(false)
              }}
              className={`px-1.5 py-0.5 rounded transition-all cursor-pointer ${
                screenMode === 'crt' && !showPlaylist
                  ? 'bg-emerald-600 text-white shadow-[0_0_8px_rgba(16,185,129,0.4)]'
                  : 'bg-[#242330] text-gray-400 hover:text-white'
              }`}
            >
              3D CRT
            </button>
            <button
              onClick={() => {
                soundFx.playClick()
                setScreenMode('art')
                setShowPlaylist(false)
              }}
              className={`px-1.5 py-0.5 rounded transition-all cursor-pointer ${
                screenMode === 'art' && !showPlaylist
                  ? 'bg-[#d4a373] text-black font-bold'
                  : 'bg-[#242330] text-gray-400 hover:text-white'
              }`}
            >
              CRT ART
            </button>
            <button
              onClick={() => {
                soundFx.playClick()
                setScreenMode('video')
                setShowPlaylist(false)
              }}
              className={`px-1.5 py-0.5 rounded transition-all cursor-pointer ${
                screenMode === 'video' && !showPlaylist
                  ? 'bg-[#e07a5f] text-black font-bold'
                  : 'bg-[#242330] text-gray-400 hover:text-white'
              }`}
            >
              VIDEO
            </button>
          </div>

          <button
            onClick={() => {
              soundFx.playClick()
              setShowPlaylist((p) => !p)
            }}
            className={`px-2 py-0.5 rounded transition-all cursor-pointer ${
              showPlaylist
                ? 'bg-[#81b29a] text-black font-bold'
                : 'bg-[#242330] text-gray-400 hover:text-white'
            }`}
          >
            LIBRARY ({playlist.length})
          </button>
        </div>

        {/* LCD SCREEN */}
        <div
          className="w-full bg-[#0b0a11] border-2 border-[#2e2d3e] rounded-lg shadow-inner relative overflow-hidden flex flex-col justify-between"
          style={{ minHeight: 205 }}
        >
          {/* CRT scanlines overlay across LCD */}
          <div
            className="absolute inset-0 pointer-events-none z-30 opacity-20"
            style={{ background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #000 2px, #000 4px)' }}
          />

          {showPlaylist ? (
            /* PLAYLIST VIEW */
            <div className="relative z-10 p-3 space-y-0.5 overflow-y-auto" style={{ maxHeight: 205 }}>
              <p className="text-[9px] font-bold text-[#6b6880] mb-2 border-b border-[#2e2d3e] pb-1">
                &gt; AUDIO LIBRARY — SELECT TRACK:
              </p>
              {playlist.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => goToTrack(idx)}
                  className={`w-full text-left px-2 py-1.5 text-[10px] font-bold rounded transition-all cursor-pointer flex items-center justify-between ${
                    idx === trackIndex
                      ? 'bg-[#d4a373] text-[#0b0a11]'
                      : 'text-[#c9c5e0] hover:bg-[#1e1d2c]'
                  }`}
                >
                  <span className="truncate">
                    <span className="text-[#6b6880] mr-1.5">{idx + 1}.</span>
                    {t.track_name}
                  </span>
                  <span className="text-[9px] opacity-70 ml-2 font-normal flex-shrink-0">{t.artist.split('ft.')[0].trim()}</span>
                </button>
              ))}
            </div>
          ) : screenMode === 'video' ? (
            /* CRT VIDEO PLAYER SCREEN */
            <div className="relative z-10 p-2 space-y-1 h-full flex flex-col justify-between" style={{ minHeight: 200 }}>
              <div className="flex justify-between items-center text-[9px] text-[#81b29a] font-bold pb-1 border-b border-[#2e2d3e]">
                <span>&gt; CRT_VIDEO_STREAM</span>
                <span className="text-amber-300 font-mono">{trackIndex + 1}/{playlist.length}</span>
              </div>
              <div className="w-full h-32 rounded overflow-hidden border border-[#3e3d50] bg-black relative">
                <iframe
                  key={`yt-visible-${activeTrack.id}-${embedKey}`}
                  title="YouTube Visible Player"
                  width="100%"
                  height="128"
                  src={`https://www.youtube.com/embed/${activeTrack.youtubeId}?autoplay=${isPlaying ? 1 : 0}&controls=1&modestbranding=1&rel=0`}
                  allow="autoplay; encrypted-media"
                  className="w-full h-full filter contrast-125 sepia-[0.3]"
                />
              </div>
              <p className="text-[8px] text-gray-400 font-mono text-center truncate">
                {activeTrack.track_name} — {activeTrack.artist}
              </p>
            </div>
          ) : screenMode === 'crt' ? (
            /* THREE.JS 3D CRT SPECTRUM VISUALIZER */
            <IPodCRTVisualizer
              isPlaying={isPlaying}
              trackName={activeTrack.track_name}
              artist={activeTrack.artist}
            />
          ) : (
            /* TRUE DOWNSAMPLED PIXELATED CRT ALBUM ART VIEWER */
            <div className="relative z-10 p-2.5 space-y-2">
              {/* Status Header */}
              <div className="flex justify-between items-center text-[9px] font-bold text-[#6b6880] border-b border-[#2e2d3e] pb-1 font-mono">
                <span className={isPlaying ? 'text-[#81b29a] font-bold' : 'text-[#6b6880]'}>
                  {isPlaying ? '▶ STREAMING' : '❚❚ PAUSED'}
                </span>
                <span className="text-emerald-400 font-mono">STUDIO_MASTER</span>
                <span>{trackIndex + 1}/{playlist.length}</span>
              </div>

              {/* Cover Art Frame with True 64px Downsample + Scale(3.5) + Phosphor Green Filter */}
              <div className="flex gap-2.5 items-center">
                <div className="relative w-20 h-20 flex-shrink-0 border-2 border-green-800 bg-black rounded overflow-hidden flex items-center justify-center shadow-[0_0_12px_rgba(0,255,0,0.15)]">
                  {/* The Image: Forced into 64px and blown up to create authentic chunky pixels */}
                  <img
                    src={activeTrack.coverArt || '/album_art.jpg'}
                    alt={`${activeTrack.track_name} Cover`}
                    className="absolute mix-blend-luminosity"
                    style={{
                      width: '64px',
                      height: '64px',
                      transform: 'scale(3.5)',
                      imageRendering: 'pixelated',
                      filter: 'grayscale(100%) contrast(200%) brightness(75%) sepia(100%) hue-rotate(60deg) saturate(300%)',
                    }}
                    onError={(e) => {
                      e.target.src = '/album_art.jpg'
                    }}
                  />

                  {/* Scanline Overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,15,0,0.4)_50%)] bg-[length:100%_4px] pointer-events-none z-10" />

                  {/* Green CRT Glow */}
                  <div className="absolute inset-0 shadow-[inset_0_0_15px_rgba(0,255,0,0.2)] pointer-events-none z-20" />
                </div>

                {/* Track Metadata */}
                <div className="flex-1 min-w-0 font-mono space-y-0.5">
                  <p className="font-bold text-[12px] text-[#f0eeff] truncate">
                    &gt; {activeTrack.track_name}
                  </p>
                  <p className="text-[10px] text-[#81b29a] truncate font-bold">
                    {activeTrack.artist}
                  </p>
                  <p className="text-[9px] text-[#6b6880] truncate">
                    [{activeTrack.album}]
                  </p>
                  <div className="text-[8px] text-emerald-400 font-bold pt-1">
                    {isPlaying ? '● OFFICIAL STUDIO MASTER' : '○ PAUSED'}
                  </div>
                </div>
              </div>

              {/* Ticker Notice */}
              <div className="text-[8px] text-[#81b29a] font-bold text-center pt-1 border-t border-[#2e2d3e] font-mono truncate">
                ▸ YOUTUBE AUDIO ENGINE // OFFICIAL MASTER
              </div>
            </div>
          )}
        </div>

        {/* CLICK WHEEL */}
        <div
          className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full flex-shrink-0"
          style={{
            background: 'radial-gradient(circle at 40% 35%, #2a2839, #141320)',
            border: '3px solid #2e2d3e',
            boxShadow: '0 4px 24px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.05)',
          }}
        >
          {/* MENU — top */}
          <button
            onClick={() => { soundFx.playClick(); setShowPlaylist((p) => !p) }}
            className="absolute top-2.5 left-1/2 -translate-x-1/2 text-[10px] font-bold text-[#9e9bb5] hover:text-[#d4a373] transition-colors cursor-pointer"
          >
            MENU
          </button>

          {/* PREV — left */}
          <button
            onClick={prevTrack}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[16px] text-[#9e9bb5] hover:text-[#d4a373] transition-colors leading-none cursor-pointer"
          >
            ⏮
          </button>

          {/* NEXT — right */}
          <button
            onClick={nextTrack}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[16px] text-[#9e9bb5] hover:text-[#d4a373] transition-colors leading-none cursor-pointer"
          >
            ⏭
          </button>

          {/* PLAY/PAUSE — bottom */}
          <button
            onClick={togglePlay}
            className="absolute bottom-2.5 left-1/2 -translate-x-1/2 text-[16px] text-[#9e9bb5] hover:text-[#81b29a] transition-colors leading-none cursor-pointer"
          >
            ⏯
          </button>

          {/* CENTER SELECT BUTTON */}
          <button
            onClick={togglePlay}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center font-bold text-[10px] sm:text-[11px] transition-all active:scale-95 cursor-pointer"
            style={{
              background: isPlaying
                ? 'radial-gradient(circle at 40% 35%, #00ff00, #008800)'
                : 'radial-gradient(circle at 40% 35%, #242230, #18171f)',
              color: isPlaying ? '#000' : '#9e9bb5',
              border: '2px solid #3a3850',
              boxShadow: '0 2px 8px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.07)',
            }}
          >
            {isPlaying ? 'PAUSE' : 'PLAY'}
          </button>
        </div>
      </div>
    </DraggableWindow>
  )
}
