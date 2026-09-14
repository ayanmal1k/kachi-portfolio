'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import { X, ZoomIn, ArrowUpRight } from 'lucide-react'

interface ProofItem {
  id: string
  number: string
  imageSrc: string
}

export function ProofOfWork() {
  const [selectedProof, setSelectedProof] = useState<ProofItem | null>(null)

  const proofItems: ProofItem[] = [
    {
      id: 'pow-1',
      number: '01',
      imageSrc: '/projects/JPG/proof-stc-C9-4gdCa.jpg',
    },
    {
      id: 'pow-2',
      number: '02',
      imageSrc: '/projects/JPG/proof-1-CFUm39SE.jpg',
    },
    {
      id: 'pow-3',
      number: '03',
      imageSrc: '/projects/JPG/proof-3-Btf0wn7d.jpg',
    },
    {
      id: 'pow-4',
      number: '04',
      imageSrc: '/projects/JPG/proof-4-BJl36utA.jpg',
    },
    {
      id: 'pow-5',
      number: '05',
      imageSrc: '/projects/JPG/proof-5-BRqNyq5m.jpg',
    },
    {
      id: 'pow-6',
      number: '06',
      imageSrc: '/projects/JPG/proof-6-BMCAcmbT.jpg',
    },
    {
      id: 'pow-7',
      number: '07',
      imageSrc: '/projects/JPG/proof-7-6QBkgQu9.jpg',
    },
    {
      id: 'pow-8',
      number: '08',
      imageSrc: '/projects/JPG/proof-8-Tx_niwDG.jpg',
    },
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
        stiffness: 120,
        damping: 18,
      },
    },
  }

  return (
    <section className="relative w-full bg-[#02050e] py-16 sm:py-24 lg:py-28 text-white overflow-hidden selection:bg-[#0099ff] selection:text-white">
      {/* Ambient background glow and paint splashes */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-screen pointer-events-none"
        style={{ backgroundImage: "url('/services-bg.jpg')" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#02050e] via-black/40 to-[#02050e] pointer-events-none"
        aria-hidden="true"
      />

      {/* Cyber Grid pattern watermark */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#0099ff0a_1px,transparent_1px),linear-gradient(to_bottom,#0099ff0a_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"
        aria-hidden="true"
      />

      {/* Atmospheric glow spots */}
      <div className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-[#0088ff]/15 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-[#00d2ff]/12 blur-[160px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1560px] px-6 sm:px-10 lg:px-14 xl:px-16">
        {/* ============================================================ */}
        {/* SECTION HEADER                                               */}
        {/* ============================================================ */}
        <div className="mb-10 sm:mb-14 flex items-center justify-between">
          <h2 className="font-['MasterVictory'] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight tracking-normal select-none">
            <span className="text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">PROOF OF </span>
            <span className="text-[#0099ff] drop-shadow-[0_0_26px_rgba(0,140,255,0.95)]">WORK</span>
          </h2>
        </div>

        {/* ============================================================ */}
        {/* 8 SCREENSHOTS GRID: CYBER HUD GLASS VIEWPORT CARDS           */}
        {/* ============================================================ */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8"
        >
          {proofItems.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              onClick={() => setSelectedProof(item)}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 350, damping: 20 }}
              className="group relative flex flex-col justify-between rounded-2xl bg-[#040814]/90 border border-[#0099ff]/30 hover:border-[#00d2ff] backdrop-blur-xl transition-all duration-300 cursor-pointer overflow-hidden p-4 sm:p-5 shadow-[0_8px_30px_rgba(0,0,0,0.7)] hover:shadow-[0_0_30px_rgba(0,153,255,0.45)]"
            >
              {/* Futuristic Tech Corner Reticles */}
              <span className="absolute top-2 left-2 h-2.5 w-2.5 border-t-2 border-l-2 border-[#0099ff]/40 group-hover:border-[#00d2ff] transition-colors" />
              <span className="absolute top-2 right-2 h-2.5 w-2.5 border-t-2 border-r-2 border-[#0099ff]/40 group-hover:border-[#00d2ff] transition-colors" />
              <span className="absolute bottom-2 left-2 h-2.5 w-2.5 border-b-2 border-l-2 border-[#0099ff]/40 group-hover:border-[#00d2ff] transition-colors" />
              <span className="absolute bottom-2 right-2 h-2.5 w-2.5 border-b-2 border-r-2 border-[#0099ff]/40 group-hover:border-[#00d2ff] transition-colors" />

              {/* Card Cyber HUD Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-800/80">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00d2ff] animate-pulse" />
                  <span className="font-mono text-[11px] font-bold tracking-wider text-[#38bdf8]">
                    PROJECT // {item.number}
                  </span>
                </div>

                <div className="flex items-center gap-1 font-mono text-[10px] text-[#38bdf8] bg-[#0088ff]/10 px-2 py-0.5 rounded border border-[#0099ff]/30 group-hover:bg-[#0088ff]/25 transition-colors">
                  <ZoomIn className="h-3 w-3" />
                  <span>EXPAND</span>
                </div>
              </div>

              {/* Screenshot Frame */}
              <div className="relative w-full h-[240px] sm:h-[260px] xl:h-[280px] overflow-hidden rounded-xl bg-black/90 border border-zinc-800/70">
                <Image
                  src={item.imageSrc}
                  alt={`Proof of work ${item.number}`}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                {/* Cyber Scanline Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity pointer-events-none" />

                {/* Inspect Badge on Hover */}
                <div className="absolute inset-0 bg-[#0099ff]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <span className="font-mono text-xs font-bold text-white bg-black/85 px-3 py-1.5 rounded-full border border-[#00d2ff]/60 shadow-[0_0_15px_rgba(0,180,255,0.6)] flex items-center gap-1.5">
                    <ArrowUpRight className="h-3.5 w-3.5 text-[#00d2ff]" />
                    Inspect Proof
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ============================================================ */}
      {/* LIGHTBOX MODAL: FULL-RESOLUTION PROOF INSPECTOR              */}
      {/* ============================================================ */}
      <AnimatePresence>
        {selectedProof && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProof(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6 lg:p-8 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[92vh] max-w-4xl w-full overflow-hidden rounded-2xl border-2 border-[#0099ff] bg-[#040814] p-4 sm:p-6 shadow-[0_0_60px_rgba(0,153,255,0.6)]"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProof(null)}
                className="absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/80 text-white border border-white/20 hover:bg-[#0099ff] hover:border-[#00d2ff] hover:text-black transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Modal Top Header */}
              <div className="mb-4 pr-12 flex items-center justify-between border-b border-zinc-800 pb-3">
                <span className="font-mono text-xs text-[#38bdf8] uppercase tracking-wider font-bold">
                  PROOF OF WORK // {selectedProof.number}
                </span>
              </div>

              {/* Full Image Container */}
              <div className="relative w-full h-[65vh] sm:h-[72vh] overflow-y-auto rounded-xl bg-black border border-zinc-800/80">
                <Image
                  src={selectedProof.imageSrc}
                  alt={`Proof of work ${selectedProof.number}`}
                  fill
                  className="object-contain object-center"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
