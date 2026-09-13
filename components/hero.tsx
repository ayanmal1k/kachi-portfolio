'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  const [isHovered, setIsHovered] = useState(false)

  // Motion variants with spring physics
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.08,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 18,
      },
    },
  }

  return (
    <section className="relative min-h-[calc(100vh-80px)] w-full overflow-hidden bg-[#030712] text-white">
      {/* ============================================================ */}
      {/* 1. BACKGROUND LAYERS: Contained strictly within Hero Section */}
      {/* ============================================================ */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {/* Desktop Hero BG (Full original brightness and clarity) */}
        <div
          className="hidden md:block absolute inset-0 bg-cover bg-no-repeat bg-[position:88%_center] lg:bg-[position:95%_center] xl:bg-right transition-all duration-1000 ease-out"
          style={{ backgroundImage: "url('/hero-bg.avif')" }}
        />

        {/* Mobile Hero BG (Full original brightness and clarity) */}
        <div
          className="block md:hidden absolute inset-0 bg-cover bg-no-repeat bg-bottom"
          style={{ backgroundImage: "url('/hero-bg-mobile.avif')" }}
        />

        {/* 10% Dark Overlay */}
        <div className="absolute inset-0 bg-black/20" aria-hidden="true" />

        {/* Dynamic Electric Blue Glow Spheres */}
        <div
          className="absolute -top-20 left-10 h-96 w-96 rounded-full bg-[#0088ff]/15 blur-[130px] animate-pulse"
          aria-hidden="true"
        />
        <div
          className="absolute top-1/3 left-4 h-80 w-80 rounded-full bg-[#00d2ff]/12 blur-[140px]"
          aria-hidden="true"
        />
        <div
          className="absolute top-1/4 right-1/4 h-[420px] w-[420px] rounded-full bg-[#0066ff]/10 blur-[150px] hidden md:block"
          aria-hidden="true"
        />
      </div>

      {/* ============================================================ */}
      {/* 2. HERO CONTENT CONTAINER (Scaled 20% smaller than previous) */}
      {/* ============================================================ */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col justify-between px-6 pb-14 pt-8 sm:px-10 md:justify-center md:pb-16 md:pt-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex w-full max-w-lg lg:max-w-xl xl:max-w-2xl flex-col items-start"
        >
          {/* Tagline / Categories: COMMUNITY | MARKETING | GROWTH (Hidden on mobile) */}
          <motion.div
            variants={itemVariants}
            className="mb-4 hidden sm:inline-flex items-center gap-2 font-mono text-[11px] sm:text-xs md:text-sm font-semibold tracking-[0.26em] text-[#38bdf8] uppercase drop-shadow-[0_0_10px_rgba(56,189,248,0.7)]"
          >
            <span>COMMUNITY</span>
            <span className="text-zinc-600 font-normal">|</span>
            <span>MARKETING</span>
            <span className="text-zinc-600 font-normal">|</span>
            <span>GROWTH</span>
          </motion.div>

          {/* Main Title: KACHI Text with Crown Image */}
          <motion.div
            variants={itemVariants}
            className="relative mb-2 w-full max-w-[330px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-[580px] xl:max-w-[640px]"
          >
            {/* Ambient backlight glow pulsing behind Kachi */}
            <div
              className="absolute -inset-5 rounded-full bg-[#0088ff]/35 blur-[48px] animate-pulse pointer-events-none"
              aria-hidden="true"
            />
            <div className="relative h-32 w-full sm:h-42 md:h-50 lg:h-58 xl:h-66 drop-shadow-[0_0_30px_rgba(0,140,255,0.85)] filter">
              <Image
                src="/kachi-text-with-crown.png"
                alt="Kachi"
                fill
                className="object-contain object-left transition-transform duration-500 hover:scale-[1.02]"
                priority
              />
            </div>
          </motion.div>

          {/* Subtext: YOUR PROJECT'S GROWTH PARTNER */}
          <motion.div
            variants={itemVariants}
            className="relative mb-7 w-full max-w-[330px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-[580px] xl:max-w-[640px]"
          >
            <div className="relative h-16 w-full sm:h-20 md:h-24 lg:h-30 xl:h-34 drop-shadow-[0_0_20px_rgba(0,140,255,0.8)]">
              <Image
                src="/hero-subtext.png"
                alt="Your Project's Growth Partner"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </motion.div>

          {/* Paragraph Text with Cyber Monospace Aesthetic */}
          <motion.p
            variants={itemVariants}
            className="mb-8 max-w-md lg:max-w-lg font-mono text-xs sm:text-sm md:text-base font-normal leading-relaxed text-zinc-200 drop-shadow-sm"
          >
            I help Web3 projects grow through community building, influencer marketing, ambassador programs and strategic execution. Let&apos;s turn your vision into a movement.
          </motion.p>

          {/* Chamfered Polygonal Glowing Button & Underline Stroke */}
          <motion.div
            variants={itemVariants}
            className="relative flex flex-col items-start"
          >
            {/* The Cut-Corner Chamfered Button */}
            <motion.a
              href="#contact"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 350, damping: 20 }}
              className="group relative inline-block cursor-pointer p-[2px] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f0ff]"
              style={{
                filter: isHovered
                  ? 'drop-shadow(0 0 22px rgba(0, 195, 255, 0.95)) drop-shadow(0 0 35px rgba(0, 110, 255, 0.65))'
                  : 'drop-shadow(0 0 14px rgba(0, 150, 255, 0.8))',
              }}
            >
              {/* Outer Chamfer Border (Polygonal Cut Corners) */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-[#0099ff] via-[#38bdf8] to-[#0070f3] transition-all duration-300"
                style={{
                  clipPath:
                    'polygon(11px 0%, calc(100% - 11px) 0%, 100% 11px, 100% calc(100% - 11px), calc(100% - 11px) 100%, 11px 100%, 0% calc(100% - 11px), 0% 11px)',
                }}
              />

              {/* Inner Button Surface */}
              <div
                className="relative flex items-center justify-center gap-3 bg-[#030712]/90 px-8 py-3.5 sm:px-9 sm:py-3.5 transition-colors duration-300 group-hover:bg-[#030712]/75 backdrop-blur-md"
                style={{
                  clipPath:
                    'polygon(9.5px 0%, calc(100% - 9.5px) 0%, 100% 9.5px, 100% calc(100% - 9.5px), calc(100% - 9.5px) 100%, 9.5px 100%, 0% calc(100% - 9.5px), 0% 9.5px)',
                }}
              >
                {/* Glow beam highlight inside button */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00f0ff]/12 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />

                <span className="font-mono text-xs sm:text-sm md:text-sm font-bold tracking-widest text-white uppercase">
                  LET&apos;S WORK
                </span>

                <motion.span
                  animate={{ x: isHovered ? 4 : 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="text-[#38bdf8] font-bold"
                >
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </motion.span>
              </div>
            </motion.a>

            {/* Glowing Brush Stroke Underline (stroke-1.png as seen in screenshot) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative mt-2 sm:mt-2.5 md:mt-3 ml-1 sm:ml-2 h-10 w-52 sm:h-11 sm:w-60 lg:h-13 lg:w-68 filter drop-shadow-[0_0_14px_rgba(0,140,255,0.85)] pointer-events-none select-none"
            >
              <Image
                src="/stroke-1.png"
                alt=""
                fill
                className="object-contain object-left"
                priority
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Space reservation for mobile character breathing room */}
        <div className="h-48 md:hidden pointer-events-none" aria-hidden="true" />
      </div>
    </section>
  )
}
