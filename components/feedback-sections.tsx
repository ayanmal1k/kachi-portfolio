'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import { X, ZoomIn, Bot, MessageSquare } from 'lucide-react'

interface FeedbackItem {
  id: string
  title: string
  platform: 'telegram' | 'discord' | 'x'
  imageSrc: string
}

export function FeedbackSections() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const openKachiAI = () => {
    const bubble = document.getElementById('webagent-chat-bubble')
    if (bubble) {
      bubble.click()
      return
    }
    const welcome = document.getElementById('webagent-welcome-message')
    if (welcome) {
      welcome.click()
      return
    }
    const iframe = document.getElementById('webagent-iframe') as HTMLElement | null
    if (iframe) {
      iframe.style.opacity = '1'
      iframe.style.transform = 'scale(1)'
      iframe.style.bottom = window.innerWidth < 640 ? '0px' : '90px'
      iframe.style.height = window.innerWidth < 640 ? '100%' : '85vh'
      iframe.style.display = 'block'
    }
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 110,
        damping: 18,
      },
    },
  }

  // Section 1: Developer Feedback (3 screenshots from public/dev-feedback)
  const devFeedbackItems: FeedbackItem[] = [
    {
      id: 'dev-1',
      title: 'X Account Contributor & Strategy',
      platform: 'telegram',
      imageSrc: '/dev-feedback/download.jfif',
    },
    {
      id: 'dev-2',
      title: 'High-Standard Collaboration',
      platform: 'telegram',
      imageSrc: '/dev-feedback/download (1).jfif',
    },
    {
      id: 'dev-3',
      title: 'Major Community Scale',
      platform: 'telegram',
      imageSrc: '/dev-feedback/download (58).jfif',
    },
  ]

  // Section 2: Community Feedback (5 screenshots from public/people-feedback)
  const communityTopItems: FeedbackItem[] = [
    {
      id: 'comm-1',
      title: 'Genuine Vibe & Leadership',
      platform: 'telegram',
      imageSrc: '/people-feedback/download.jfif',
    },
    {
      id: 'comm-2',
      title: 'Morale & Trust Motivation',
      platform: 'telegram',
      imageSrc: '/people-feedback/download (1).jfif',
    },
    {
      id: 'comm-3',
      title: 'Respect for Work & Strategy',
      platform: 'telegram',
      imageSrc: '/people-feedback/download (2).jfif',
    },
  ]

  const communityBottomItems: FeedbackItem[] = [
    {
      id: 'comm-4',
      title: 'Ambassador & Growth Praise',
      platform: 'telegram',
      imageSrc: '/people-feedback/download (3).jfif',
    },
    {
      id: 'comm-5',
      title: 'Organic Bag Worker & Grinder',
      platform: 'telegram',
      imageSrc: '/people-feedback/people-feedback-chili.jpg',
    },
  ]

  const renderFeedbackCard = (item: FeedbackItem) => {
    const isHovered = hoveredCard === item.id

    return (
      <motion.div
        key={item.id}
        variants={cardVariants}
        onMouseEnter={() => setHoveredCard(item.id)}
        onMouseLeave={() => setHoveredCard(null)}
        onClick={() => setSelectedImage(item.imageSrc)}
        whileHover={{ y: -6, scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 350, damping: 20 }}
        className="group relative flex flex-col justify-between p-[2px] cursor-pointer transition-all duration-300 w-full"
        style={{
          filter: isHovered
            ? 'drop-shadow(0 0 24px rgba(0, 153, 255, 0.95)) drop-shadow(0 0 40px rgba(0, 120, 255, 0.6))'
            : 'drop-shadow(0 0 14px rgba(0, 140, 255, 0.75))',
        }}
      >
        {/* Outer Chamfer Border Frame (Glowing POW Blue) */}
        <div
          className="absolute inset-0 bg-[#0099ff] transition-all duration-300 group-hover:bg-[#00c8ff]"
          style={{
            clipPath:
              'polygon(16px 0%, calc(100% - 16px) 0%, 100% 16px, 100% calc(100% - 16px), calc(100% - 16px) 100%, 16px 100%, 0% calc(100% - 16px), 0% 16px)',
          }}
        />

        {/* Inner Card Container */}
        <div
          className="relative flex flex-col justify-between h-full bg-[#040814]/95 group-hover:bg-[#050c1f]/90 backdrop-blur-xl transition-colors duration-300 overflow-hidden p-3 sm:p-3.5"
          style={{
            clipPath:
              'polygon(14px 0%, calc(100% - 14px) 0%, 100% 14px, 100% calc(100% - 14px), calc(100% - 14px) 100%, 14px 100%, 0% calc(100% - 14px), 0% 14px)',
          }}
        >
          {/* Screenshot Container - Compact height */}
          <div className="relative w-full h-[270px] sm:h-[300px] overflow-hidden rounded-lg bg-black/80 border border-zinc-800/60">
            <Image
              src={item.imageSrc}
              alt={item.title}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />

            {/* Top-right EXPAND pill badge */}
            <div className="absolute top-2.5 right-2.5 z-10 flex items-center gap-1 font-mono text-[9px] text-[#38bdf8] bg-black/80 backdrop-blur-md px-2 py-0.5 rounded-full border border-[#0099ff]/40 shadow-md group-hover:border-[#00d2ff] transition-colors">
              <ZoomIn className="h-2.5 w-2.5" />
              <span>EXPAND</span>
            </div>

            {/* Subtle Gradient Shadow at bottom */}
            <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#040814] via-[#040814]/40 to-transparent pointer-events-none" />

            {/* Hover overlay indicator */}
            <div className="absolute inset-0 bg-[#0099ff]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
              <span className="font-mono text-[11px] font-bold text-white bg-black/80 px-2.5 py-1 rounded-full border border-[#00d2ff]/60 shadow-[0_0_12px_rgba(0,180,255,0.6)]">
                View Chat
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="relative w-full bg-[#02050e] text-white overflow-hidden selection:bg-[#0099ff] selection:text-white">
      {/* Shared Blue Splashes Background Texture */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-screen pointer-events-none"
        style={{ backgroundImage: "url('/services-bg.jpg')" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#02050e] via-black/40 to-[#02050e] pointer-events-none"
        aria-hidden="true"
      />

      {/* Atmospheric Ambient Glow Spheres */}
      <div
        className="absolute top-1/6 left-10 h-[600px] w-[600px] rounded-full bg-[#0088ff]/12 blur-[170px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-10 h-[600px] w-[600px] rounded-full bg-[#00d2ff]/10 blur-[170px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/6 left-1/4 h-[600px] w-[600px] rounded-full bg-[#0066ff]/12 blur-[180px] pointer-events-none"
        aria-hidden="true"
      />

      {/* ============================================================ */}
      {/* SECTION 1: DEVELOPER FEEDBACK                                */}
      {/* ============================================================ */}
      <section className="relative z-10 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1560px] px-6 sm:px-10 lg:px-14 xl:px-16">
          {/* Header Row */}
          <div className="mb-10 sm:mb-12 lg:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="flex flex-col items-start max-w-2xl">
              <span className="mb-3 font-mono text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#38bdf8] uppercase drop-shadow-[0_0_8px_rgba(56,189,248,0.7)]">
                REAL PEOPLE / REAL FEEDBACK
              </span>

              <div className="relative flex items-center gap-3">
                <h2 className="font-['MasterVictory'] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight tracking-normal select-none">
                  <span className="text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">DEVELOPER </span>
                  <span className="text-[#0099ff] drop-shadow-[0_0_24px_rgba(0,140,255,0.9)]">FEEDBACK</span>
                </h2>

                {/* Crown Icon next to title */}
                <div className="relative h-10 w-12 sm:h-12 sm:w-14 filter drop-shadow-[0_0_18px_rgba(0,140,255,0.95)] -rotate-12 select-none pointer-events-none">
                  <Image src="/crown-icon.png" alt="Crown" fill className="object-contain" />
                </div>
              </div>

              <p className="mt-4 font-mono text-xs sm:text-sm text-zinc-300 max-w-xl leading-relaxed">
                Builders, founders and devs who&apos;ve worked with us. Here&apos;s what they had to say.
              </p>
            </div>

            {/* Top Right Sticker: TRUSTED BY BUILDERS WORLDWIDE + Cross Icon */}
            <div className="relative hidden md:flex flex-col items-end select-none pointer-events-none">
              <div className="relative h-12 w-14 filter drop-shadow-[0_0_16px_rgba(0,140,255,0.95)] mb-1">
                <Image src="/cross-icon.png" alt="Cross" fill className="object-contain" />
              </div>
              <div className="font-['MasterVictory'] text-xl sm:text-2xl lg:text-3xl text-[#0099ff] text-right -rotate-3 filter drop-shadow-[0_0_16px_rgba(0,140,255,0.9)]">
                TRUSTED BY BUILDERS<br />WORLDWIDE
              </div>
            </div>
          </div>

          {/* 3 Developer Feedback Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 xl:gap-10"
          >
            {devFeedbackItems.map((item) => renderFeedbackCard(item))}
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* MID-SECTION BANNER: KACHI AI ASSISTANT                       */}
      {/* ============================================================ */}
      <div className="relative z-10 mx-auto max-w-[1560px] px-6 sm:px-10 lg:px-14 xl:px-16 my-4 sm:my-6">
        <div className="relative overflow-hidden rounded-2xl bg-[#040814]/90 border border-[#0099ff]/40 hover:border-[#0099ff] p-6 sm:p-8 backdrop-blur-xl shadow-[0_0_30px_rgba(0,153,255,0.2)] transition-all">
          {/* Subtle Ambient Glows */}
          <div className="absolute -top-10 right-1/4 h-36 w-72 bg-[#0099ff]/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 left-1/4 h-36 w-72 bg-[#00d2ff]/12 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex flex-col items-start max-w-2xl">
              <h3 className="font-['MasterVictory'] text-2xl sm:text-3xl lg:text-4xl text-white tracking-wide">
                HAVE QUESTIONS? <span className="text-[#0099ff] drop-shadow-[0_0_20px_rgba(0,140,255,0.9)]">ASK KACHI AI</span>
              </h3>

              <p className="mt-2 font-mono text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-xl">
                Ask anything you need to know about Kachi — his verified track record, role capabilities, project experience, or how to hire him to scale and grow your community.
              </p>
            </div>

            <div className="flex-shrink-0">
              <button
                type="button"
                onClick={openKachiAI}
                className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#0099ff] hover:bg-[#00c8ff] text-black font-mono text-xs sm:text-sm font-bold tracking-wide transition-all shadow-[0_0_20px_rgba(0,153,255,0.6)] hover:shadow-[0_0_30px_rgba(0,200,255,0.9)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <Bot className="h-4 w-4 text-black transition-transform group-hover:rotate-12" />
                <span>CHAT WITH KACHI AI</span>
                <MessageSquare className="h-3.5 w-3.5 opacity-80" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* SECTION 2: COMMUNITY FEEDBACK                                */}
      {/* ============================================================ */}
      <section className="relative z-10 pt-4 sm:pt-6 lg:pt-8 pb-16 sm:pb-20 lg:pb-24">
        <div className="mx-auto max-w-[1560px] px-6 sm:px-10 lg:px-14 xl:px-16">
          {/* Header Row */}
          <div className="mb-10 sm:mb-12 lg:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="flex flex-col items-start max-w-2xl">
              <span className="mb-3 font-mono text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#38bdf8] uppercase drop-shadow-[0_0_8px_rgba(56,189,248,0.7)]">
                COMMUNITY VOICES
              </span>

              <h2 className="font-['MasterVictory'] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight tracking-normal select-none">
                <span className="text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">COMMUNITY </span>
                <span className="text-[#0099ff] drop-shadow-[0_0_24px_rgba(0,140,255,0.9)]">FEEDBACK</span>
              </h2>

              <p className="mt-4 font-mono text-xs sm:text-sm text-zinc-300 max-w-xl leading-relaxed">
                From active members to long-time supporters, our community keeps the energy alive.
              </p>
            </div>

            {/* Top Right Sticker: REAL PEOPLE REAL SUPPORT with Crown */}
            <div className="relative hidden md:flex flex-col items-end select-none pointer-events-none">
              <div className="relative h-12 w-14 filter drop-shadow-[0_0_18px_rgba(0,140,255,0.95)] mb-1 rotate-6">
                <Image src="/crown-icon.png" alt="Crown" fill className="object-contain" />
              </div>
              <div className="font-['MasterVictory'] text-xl sm:text-2xl lg:text-3xl text-[#0099ff] text-right rotate-2 filter drop-shadow-[0_0_16px_rgba(0,140,255,0.9)]">
                REAL PEOPLE<br />REAL SUPPORT
              </div>
            </div>
          </div>

          {/* ROW 1: 3 CARDS */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 xl:gap-10 mb-8 sm:mb-10 lg:mb-12"
          >
            {communityTopItems.map((item) => renderFeedbackCard(item))}
          </motion.div>

          {/* ROW 2: 2 CARDS CENTERED WITH FLANKING ASSETS */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-center"
          >
            {/* Left Flank Graphic: bigger-together.png + Crown */}
            <div className="relative hidden lg:flex flex-col items-center justify-center lg:col-span-2 select-none pointer-events-none gap-2">
              <div className="relative h-12 w-14 filter drop-shadow-[0_0_18px_rgba(0,140,255,0.95)] -rotate-12">
                <Image src="/crown-icon.png" alt="Crown" fill className="object-contain" />
              </div>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative h-44 w-44 xl:h-52 xl:w-52 filter drop-shadow-[0_0_24px_rgba(0,140,255,0.9)]"
              >
                <Image
                  src="/bigger-together.png"
                  alt="Bigger Together"
                  fill
                  className="object-contain object-center"
                  priority
                />
              </motion.div>
            </div>

            {/* Bottom Card 1: 4 cols on lg */}
            <div className="lg:col-span-4 w-full">
              {renderFeedbackCard(communityBottomItems[0])}
            </div>

            {/* Bottom Card 2: 4 cols on lg */}
            <div className="lg:col-span-4 w-full">
              {renderFeedbackCard(communityBottomItems[1])}
            </div>

            {/* Right Flank Graphic: YOUR SUPPORT FUELS US with curved arrow */}
            <div className="relative hidden lg:flex flex-col items-center justify-center lg:col-span-2 gap-3 select-none pointer-events-none">
              <div className="font-['MasterVictory'] text-2xl xl:text-3xl text-[#0099ff] text-center -rotate-6 filter drop-shadow-[0_0_18px_rgba(0,140,255,0.95)]">
                YOUR<br />SUPPORT<br />FUELS US
              </div>
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#00d2ff] filter drop-shadow-[0_0_12px_rgba(0,210,255,0.9)]"
              >
                <path
                  d="M10 15 C 30 10, 45 25, 45 45"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M35 45 L 45 45 L 45 35"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </motion.div>

          {/* Mobile View Flank Badges */}
          <div className="mt-12 flex lg:hidden items-center justify-around gap-6 select-none pointer-events-none">
            <div className="relative h-28 w-32 filter drop-shadow-[0_0_18px_rgba(0,140,255,0.9)]">
              <Image
                src="/bigger-together.png"
                alt="Bigger Together"
                fill
                className="object-contain object-center"
              />
            </div>
            <div className="font-['MasterVictory'] text-xl text-[#0099ff] text-center -rotate-3 filter drop-shadow-[0_0_14px_rgba(0,140,255,0.9)]">
              YOUR SUPPORT<br />FUELS US
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* LIGHTBOX MODAL: FULL RESOLUTION ZOOM                         */}
      {/* ============================================================ */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6 lg:p-10 backdrop-blur-md cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[92vh] max-w-[90vw] overflow-hidden rounded-2xl border border-[#0099ff]/60 bg-[#040814] p-2 sm:p-4 shadow-[0_0_60px_rgba(0,140,255,0.5)] cursor-default"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/80 text-white border border-[#0099ff]/50 hover:bg-[#0099ff] hover:text-black transition-colors"
                aria-label="Close image preview"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative h-[80vh] w-[85vw] max-w-4xl">
                <Image
                  src={selectedImage}
                  alt="Expanded feedback screenshot"
                  fill
                  className="object-contain object-center"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}