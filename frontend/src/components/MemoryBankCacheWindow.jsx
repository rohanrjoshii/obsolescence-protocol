import { useState } from 'react'
import DraggableWindow from './DraggableWindow'
import { soundFx } from '../utils/audio'

const ARTIFACTS = [
  {
    id: 'MEM_01',
    title: 'SYSTEM_BOOT_SEQUENCE.GIF',
    tag: 'CORE_OS',
    size: '1.2 MB',
    hash: '0x8F9A',
    url: 'https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif',
    desc: 'Low-level kernel initialization & BIOS memory diagnostic dump.',
  },
  {
    id: 'MEM_02',
    title: 'NEURAL_NET_TRAINING.GIF',
    tag: 'AI_ML',
    size: '890 KB',
    hash: '0x3C4B',
    url: 'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif',
    desc: 'Deepfake & transformer weight convergence backprop stream.',
  },
  {
    id: 'MEM_03',
    title: 'GHIBLI_TRAIN_COASTAL.GIF',
    tag: 'NOSTALGIA',
    size: '1.8 MB',
    hash: '0x9E21',
    url: 'https://media.giphy.com/media/xUPGGwW6EXLUVOic00/giphy.gif',
    desc: 'Spirited Away serene ocean railway memory bank sector.',
  },
  {
    id: 'MEM_04',
    title: 'RETRO_CYBER_MATRIX.GIF',
    tag: 'CORE_OS',
    size: '1.4 MB',
    hash: '0x55FA',
    url: 'https://media.giphy.com/media/A06UFEx8jxEwU/giphy.gif',
    desc: 'Green phosphorescent terminal cascade and telemetry flux.',
  },
  {
    id: 'MEM_05',
    title: 'DOCKER_CONTAINER_CLUSTER.GIF',
    tag: 'INFRA',
    size: '950 KB',
    hash: '0x1A8E',
    url: 'https://media.giphy.com/media/Y408WUTP9u4ESwYVBl/giphy.gif',
    desc: 'Fault-isolated reverse gateway container orchestration.',
  },
  {
    id: 'MEM_06',
    title: 'GHIBLI_STUDY_DESK.GIF',
    tag: 'NOSTALGIA',
    size: '2.1 MB',
    hash: '0x4D0C',
    url: 'https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif',
    desc: 'Whisper of the Heart midnight engineering & writing desk.',
  },
]

