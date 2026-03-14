import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* ── SVG 1: Rotating concentric geometry ── */
function GeometricRotator() {
  return (
    <svg width="180" height="180" viewBox="0 0 200 200" className="opacity-25 flex-shrink-0">
      <g className="rotate-anim">
        <circle cx="100" cy="100" r="88" fill="none" stroke="#C9A84C" strokeWidth="1" strokeDasharray="6 5" />
        <circle cx="100" cy="100" r="68" fill="none" stroke="#FAF8F5" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="48" fill="none" stroke="#C9A84C" strokeWidth="1" strokeDasharray="3 4" />
        <circle cx="100" cy="100" r="28" fill="none" stroke="#FAF8F5" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="8" fill="#C9A84C" fillOpacity="0.4" />
        <line x1="12" y1="100" x2="188" y2="100" stroke="#C9A84C" strokeWidth="0.5" opacity="0.4" />
        <line x1="100" y1="12" x2="100" y2="188" stroke="#C9A84C" strokeWidth="0.5" opacity="0.4" />
      </g>
      <g className="rotate-anim-rev">
        <polygon
          points="100,30 130,80 170,80 140,110 155,160 100,130 45,160 60,110 30,80 70,80"
          fill="none"
          stroke="#FAF8F5"
          strokeWidth="0.4"
          opacity="0.3"
        />
      </g>
    </svg>
  )
}

/* ── SVG 2: Scanning laser across dot grid ── */
function ScanningGrid() {
  return (
    <div className="relative opacity-25 flex-shrink-0" style={{ width: 180, height: 180, overflow: 'hidden' }}>
      <svg width="180" height="180" viewBox="0 0 180 180">
        {Array.from({ length: 9 }).map((_, row) =>
          Array.from({ length: 9 }).map((_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={10 + col * 20}
              cy={10 + row * 20}
              r="2"
              fill="#FAF8F5"
              opacity="0.6"
            />
          ))
        )}
      </svg>
      <div
        className="scan-anim absolute top-0 bottom-0 w-10"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.7), transparent)',
        }}
      />
    </div>
  )
}

/* ── SVG 3: EKG waveform ── */
function EKGWaveform() {
  const d =
    'M0,90 L18,90 L28,55 L38,125 L48,72 L58,108 L68,90 L88,90 L98,35 L108,145 L118,70 L128,110 L138,90 L158,90 L168,55 L178,125 L188,72 L200,90'
  return (
    <svg width="180" height="180" viewBox="0 0 200 180" className="opacity-25 flex-shrink-0">
      <path
        d={d}
        fill="none"
        stroke="#C9A84C"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="wave-anim"
      />
      <path d={d} fill="none" stroke="#FAF8F5" strokeWidth="0.5" opacity="0.3" />
    </svg>
  )
}

const STEPS = [
  {
    number: '01',
    title: 'Architect the System',
    description:
      'Design scalable ML pipelines and AI systems grounded in real production constraints — not academic ideals.',
    svg: <GeometricRotator />,
    bg: '#0D0D12',
    border: 'border-[#FAF8F5]/08',
  },
  {
    number: '02',
    title: 'Engineer the Model',
    description:
      'Build and train production-grade models: NLP, computer vision, ranking, recommendation, and agentic systems.',
    svg: <ScanningGrid />,
    bg: '#2A2A35',
    border: 'border-[#FAF8F5]/10',
  },
  {
    number: '03',
    title: 'Deploy & Measure',
    description:
      'Ship to AWS infrastructure via SageMaker, Lambda, and API Gateway. Instrument everything. Move the metric.',
    svg: <EKGWaveform />,
    bg: '#18181F',
    border: 'border-[#C9A84C]/15',
  },
]

export default function Protocol() {
  const sectionRef = useRef(null)
  const headRef = useRef(null)
  const cardRefs = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: headRef.current, start: 'top 85%' },
        }
      )

      cardRefs.current.forEach((card, i) => {
        if (!card) return

        // Entrance animation
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 88%' },
          }
        )

        // Stacking: when next card enters, scale this one down
        if (i < STEPS.length - 1) {
          ScrollTrigger.create({
            trigger: cardRefs.current[i + 1],
            start: 'top 75%',
            onEnter: () =>
              gsap.to(card, {
                scale: 0.93,
                filter: 'blur(3px)',
                opacity: 0.45,
                duration: 0.55,
                ease: 'power2.inOut',
              }),
            onLeaveBack: () =>
              gsap.to(card, {
                scale: 1,
                filter: 'blur(0px)',
                opacity: 1,
                duration: 0.55,
                ease: 'power2.inOut',
              }),
          })
        }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-32 px-8 md:px-20 bg-[#0D0D12]">
      <div ref={headRef} className="mb-16">
        <p className="font-mono text-[#C9A84C] text-xs tracking-[0.35em] uppercase mb-4">The Process</p>
        <h2 className="font-sans font-black text-4xl md:text-6xl text-[#FAF8F5] tracking-tight leading-[0.9]">
          How I
          <br />
          <span className="font-serif italic text-[#C9A84C]">Operate</span>
        </h2>
      </div>

      <div className="space-y-5">
        {STEPS.map((step, i) => (
          <div
            key={step.number}
            ref={(el) => (cardRefs.current[i] = el)}
            className={`rounded-[3rem] border ${step.border} p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-10`}
            style={{ backgroundColor: step.bg }}
          >
            <div className="flex-1 min-w-0">
              <span className="font-mono text-[#C9A84C] text-sm tracking-[0.2em]">{step.number}</span>
              <h3 className="font-sans font-black text-3xl md:text-5xl text-[#FAF8F5] mt-3 mb-5 tracking-tight leading-tight">
                {step.title}
              </h3>
              <p className="font-sans text-[#FAF8F5]/55 text-base md:text-lg max-w-lg leading-relaxed">
                {step.description}
              </p>
            </div>
            <div className="flex-shrink-0">{step.svg}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
