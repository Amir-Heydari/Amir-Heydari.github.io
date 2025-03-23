'use client'

import { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function ParticleField(props: any) {
  const ref = useRef<THREE.Points>(null!)
  const particleCount = 10000
  
  const positions = new Float32Array(particleCount * 3)
  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3
    positions[i3] = (Math.random() - 0.5) * 10
    positions[i3 + 1] = (Math.random() - 0.5) * 10
    positions[i3 + 2] = (Math.random() - 0.5) * 10
  }
  
  useFrame((state) => {
    if (!ref.current) return
    
    ref.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.2
    ref.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.2
    
    const { mouse } = state
    ref.current.rotation.x += (mouse.y * 0.1 - ref.current.rotation.x) * 0.05
    ref.current.rotation.y += (mouse.x * 0.1 - ref.current.rotation.y) * 0.05
  })
  
  return (
    <Points ref={ref} positions={positions} stride={3} {...props}>
      <PointMaterial
        transparent
        color="#BDBDBD"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  )
}

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 opacity-60">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ParticleField />
      </Canvas>
    </div>
  )
}