export default function MemoryBankCacheWindow({
  isOpen,
  isMinimized,
  onClose,
  onMinimize,
  onFocus,
  zIndex,
}) {
  const [selectedTag, setSelectedTag] = useState('ALL')
  const [activeArtifact, setActiveArtifact] = useState(ARTIFACTS[0])

  const filtered = ARTIFACTS.filter((a) => {
    if (selectedTag === 'ALL') return true
    return a.tag === selectedTag
  })

  return (
    <DraggableWindow
      id="memory"
      title="MEMORY_BANK_CACHE // VISUAL ARTIFACTS & SECTOR DUMP"
      isOpen={isOpen}
      isMinimized={isMinimized}
      onClose={() => onClose('memory')}
      onMinimize={onMinimize}
      onFocus={onFocus}
      zIndex={zIndex}
      width="max-w-4xl"
      titleBg="bg-[#000080]"
      headerIcon="photo_library"
      initialPosition={{ x: 50, y: 35 }}
    >
      <div className="bg-[#141419] text-[#f4f1de] font-code-terminal p-4 space-y-4 text-[12px]">
        {/* Directory HUD Header */}
        <div className="bg-black text-white p-3 win-bevel-inset flex justify-between items-center flex-wrap gap-2">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-amber-300 font-bold text-[13px]">&gt; DIR: C:\MEMORY_CACHE\SECTOR_07\</span>
              <span className="text-emerald-400 font-mono text-[11px] font-bold">
                [{ARTIFACTS.length} ARTIFACTS MOUNTED]
              </span>
            </div>
            <p className="text-[10px] text-gray-400 mt-0.5">
              Isolated sectors of visual logs, Ghibli nostalgia, and architecture telemetry.
            </p>
          </div>

          <span className="bg-[#0f6d00] text-white text-[10px] font-bold px-2 py-0.5 win-bevel-outset">
            CACHE: ONLINE
          </span>
        </div>

        {/* Filter Tag Bar */}
        <div className="flex items-center justify-between gap-2 border-b border-[#2e2d3e] pb-2 flex-wrap">
          <div className="flex gap-1 text-[10px]">
            {['ALL', 'CORE_OS', 'AI_ML', 'INFRA', 'NOSTALGIA'].map((tag) => (
              <button
                key={tag}
                onClick={() => {
                  soundFx.playClick()
                  setSelectedTag(tag)
                }}
                className={`px-2 py-0.5 win-bevel-outset font-bold cursor-pointer transition-all ${
                  selectedTag === tag
                    ? 'bg-[#000080] text-white'
                    : 'bg-[#242330] text-gray-400 hover:text-white'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <span className="text-[10px] text-gray-400 font-mono">
            SELECT THUMBNAIL TO PREVIEW
          </span>
        </div>

        {/* 2-Column Split: Active Preview Left, Grid Right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* Main Inspection Viewfinder (Left, 7 cols) */}
          <div className="md:col-span-7 bg-[#1a1a24] p-3 win-bevel-outset space-y-2.5 flex flex-col justify-between">
            <div className="flex justify-between items-center text-[10px] text-gray-400 border-b border-[#2e2d3e] pb-1.5 font-mono">
              <span className="text-emerald-400 font-bold">{activeArtifact.title}</span>
              <span>{activeArtifact.size} · {activeArtifact.hash}</span>
            </div>

            {/* CRT Screen Display Frame */}
            <div className="relative bg-black rounded border-2 border-[#2e2d3e] overflow-hidden aspect-video flex items-center justify-center">
              {/* Scanlines */}
              <div
                className="absolute inset-0 pointer-events-none z-20 opacity-20"
                style={{
                  background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #000 2px, #000 4px)',
                }}
              />
              <img
                src={activeArtifact.url}
                alt={activeArtifact.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Description & Metadata */}
            <div className="bg-[#121218] p-2.5 win-bevel-inset border border-[#2e2d3e] space-y-1">
              <div className="flex justify-between items-center text-[10px]">
                <span className="text-gray-400 font-bold uppercase">Sector Tag:</span>
                <span className="text-amber-300 font-mono font-bold">[{activeArtifact.tag}]</span>
              </div>
              <p className="text-[11px] text-gray-300 font-mono">
                &gt; {activeArtifact.desc}
              </p>
            </div>
          </div>

          {/* Artifact Grid (Right, 5 cols) */}
          <div className="md:col-span-5 space-y-2 max-h-[380px] overflow-y-auto pr-1">
            {filtered.map((item) => {
              const isSelected = activeArtifact.id === item.id

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    soundFx.playClick()
                    setActiveArtifact(item)
                  }}
                  className={`p-2 win-bevel-inset border border-[#2e2d3e] cursor-pointer flex gap-2.5 items-center transition-all hover:border-[#81b29a] ${
                    isSelected ? 'bg-[#222a22] border-emerald-500/60' : 'bg-[#1a1a24]'
                  }`}
                >
                  {/* Micro Thumbnail */}
                  <div className="w-12 h-12 bg-black rounded border border-[#3e3d50] overflow-hidden flex-shrink-0 relative">
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-cover opacity-80"
                      loading="lazy"
                    />
                  </div>

                  {/* Info Text */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline">
                      <span
                        className={`text-[11px] font-bold truncate block ${
                          isSelected ? 'text-emerald-300' : 'text-white'
                        }`}
                      >
                        {item.title}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-[9px] text-gray-400 mt-1 font-mono">
                      <span>[{item.tag}]</span>
                      <span>{item.size}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="pt-2 border-t border-[#2e2d3e] flex justify-between items-center text-[10px] text-gray-400 font-mono">
          <span>STORAGE: NON-VOLATILE FLASH CACHE</span>
          <span className="text-[#81b29a] font-bold">TYPE &quot;memory&quot; OR &quot;gallery&quot; IN CLI</span>
        </div>
      </div>
    </DraggableWindow>
  )
}
