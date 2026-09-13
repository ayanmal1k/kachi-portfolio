'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export function PowBanner() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  // Mouse tilt / parallax physics
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 120 }
  const smoothX = useSpring(mouseX, springConfig)
  const smoothY = useSpring(mouseY, springConfig)

  const glowX = useTransform(smoothX, [-300, 300], [-25, 25])
  const glowY = useTransform(smoothY, [-300, 300], [-15, 15])
  const textX = useTransform(smoothX, [-300, 300], [-8, 8])
  const textY = useTransform(smoothY, [-300, 300], [-5, 5])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full overflow-hidden bg-[#030712] text-white selection:bg-[#0099ff] selection:text-white"
    >
      {/* ============================================================ */}
      {/* SEAMLESS GRADIENT BLEND WITH PRECEDING HERO SECTION          */}
      {/* ============================================================ */}
      <div
        className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#030712] via-[#030712]/70 to-transparent z-20 pointer-events-none"
        aria-hidden="true"
      />

      {/* Dynamic Cursor-Tracked Atmospheric Glow */}
      <motion.div
        style={{ x: glowX, y: glowY }}
        className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-[#0088ff]/15 blur-[100px] pointer-events-none z-10"
        aria-hidden="true"
      />

      {/* ============================================================ */}
      {/* DESKTOP HERO BANNER (>= md) - SLIM & COMPACT HEIGHT          */}
      {/* ============================================================ */}
      <div className="relative hidden md:flex min-h-[260px] md:min-h-[290px] lg:min-h-[330px] xl:min-h-[360px] w-full items-center">
        {/* Full-bleed Edge-to-Edge Character Artwork Background */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-[position:85%_center] lg:bg-[position:90%_center] xl:bg-center transition-transform duration-700 ease-out"
          style={{
            backgroundImage: "url('/pow-banner.avif')",
            filter: 'contrast(1.05) saturate(1.1)',
          }}
        />

        {/* Ambient Dark Gradient Vignette for Text Contrast */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/80 to-transparent lg:via-[#030712]/50 xl:via-[#030712]/30 pointer-events-none z-10"
          aria-hidden="true"
        />

        {/* Top/Bottom Cyber Accent Rule Lines */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#0099ff]/30 to-transparent z-20 pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#0099ff]/30 to-transparent z-20 pointer-events-none" />

        {/* Content Container */}
        <div className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-12 py-6">
          <motion.div
            style={{ x: textX, y: textY }}
            className="flex flex-col items-start max-w-xl"
          >
            {/* SERVICES Tag */}
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-2 font-mono text-xs sm:text-sm font-semibold tracking-[0.3em] text-[#38bdf8] uppercase drop-shadow-[0_0_10px_rgba(56,189,248,0.8)]"
            >
              SERVICES
            </motion.span>

            {/* Kinetic Calligraphy Headline - Balanced Scale */}
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-['MasterVictory'] text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-normal leading-[1.12] tracking-normal select-none"
            >
              <span className="block text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.9)]">
                HOW I CAN HELP
              </span>
              <span className="block mt-1 sm:mt-1.5 drop-shadow-[0_3px_12px_rgba(0,0,0,0.9)]">
                <span className="text-white">YOUR </span>
                <span className="relative inline-block text-[#0099ff] drop-shadow-[0_0_24px_rgba(0,153,255,0.95)] transition-all duration-300 hover:drop-shadow-[0_0_36px_rgba(0,210,255,1)]">
                  PROJECT
                </span>
              </span>
            </motion.h2>

            {/* Arched Brush Underline (stroke-2.png) - Compact Scale */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0.7 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative mt-1.5 sm:mt-2 h-7 w-48 sm:h-8 sm:w-56 lg:h-9 lg:w-64 origin-left pointer-events-none select-none filter drop-shadow-[0_0_16px_rgba(0,140,255,0.9)]"
            >
              <Image
                src="/stroke-2.png"
                alt=""
                fill
                className="object-contain object-left"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* MOBILE RESPONSIVE BANNER (< md) - COMPACT                    */}
      {/* ============================================================ */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="flex md:hidden flex-col w-full relative pt-8 pb-4"
      >
        <div className="relative z-20 flex flex-col items-start px-6">
          <span className="mb-2 font-mono text-[11px] font-semibold tracking-[0.25em] text-[#38bdf8] uppercase drop-shadow-[0_0_8px_rgba(56,189,248,0.7)]">
            SERVICES
          </span>

          <h2 className="font-['MasterVictory'] text-2xl sm:text-3xl font-normal leading-tight select-none">
            <span className="block text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              HOW I CAN HELP
            </span>
            <span className="block mt-1">
              <span className="text-white">YOUR </span>
              <span className="text-[#0099ff] drop-shadow-[0_0_18px_rgba(0,140,255,0.9)]">
                PROJECT
              </span>
            </span>
          </h2>

          <div className="relative mt-1.5 h-6 w-40 pointer-events-none select-none filter drop-shadow-[0_0_12px_rgba(0,140,255,0.9)]">
            <Image
              src="/stroke-2.png"
              alt=""
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </div>

        {/* Mobile Character Showcase Card */}
        <div className="relative mt-5 w-full aspect-[16/9] overflow-hidden">
          <Image
            src="/pow-mobile.avif"
            alt="Kachi Capabilities"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-[#030712]/50 pointer-events-none" />
        </div>
      </motion.div>

      {/* ============================================================ */}
      {/* SEAMLESS BOTTOM TRANSITION INTO SERVICES CARDS SECTION       */}
      {/* ============================================================ */}
      <div
        className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#02050e] via-[#02050e]/60 to-transparent z-20 pointer-events-none"
        aria-hidden="true"
      />
    </section>
  )
}
