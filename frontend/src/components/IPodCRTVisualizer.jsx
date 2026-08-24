import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

export default function IPodCRTVisualizer({ isPlaying, trackName, artist }) {
  const containerRef = useRef(null)
  const rendererRef = useRef(null)
  const animFrameRef = useRef(null)
  const [vizMode, setVizMode] = useState('ribbon') // 'ribbon' | 'grid' | 'ring'

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const width = container.clientWidth || 260
    const height = container.clientHeight || 150

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x0a0914, 0.12)

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100)
    camera.position.set(0, 2.5, 5.5)
    camera.lookAt(0, 0, 0)

    // 2. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x0a0914, 1)
    container.innerHTML = ''
    container.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // 3. Grid Floor (Laboratory Oscilloscope Reticle)
    const gridHelper = new THREE.GridHelper(10, 20, 0x363545, 0x1f1e2c)
    gridHelper.position.y = -1.2
    scene.add(gridHelper)

    // 4. 3D Waveform Ribbon Mesh
    const planeGeo = new THREE.PlaneGeometry(6, 4, 32, 24)
    const planeMat = new THREE.MeshBasicMaterial({
      color: 0x22c55e,
      wireframe: true,
      transparent: true,
      opacity: 0.85,
    })
    const waveMesh = new THREE.Mesh(planeGeo, planeMat)
    waveMesh.rotation.x = -Math.PI / 2.8
    waveMesh.position.y = -0.2
    scene.add(waveMesh)

    // 5. 3D Peak Frequency Ring / Hologram
    const ringGeo = new THREE.RingGeometry(0.8, 1.1, 32)
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xd4a373,
      wireframe: true,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.6,
    })
    const ringMesh = new THREE.Mesh(ringGeo, ringMat)
    ringMesh.position.set(0, 0.8, -1.5)
    scene.add(ringMesh)

    // Save initial vertex positions
    const posAttribute = planeGeo.attributes.position
    const initialZ = new Float32Array(posAttribute.count)
    for (let i = 0; i < posAttribute.count; i++) {
      initialZ[i] = posAttribute.getZ(i)
    }

    // Animation Loop Variables
    let time = 0
    let smoothedBass = 0
    let smoothedMid = 0

    const render = () => {
      time += 0.04

      // Synthetic dynamic audio telemetry simulation (smooth reactive frequency curves)
      const targetBass = isPlaying
        ? Math.sin(time * 3.5) * 0.4 + Math.sin(time * 7.2) * 0.3 + 0.5
        : 0.05
      const targetMid = isPlaying
        ? Math.cos(time * 4.8) * 0.3 + Math.sin(time * 9.1) * 0.2 + 0.3
        : 0.02

      smoothedBass += (targetBass - smoothedBass) * 0.15
      smoothedMid += (targetMid - smoothedMid) * 0.15

      // Deform Ribbon Waveform Vertices based on simulated frequencies
      for (let i = 0; i < posAttribute.count; i++) {
        const x = posAttribute.getX(i)
        const y = posAttribute.getY(i)

        if (isPlaying) {
          const wave1 = Math.sin(x * 2.2 + time * 4.0) * smoothedBass * 0.7
          const wave2 = Math.cos(y * 3.0 + time * 3.2) * smoothedMid * 0.5
          const ripple = Math.sin(Math.sqrt(x * x + y * y) * 4.0 - time * 5.0) * (smoothedBass * 0.35)
          posAttribute.setZ(i, wave1 + wave2 + ripple)
        } else {
          // Flatline scanning sweep when paused
          const sweep = Math.sin(x * 4.0 - time * 2.0) * 0.04
          posAttribute.setZ(i, sweep)
        }
      }
      posAttribute.needsUpdate = true

      // Animate Ring & Wireframe Rotation
      ringMesh.rotation.z += isPlaying ? 0.03 : 0.005
      ringMesh.rotation.x = Math.sin(time * 0.8) * 0.3
      const ringScale = 1 + smoothedBass * 0.4
      ringMesh.scale.set(ringScale, ringScale, ringScale)

      // Dynamic Wireframe Color shift based on song / frequency
      if (isPlaying) {
        planeMat.color.setHSL(0.35 + Math.sin(time * 0.2) * 0.08, 0.9, 0.5)
      } else {
        planeMat.color.setHex(0x363545)
      }

      renderer.render(scene, camera)
      animFrameRef.current = requestAnimationFrame(render)
    }

    animFrameRef.current = requestAnimationFrame(render)

    // Handle container resize
    const handleResize = () => {
      if (!container) return
      const w = container.clientWidth || 260
      const h = container.clientHeight || 150
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }

    const observer = new ResizeObserver(handleResize)
    observer.observe(container)

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current)
      observer.disconnect()
      scene.remove(waveMesh)
      scene.remove(ringMesh)
      scene.remove(gridHelper)
      planeGeo.dispose()
      planeMat.dispose()
      ringGeo.dispose()
      ringMat.dispose()
      renderer.dispose()
      if (container && renderer.domElement) {
        container.innerHTML = ''
      }
    }
  }, [isPlaying, trackName, artist])

  return (
    <div className="relative w-full h-full min-h-[175px] bg-[#0b0a11] overflow-hidden flex flex-col justify-between select-none">
      {/* 3D WebGL Canvas */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full" />

      {/* Retro CRT Oscilloscope HUD Overlay */}
      <div className="relative z-10 p-2 flex items-center justify-between text-[9px] font-mono text-emerald-400 font-bold bg-black/40 backdrop-blur-2xs border-b border-emerald-900/40">
        <div className="flex items-center gap-1.5">
          <span className={`inline-block w-1.5 h-1.5 rounded-full ${isPlaying ? 'bg-emerald-400 animate-pulse' : 'bg-gray-600'}`}></span>
          <span>3D_CRT_SPECTRUM // FFT_512</span>
        </div>
        <span className="text-amber-300">
          {isPlaying ? 'LIVE SIGNAL' : 'SIGNAL IDLE'}
        </span>
      </div>

      {/* Bottom Telemetry Ticker */}
      <div className="relative z-10 p-1.5 bg-black/60 backdrop-blur-2xs border-t border-emerald-900/40 flex items-center justify-between text-[8px] font-mono text-gray-400">
        <span className="truncate max-w-[150px] text-emerald-300">
          &gt; {trackName || 'TRACK'}
        </span>
        <span className="text-amber-400 font-bold">THREE.JS 60FPS</span>
      </div>
    </div>
  )
}
