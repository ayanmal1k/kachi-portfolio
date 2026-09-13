'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function AmbientCanvas() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    let animationFrameId: number
    let width = container.clientWidth || window.innerWidth
    let height = container.clientHeight || window.innerHeight

    // Scene, Camera, Renderer
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000)
    camera.position.z = 80

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    // Particles
    const particleCount = 200
    const positions = new Float32Array(particleCount * 3)
    const scales = new Float32Array(particleCount)
    const initialPositions = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 140
      const y = (Math.random() - 0.5) * 100
      const z = (Math.random() - 0.5) * 60

      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z

      initialPositions[i * 3] = x
      initialPositions[i * 3 + 1] = y
      initialPositions[i * 3 + 2] = z

      scales[i] = Math.random() * 1.5 + 0.5
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1))

    // Soft particle texture / shader or circle points
    const material = new THREE.PointsMaterial({
      color: 0xfa5d29, // Awwwards warm accent
      size: 2.2,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })

    const points = new THREE.Points(geometry, material)
    scene.add(points)

    // Second layer: subtle cool blue points for depth
    const particleCount2 = 120
    const positions2 = new Float32Array(particleCount2 * 3)
    for (let i = 0; i < particleCount2; i++) {
      positions2[i * 3] = (Math.random() - 0.5) * 150
      positions2[i * 3 + 1] = (Math.random() - 0.5) * 110
      positions2[i * 3 + 2] = (Math.random() - 0.5) * 70
    }
    const geometry2 = new THREE.BufferGeometry()
    geometry2.setAttribute('position', new THREE.BufferAttribute(positions2, 3))
    const material2 = new THREE.PointsMaterial({
      color: 0x49b3fc, // Awwwards cool accent
      size: 1.6,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
    const points2 = new THREE.Points(geometry2, material2)
    scene.add(points2)

    // Pointer tracking with rAF damping
    let targetMouseX = 0
    let targetMouseY = 0
    let currentMouseX = 0
    let currentMouseY = 0

    const handlePointerMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 12
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 12
    }

    window.addEventListener('mousemove', handlePointerMove, { passive: true })

    const handleResize = () => {
      if (!container) return
      width = container.clientWidth || window.innerWidth
      height = container.clientHeight || window.innerHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }

    window.addEventListener('resize', handleResize)

    // Animation Loop
    let clock = new THREE.Clock()
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)

      const elapsedTime = clock.getElapsedTime()

      // Smooth mouse damping
      currentMouseX += (targetMouseX - currentMouseX) * 0.05
      currentMouseY += (targetMouseY - currentMouseY) * 0.05

      camera.position.x = currentMouseX
      camera.position.y = -currentMouseY
      camera.lookAt(scene.position)

      // Subtle organic wave movement
      const posAttr = geometry.attributes.position as THREE.BufferAttribute
      const arr = posAttr.array as Float32Array
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3
        arr[i3 + 1] = initialPositions[i3 + 1] + Math.sin(elapsedTime * 0.8 + initialPositions[i3] * 0.05) * 3
      }
      posAttr.needsUpdate = true

      points.rotation.y = elapsedTime * 0.02
      points2.rotation.y = -elapsedTime * 0.015
      points2.rotation.x = elapsedTime * 0.01

      renderer.render(scene, camera)
    }

    animate()

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', handlePointerMove)
      window.removeEventListener('resize', handleResize)

      geometry.dispose()
      material.dispose()
      geometry2.dispose()
      material2.dispose()
      renderer.dispose()

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-80"
    />
  )
}
