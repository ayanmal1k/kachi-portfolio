import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowLeft,
  ShieldCheck,
  Zap,
  Users,
  MessageSquare,
  TrendingUp,
  Award,
  Flame,
  Globe,
  Compass,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Documentation & Dossier',
  description:
    'Comprehensive documentation, full capabilities specification, verified proof of work, case studies, and operational dossier for Kachi.',
  alternates: {
    canonical: '/docs',
  },
}

export default function DocsPage() {
  const roles = [
    {
      category: 'COMMUNITY & MODERATION',
      icon: '/services card icons/community.png',
      items: [
        {
          role: 'Community Manager',
          summary: 'Community architecture, retention funnels & culture building',
          details: [
            'Design and implement Telegram & Discord onboarding journeys and verification workflows',
            'Develop custom bot integrations (Rose, Collab.Land, SafeGuard, Combot) to maintain server hygiene',
            'Daily engagement prompts, community AMAs, voice spaces, and organic discussion leadership',
            'Member sentiment analysis, retention scoring, and anti-churn incentives',
          ],
        },
        {
          role: 'Moderator',
          summary: '24/7 Global chat protection, anti-FUD enforcement & crisis response',
          details: [
            'Round-the-clock shift coverage across US, EU, and APAC timezones for zero-downtime protection',
            'Instant eradication of phishing scams, impersonators, and malicious drainer links',
            'Firm, respectful enforcement of group guidelines and de-escalation of coordinated FUD attacks',
            'Escalation protocols for technical questions and direct founder/developer communication',
          ],
        },
      ],
    },
    {
      category: 'X (TWITTER) & CREATIVE BRANDING',
      icon: '/services card icons/announce.png',
      items: [
        {
          role: 'X (Twitter) Manager',
          summary: 'Narrative engineering, viral thread architecture & Spaces hosting',
          details: [
            'End-to-end management of official project accounts, scheduled content drops, and Spaces',
            'Crafting high-hook threads translating complex tokenomics/tech into viral, readable narratives',
            'Active quote-tweeting, relevant trend jacking, and algorithm-optimized posting cadence',
            'Direct coordination with crypto influencers, alpha callers, and Web3 media outlets',
          ],
        },
        {
          role: 'Graphics Designer',
          summary: 'High-converting announcement banners, meme creation & visual identity',
          details: [
            'Bespoke cyber-styled announcement banners, partnership posters, and milestone infographics',
            'Viral meme generation tuned to crypto subculture, CT humor, and community inside jokes',
            'Animated stickers, Telegram reaction emojis, and branding guideline packs',
            'Consistent visual polish matching project tokenomics, lore, and aesthetic standards',
          ],
        },
      ],
    },
    {
      category: 'AMBASSADOR & NETWORK ALLIANCES',
      icon: '/services card icons/shieldd.png',
      items: [
        {
          role: 'Ambassador',
          summary: 'Global ambassador guild architecture, incentives & leadership',
          details: [
            'Structuring tiered ambassador systems (Novice, Vanguard, Sentinel) with clear reward metrics',
            'Recruiting, vetting, and onboarding multilingual regional leaders across global markets',
            'Setting up contribution tracking dashboards, weekly sprint goals, and milestone bounties',
            'Nurturing loyal advocates who champion the token across local language communities',
          ],
        },
        {
          role: 'Network Builder',
          summary: 'Cross-project BD, founder introductions & DAO partnerships',
          details: [
            'Direct outreach to complementary protocols, NFT communities, and DeFi ecosystems',
            'Negotiating reciprocal AMA exchanges, co-marketing campaigns, and whitelisting collabs',
            'Introducing high-conviction angel investors, advisors, and strategic community nodes',
            'Building long-term goodwill and trust across the broader Web3 ecosystem',
          ],
        },
      ],
    },
    {
      category: 'RAIDS & SOCIAL ENGAGEMENT',
      icon: '/services card icons/rockettt.png',
      items: [
        {
          role: 'Raider / Engagement',
          summary: 'Coordinated organic raids, quote storms & viral momentum',
          details: [
            'Commanding rapid-response raid teams within seconds of key announcements or influencer tweets',
            'Utilizing raid bots (BuyTech, RaidShark) with customized target links and call-to-actions',
            'Driving top-comment visibility on targeted KOL posts to redirect massive attention to project',
            'Maintaining high moral energy and celebration velocity during chart rallies',
          ],
        },
        {
          role: 'Shiller',
          summary: 'Authentic alpha group seeding & organic social presence',
          details: [
            'Strategic, value-first mentions across high-reputation Telegram alpha groups and Discord servers',
            'Engaging discussions on Reddit (r/CryptoCurrency, r/altcoins), DexScreener comments, and forums',
            'Organic narrative seeding without spammy or artificial behavior that triggers negative perception',
            'Consistent word-of-mouth amplification turning casual holders into vocal champions',
          ],
        },
      ],
    },
    {
      category: 'GROWTH STRATEGY & ADVISORY',
      icon: '/services card icons/chess.png',
      items: [
        {
          role: 'Growth Strategist',
          summary: 'Data-backed acquisition funnels, metrics & campaign architecture',
          details: [
            'Formulating launch roadmaps from stealth phase to TGE and secondary market expansion',
            'Designing engagement gamification, Zealy/Galxe quest funnels, and leaderboard incentives',
            'Measuring conversion metrics: member acquisition costs, retention rates, and social impressions',
            'Structuring liquidity milestones, market maker alignment, and organic trading volume incentives',
          ],
        },
        {
          role: 'Strategic Advisor',
          summary: 'Executive tokenomics review, roadmap pacing & crisis advisory',
          details: [
            'Auditing token supply vesting schedules, utility loops, and inflation sinks',
            'Advising founders on community perception management, exchange listing timing, and PR strategy',
            'Providing unbiased, high-candor feedback on marketing proposals and partnership agreements',
            'Crisis mitigation protocols during market downtrends or unexpected technical hurdles',
          ],
        },
      ],
    },
  ]

  const caseStudies = [
    {
      number: '01',
      title: 'STC Ecosystem Campaign',
      category: 'Ecosystem & Strategy',
      metric: 'Milestone Execution',
      image: '/projects/JPG/proof-stc-C9-4gdCa.jpg',
      desc: 'Executed end-to-end strategic growth advisory, aligning token launch milestones, community sentiment, and roadmap execution for the STC ecosystem.',
    },
    {
      number: '02',
      title: 'Alpha Community Scaling',
      category: 'Community & Moderation',
      metric: 'High Sentiment Scale',
      image: '/projects/JPG/proof-1-CFUm39SE.jpg',
      desc: 'Scaled active core membership while maintaining zero-FUD standards and high organic daily active participation.',
    },
    {
      number: '03',
      title: 'Token Launch Raid Blitz',
      category: 'Raids & Engagement',
      metric: 'Trending #1 Position',
      image: '/projects/JPG/proof-3-Btf0wn7d.jpg',
      desc: 'Synchronized rapid-fire organic raids on Twitter/X, driving multiple posts to viral trending status and boosting dex discovery.',
    },
    {
      number: '04',
      title: 'Ambassador & Partner Expansion',
      category: 'Network & Alliances',
      metric: 'DAO Alliance Securing',
      image: '/projects/JPG/proof-4-BJl36utA.jpg',
      desc: 'Structured global regional ambassador divisions and integrated cross-community alliances across top crypto ecosystems.',
    },
    {
      number: '05',
      title: 'Social Dominance & X Takeover',
      category: 'Raids & Engagement',
      metric: '100K+ Impressions',
      image: '/projects/JPG/proof-5-BRqNyq5m.jpg',
      desc: 'Coordinated narrative takeover on CT, dominating replies of major industry accounts and driving massive organic wallet inquiries.',
    },
    {
      number: '06',
      title: '24/7 Moderation Architecture',
      category: 'Community & Moderation',
      metric: 'Zero-FUD Chat Protection',
      image: '/projects/JPG/proof-6-BMCAcmbT.jpg',
      desc: 'Engineered foolproof anti-phishing defense systems, bot screening, and 24/7 global timezone coverage keeping community safe.',
    },
    {
      number: '07',
      title: 'Strategic Web3 Advisory',
      category: 'Ecosystem & Strategy',
      metric: 'Comprehensive Delivery',
      image: '/projects/JPG/proof-7-6QBkgQu9.jpg',
      desc: 'Provided executive-level roadmap consulting, tokenomics optimization, and tactical partnership structuring.',
    },
    {
      number: '08',
      title: 'Viral Media & Creative Rollout',
      category: 'Raids & Engagement',
      metric: 'Max Creative Engagement',
      image: '/projects/JPG/proof-8-Tx_niwDG.jpg',
      desc: 'Produced high-converting announcement graphics, viral memes, and branding assets that ignited community pride.',
    },
  ]

  const engagementModels = [
    {
      name: 'FULL ECOSYSTEM PARTNER',
      badge: 'RECOMMENDED FOR LAUNCHES',
      desc: 'Complete end-to-end delegation of community management, moderation, X marketing, raid coordination, and advisory.',
      features: [
        'Dedicated 24/7 Moderation Guild',
        'X (Twitter) Content & Narrative Engine',
        'Daily Coordinated Raiding & Shilling',
        'Global Ambassador Program Setup',
        'Weekly Founder Advisory Sprints',
      ],
    },
    {
      name: 'LAUNCH & TGE SPRINT',
      badge: 'HIGH-VELOCITY SPRINT',
      desc: 'Focused 30 to 60-day hyper-growth sprint designed to maximize hype, trending status, and community volume for upcoming TGEs.',
      features: [
        'Pre-Launch Community Hype Generation',
        'KOL Amplification & Raid Swarms',
        'Announcement Graphics & Meme Artillery',
        'DexScreener / Trend Takeover Campaigns',
        'Post-TGE Floor Defense Coordination',
      ],
    },
    {
      name: 'MODERATION & CHAT OPS',
      badge: 'STANDALONE SERVICE',
      desc: 'Plug-and-play 24/7 chat security and vibe management for established communities needing ironclad defense.',
      features: [
        'Global Shift Roster (US / EU / APAC)',
        'Anti-Drainer & Phishing Elimination',
        'Bot Configuration & Verification Setup',
        'Daily Engagement & Event Moderation',
        'Monthly Health & Sentiment Reports',
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-[#02050e] text-white selection:bg-[#0099ff] selection:text-white">
      {/* Background Ambience */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-screen pointer-events-none"
        style={{ backgroundImage: "url('/services-bg.jpg')" }}
        aria-hidden="true"
      />
      <div
        className="fixed inset-0 bg-gradient-to-b from-[#02050e] via-black/50 to-[#02050e] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 py-8 sm:py-12">
        {/* ============================================================ */}
        {/* TOP NAVIGATION / BREADCRUMB BAR                              */}
        {/* ============================================================ */}
        <header className="mb-10 sm:mb-14 flex items-center justify-between border-b border-zinc-800/80 pb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-semibold text-zinc-300 hover:text-[#00d2ff] transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1 text-[#0099ff]" />
            <span>RETURN TO MAIN PORTFOLIO</span>
          </Link>

          <div className="flex items-center gap-2 font-mono text-[11px] text-[#38bdf8] bg-[#0099ff]/10 border border-[#0099ff]/30 px-3 py-1.5 rounded-full">
            <Terminal className="h-3.5 w-3.5" />
            <span>KACHI_SPEC_V2.0 // VERIFIED</span>
          </div>
        </header>

        {/* ============================================================ */}
        {/* HERO TITLE & DOSSIER HEADER                                 */}
        {/* ============================================================ */}
        <div className="mb-16 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0099ff]/15 border border-[#0099ff]/40 text-[#38bdf8] font-mono text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="h-2 w-2 rounded-full bg-[#00d2ff] animate-pulse" />
            <span>OFFICIAL OPERATIONAL DOSSIER</span>
          </div>

          <h1 className="font-['MasterVictory'] text-4xl sm:text-6xl lg:text-7xl font-normal leading-tight select-none">
            <span className="text-white">KACHI </span>
            <span className="text-[#0099ff] drop-shadow-[0_0_28px_rgba(0,140,255,0.95)]">DOCUMENTATION</span>
          </h1>

          <p className="mt-5 font-mono text-sm sm:text-base text-zinc-300 leading-relaxed max-w-3xl">
            A comprehensive reference document detailing the capabilities, methodologies, 10 specialized Web3 roles, 8 verified case studies, and operational standards of Kachi — Web3 Growth Partner & Community Architect.
          </p>
        </div>

        {/* ============================================================ */}
        {/* HUD TELEMETRY METRICS GRID                                   */}
        {/* ============================================================ */}
        <div className="mb-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="flex flex-col p-5 rounded-2xl bg-[#040814]/90 border border-[#0099ff]/30 backdrop-blur-md shadow-[0_0_20px_rgba(0,153,255,0.15)]">
            <div className="flex items-center justify-between text-zinc-400 mb-2">
              <span className="font-mono text-xs">ROLES SPECIALIZATION</span>
              <Layers className="h-4 w-4 text-[#00d2ff]" />
            </div>
            <span className="font-mono text-2xl sm:text-3xl font-bold text-white">10 ROLES</span>
            <span className="font-mono text-[11px] text-zinc-400 mt-1">Full-stack Web3 coverage</span>
          </div>

          <div className="flex flex-col p-5 rounded-2xl bg-[#040814]/90 border border-[#0099ff]/30 backdrop-blur-md shadow-[0_0_20px_rgba(0,153,255,0.15)]">
            <div className="flex items-center justify-between text-zinc-400 mb-2">
              <span className="font-mono text-xs">VERIFIED CASE STUDIES</span>
              <ShieldCheck className="h-4 w-4 text-[#00d2ff]" />
            </div>
            <span className="font-mono text-2xl sm:text-3xl font-bold text-white">08 PROOFS</span>
            <span className="font-mono text-[11px] text-zinc-400 mt-1">High-res verified receipts</span>
          </div>

          <div className="flex flex-col p-5 rounded-2xl bg-[#040814]/90 border border-[#0099ff]/30 backdrop-blur-md shadow-[0_0_20px_rgba(0,153,255,0.15)]">
            <div className="flex items-center justify-between text-zinc-400 mb-2">
              <span className="font-mono text-xs">OPERATIONAL UPTIME</span>
              <Globe className="h-4 w-4 text-[#00d2ff]" />
            </div>
            <span className="font-mono text-2xl sm:text-3xl font-bold text-white">24/7/365</span>
            <span className="font-mono text-[11px] text-zinc-400 mt-1">Global timezone rotation</span>
          </div>

          <div className="flex flex-col p-5 rounded-2xl bg-[#040814]/90 border border-[#0099ff]/30 backdrop-blur-md shadow-[0_0_20px_rgba(0,153,255,0.15)]">
            <div className="flex items-center justify-between text-zinc-400 mb-2">
              <span className="font-mono text-xs">COMMUNITY INTEGRITY</span>
              <Sparkles className="h-4 w-4 text-[#00d2ff]" />
            </div>
            <span className="font-mono text-2xl sm:text-3xl font-bold text-white">100% ORGANIC</span>
            <span className="font-mono text-[11px] text-zinc-400 mt-1">Zero botting or artificial vanity</span>
          </div>
        </div>

        {/* ============================================================ */}
        {/* SECTION 1: EXECUTIVE PROFILE & CORE PHILOSOPHY              */}
        {/* ============================================================ */}
        <section className="mb-20 rounded-3xl bg-[#040814]/90 border border-zinc-800/80 p-8 sm:p-12 backdrop-blur-xl relative overflow-hidden">
          <div className="max-w-3xl">
            <span className="font-mono text-xs text-[#38bdf8] uppercase tracking-[0.2em] font-semibold">
              // 01 EXECUTIVE OVERVIEW
            </span>
            <h2 className="font-['MasterVictory'] text-3xl sm:text-4xl text-white mt-2 mb-6">
              THE MISSION & PHILOSOPHY
            </h2>

            <div className="space-y-4 font-mono text-sm text-zinc-300 leading-relaxed">
              <p>
                In the noisy and fast-moving Web3 landscape, most crypto projects suffer from synthetic engagement, ghost-town Telegram groups, disengaged holders, and sudden post-launch silence.
              </p>
              <p>
                <strong className="text-white font-bold">Kachi</strong> functions as your dedicated growth partner. Rather than treating growth as a superficial marketing checklist, Kachi integrates deep inside your project ecosystem — instilling disciplined 24/7 moderation, viral raiding mechanisms, compelling X narrative broadcasting, and genuine investor confidence.
              </p>
              <p>
                The foundation rests on a single immutable law: <span className="text-[#00d2ff] font-bold">Proof of Work (POW) Over Promises</span>. Every strategy is executed in public view, backed by real chat receipts, real community sentiment, and measurable social dominance.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 2: THE 10 SPECIALIZED CAPABILITIES                  */}
        {/* ============================================================ */}
        <section className="mb-20">
          <div className="mb-10">
            <span className="font-mono text-xs text-[#38bdf8] uppercase tracking-[0.2em] font-semibold">
              // 02 CAPABILITY BREAKDOWN
            </span>
            <h2 className="font-['MasterVictory'] text-3xl sm:text-4xl text-white mt-2">
              THE 10 SPECIALIZED ROLES
            </h2>
            <p className="mt-2 font-mono text-sm text-zinc-400 max-w-2xl">
              Organized across 5 functional pillars, each role operates in tandem to form an unstoppable growth and retention machine.
            </p>
          </div>

          <div className="space-y-8">
            {roles.map((pillar, pIdx) => (
              <div
                key={pIdx}
                className="rounded-2xl bg-[#040814]/90 border border-zinc-800/80 p-6 sm:p-8 backdrop-blur-xl transition-colors hover:border-[#0099ff]/50"
              >
                <div className="flex items-center gap-4 border-b border-zinc-800/80 pb-4 mb-6">
                  <div className="relative h-12 w-12 flex-shrink-0 filter drop-shadow-[0_0_14px_rgba(0,140,255,0.8)]">
                    <Image src={pillar.icon} alt={pillar.category} fill className="object-contain" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                      PILLAR 0{pIdx + 1}
                    </span>
                    <h3 className="font-mono text-base sm:text-lg font-bold text-white tracking-wide">
                      {pillar.category}
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {pillar.items.map((item, iIdx) => (
                    <div
                      key={iIdx}
                      className="p-5 rounded-xl bg-black/50 border border-zinc-800/60 flex flex-col justify-between"
                    >
                      <div>
                        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#0099ff]/15 border border-[#0099ff]/30 text-[#00d2ff] font-mono text-xs font-semibold mb-3">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#00d2ff]" />
                          {item.role}
                        </div>
                        <p className="font-mono text-xs font-medium text-zinc-200 mb-4">
                          {item.summary}
                        </p>
                        <ul className="space-y-2">
                          {item.details.map((bullet, bIdx) => (
                            <li
                              key={bIdx}
                              className="font-mono text-[11px] text-zinc-400 flex items-start gap-2 leading-relaxed"
                            >
                              <CheckCircle2 className="h-3.5 w-3.5 text-[#0099ff] flex-shrink-0 mt-0.5" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 3: THE 8 VERIFIED CASE STUDIES                       */}
        {/* ============================================================ */}
        <section className="mb-20">
          <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <span className="font-mono text-xs text-[#38bdf8] uppercase tracking-[0.2em] font-semibold">
                // 03 VERIFIED CASE STUDIES
              </span>
              <h2 className="font-['MasterVictory'] text-3xl sm:text-4xl text-white mt-2">
                PROOF OF WORK RECORD
              </h2>
            </div>
            <span className="font-mono text-xs text-zinc-400">
              [ 08 VERIFIED ARTIFACTS ARCHIVED ]
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseStudies.map((cs) => (
              <div
                key={cs.number}
                className="group rounded-2xl bg-[#040814]/90 border border-zinc-800/80 p-4 hover:border-[#0099ff]/60 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative w-full h-48 overflow-hidden rounded-xl bg-black border border-zinc-800/80 mb-3">
                    <Image
                      src={cs.image}
                      alt={cs.title}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 mb-1">
                    <span>CASE // {cs.number}</span>
                    <span className="text-[#38bdf8]">{cs.metric}</span>
                  </div>
                  <h4 className="font-mono text-sm font-bold text-white mb-2 group-hover:text-[#00d2ff] transition-colors">
                    {cs.title}
                  </h4>
                  <p className="font-mono text-[11px] text-zinc-400 leading-relaxed">
                    {cs.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 4: ENGAGEMENT MODELS                                 */}
        {/* ============================================================ */}
        <section className="mb-20">
          <div className="mb-10">
            <span className="font-mono text-xs text-[#38bdf8] uppercase tracking-[0.2em] font-semibold">
              // 04 COLLABORATION FRAMEWORKS
            </span>
            <h2 className="font-['MasterVictory'] text-3xl sm:text-4xl text-white mt-2">
              HOW TO WORK WITH KACHI
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {engagementModels.map((m, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-7 flex flex-col justify-between border ${
                  idx === 0
                    ? 'bg-[#040814]/95 border-[#0099ff] shadow-[0_0_30px_rgba(0,153,255,0.25)]'
                    : 'bg-[#040814]/80 border-zinc-800/80'
                }`}
              >
                <div>
                  <span className="font-mono text-[10px] text-[#38bdf8] uppercase tracking-widest font-semibold">
                    {m.badge}
                  </span>
                  <h3 className="font-['MasterVictory'] text-2xl text-white mt-2 mb-3">
                    {m.name}
                  </h3>
                  <p className="font-mono text-xs text-zinc-300 leading-relaxed mb-6">
                    {m.desc}
                  </p>

                  <div className="space-y-2 border-t border-zinc-800/80 pt-4 mb-6">
                    {m.features.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="font-mono text-xs text-zinc-400 flex items-center gap-2"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#00d2ff]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="/#contact"
                  className="w-full py-3 rounded-xl bg-[#0099ff]/20 hover:bg-[#0099ff] hover:text-black border border-[#0099ff]/50 font-mono text-xs font-bold text-center text-white transition-all"
                >
                  REQUEST INITIATION
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* FOOTER CTA & TELEMETRY SIGN-OFF                              */}
        {/* ============================================================ */}
        <footer className="rounded-3xl bg-gradient-to-r from-[#0066ff]/20 via-[#0099ff]/20 to-[#0066ff]/20 border border-[#0099ff]/40 p-8 sm:p-12 text-center backdrop-blur-xl">
          <h2 className="font-['MasterVictory'] text-3xl sm:text-5xl text-white mb-4">
            LET&apos;S BUILD YOUR MOVEMENT
          </h2>
          <p className="font-mono text-xs sm:text-sm text-zinc-300 max-w-xl mx-auto mb-8 leading-relaxed">
            Ready to scale your token, protect your community, and deploy high-conversion Web3 marketing? Connect directly with Kachi.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="px-6 py-3 rounded-xl bg-white text-black font-mono text-xs font-bold hover:bg-[#00d2ff] hover:text-black transition-colors"
            >
              EXPLORE MAIN PORTFOLIO
            </Link>
            <a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#040814] border border-[#0099ff]/60 text-[#38bdf8] font-mono text-xs font-bold hover:bg-[#0099ff]/20 transition-colors inline-flex items-center gap-2"
            >
              <span>DIRECT TELEGRAM</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </footer>
      </div>
    </main>
  )
}
