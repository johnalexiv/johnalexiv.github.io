import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* ─────────────────────────────────────────
   Card 1 — Diagnostic Shuffler
   Value prop: Agentic AI & NLP systems
───────────────────────────────────────── */
function DiagnosticShuffler() {
  const labels = ['Intent Classification', 'Entity Extraction', 'Conversational AI']
  const [items, setItems] = useState([...labels])

  useEffect(() => {
    const id = setInterval(() => {
      setItems((prev) => {
        const next = [...prev]
        next.unshift(next.pop())
        return next
      })
    }, 3000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="bg-[#FAF8F5] rounded-[2rem] border border-[#C9A84C]/15 p-8 shadow-2xl shadow-black/50 flex flex-col gap-5">
      <div className="flex items-start justify-between">
        <div>
          <span className="font-mono text-[10px] text-[#C9A84C] tracking-widest uppercase">01 — Systems</span>
          <h3 className="font-sans font-black text-[#0D0D12] text-xl mt-1 tracking-tight">Agentic AI & NLP</h3>
        </div>
        <div className="w-8 h-8 rounded-full bg-[#C9A84C]/15 flex items-center justify-center">
          <span className="text-[#C9A84C] text-xs font-mono">↻</span>
        </div>
      </div>

      <p className="font-sans text-[#2A2A35]/60 text-sm leading-relaxed">
        Expert systems and language models that understand user intent at scale — shipped to production.
      </p>

      {/* Shuffler stack */}
      <div className="relative" style={{ height: '7.5rem' }}>
        {items.map((label, i) => (
          <div
            key={label}
            className="spring-card absolute left-0 right-0 bg-white border border-[#0D0D12]/08 rounded-2xl px-5 py-3.5 flex items-center justify-between shadow-sm"
            style={{
              top: `${i * 20}px`,
              zIndex: items.length - i,
              opacity: Math.max(0, 1 - i * 0.28),
              transform: `scale(${1 - i * 0.04})`,
              transformOrigin: 'top center',
            }}
          >
            <span className="font-sans font-semibold text-[#0D0D12] text-sm">{label}</span>
            <span
              className={`w-2 h-2 rounded-full flex-shrink-0 ${
                i === 0 ? 'bg-[#C9A84C]' : 'bg-[#0D0D12]/15'
              }`}
            />
          </div>
        ))}
      </div>

      <div className="font-mono text-[10px] text-[#2A2A35]/40 tracking-widest mt-1">
        Amazon · 94.93% entity extraction accuracy
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────
   Card 2 — Telemetry Typewriter
   Value prop: ML ranking & product discovery
───────────────────────────────────────── */
const FEED_MESSAGES = [
  '> ML ranking deployed → 70% of search users',
  '> CTR delta: +1.03%',
  '> Annualized sales lift: ~$30M',
  '> Query understanding: multi-region active',
  '> Autofilter: brand · gender · product_type',
  '> Image embeddings: full catalog indexed',
  '> Shoe size model: 25% PDP coverage',
  '> Return rate reduction: 10.09%',
]

function TelemetryTypewriter() {
  const [lines, setLines] = useState([])
  const [lineIdx, setLineIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [current, setCurrent] = useState('')

  useEffect(() => {
    if (lineIdx >= FEED_MESSAGES.length) {
      const t = setTimeout(() => {
        setLines([])
        setLineIdx(0)
        setCharIdx(0)
        setCurrent('')
      }, 2500)
      return () => clearTimeout(t)
    }
    if (charIdx < FEED_MESSAGES[lineIdx].length) {
      const t = setTimeout(() => {
        setCurrent((p) => p + FEED_MESSAGES[lineIdx][charIdx])
        setCharIdx((p) => p + 1)
      }, 38)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => {
      setLines((p) => [...p, FEED_MESSAGES[lineIdx]])
      setCurrent('')
      setCharIdx(0)
      setLineIdx((p) => p + 1)
    }, 350)
    return () => clearTimeout(t)
  }, [charIdx, lineIdx])

  const visible = lines.slice(-5)

  return (
    <div className="bg-[#0D0D12] rounded-[2rem] border border-[#C9A84C]/20 p-8 shadow-2xl shadow-black/50 flex flex-col gap-5">
      <div className="flex items-start justify-between">
        <div>
          <span className="font-mono text-[10px] text-[#C9A84C] tracking-widest uppercase">02 — Intelligence</span>
          <h3 className="font-sans font-black text-[#FAF8F5] text-xl mt-1 tracking-tight">Product Discovery</h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="pulse-dot w-2 h-2 rounded-full bg-[#C9A84C]" />
          <span className="font-mono text-[10px] text-[#C9A84C] tracking-widest">LIVE</span>
        </div>
      </div>

      <p className="font-sans text-[#FAF8F5]/45 text-sm leading-relaxed">
        ML ranking and NLP systems running in production across millions of daily queries.
      </p>

      <div className="bg-[#08080E] rounded-2xl p-5 font-mono text-xs leading-loose min-h-[130px] overflow-hidden border border-[#FAF8F5]/05">
        {visible.map((line, i) => (
          <div key={i} className="text-[#FAF8F5]/35 mb-0.5 truncate">
            {line}
          </div>
        ))}
        <div className="text-[#C9A84C]">
          {current}
          <span className="cursor-blink">█</span>
        </div>
      </div>

      <div className="font-mono text-[10px] text-[#FAF8F5]/25 tracking-widest">
        Amazon · Zappos · Production Systems
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────
   Card 3 — Cursor Protocol Scheduler
   Value prop: Revenue impact
───────────────────────────────────────── */
const DAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
const HIGHLIGHTS = [
  { day: 3, label: '+$30M annualized' },
  { day: 5, label: '+$25M projected' },
]

function CursorScheduler() {
  const [activeDays, setActiveDays] = useState([])
  const [cursorDay, setCursorDay] = useState(null)
  const [pressing, setPressing] = useState(false)
  const [showSave, setShowSave] = useState(false)
  const [pressSave, setPressSave] = useState(false)
  const [label, setLabel] = useState('')

  useEffect(() => {
    let alive = true
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

    const run = async () => {
      while (alive) {
        setActiveDays([])
        setShowSave(false)
        setCursorDay(null)
        setLabel('')
        await sleep(1000)

        for (const { day, label: lbl } of HIGHLIGHTS) {
          if (!alive) return
          setCursorDay(day)
          await sleep(600)
          if (!alive) return
          setPressing(true)
          await sleep(200)
          setPressing(false)
          setActiveDays((p) => [...p, day])
          setLabel(lbl)
          await sleep(800)
        }

        if (!alive) return
        setShowSave(true)
        setCursorDay(-1) // on save button
        await sleep(500)
        setPressSave(true)
        await sleep(250)
        setPressSave(false)
        await sleep(1200)
        setCursorDay(null)
        setShowSave(false)
        await sleep(1800)
      }
    }

    run()
    return () => {
      alive = false
    }
  }, [])

  return (
    <div className="bg-[#FAF8F5] rounded-[2rem] border border-[#C9A84C]/15 p-8 shadow-2xl shadow-black/50 flex flex-col gap-5">
      <div className="flex items-start justify-between">
        <div>
          <span className="font-mono text-[10px] text-[#C9A84C] tracking-widest uppercase">03 — Outcomes</span>
          <h3 className="font-sans font-black text-[#0D0D12] text-xl mt-1 tracking-tight">Revenue Impact</h3>
        </div>
        <div className="w-8 h-8 rounded-full bg-[#C9A84C]/15 flex items-center justify-center">
          <span className="text-[#C9A84C] text-xs">$</span>
        </div>
      </div>

      <p className="font-sans text-[#2A2A35]/60 text-sm leading-relaxed">
        Every shipped model tied to a measurable business outcome — in the tens of millions.
      </p>

      <div className="bg-white rounded-2xl p-5 border border-[#0D0D12]/07">
        <div className="font-mono text-[10px] text-[#2A2A35]/40 tracking-widest uppercase mb-3">
          Impact Sprint — Q1
        </div>
        <div className="grid grid-cols-7 gap-1.5">
          {DAYS.map((day, i) => {
            const isActive = activeDays.includes(i)
            const isCursor = cursorDay === i
            const isPress = pressing && isCursor
            return (
              <div key={i} className="flex flex-col items-center gap-1">
                <span className="font-mono text-[10px] text-[#2A2A35]/35">{day}</span>
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 ${
                    isActive
                      ? 'bg-[#C9A84C] shadow-md shadow-[#C9A84C]/30'
                      : isCursor
                      ? 'bg-[#0D0D12]/10 ring-2 ring-[#C9A84C]/60'
                      : 'bg-[#0D0D12]/04'
                  } ${isPress ? 'scale-90' : ''}`}
                >
                  <span
                    className={`font-mono text-xs font-bold ${isActive ? 'text-[#0D0D12]' : 'text-[#2A2A35]/35'}`}
                  >
                    {i + 1}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-4 flex items-center justify-between min-h-[28px]">
          <span className="font-mono text-xs text-[#2A2A35]/50">
            {label || 'Calculating impact…'}
          </span>
          {showSave && (
            <button
              className={`font-mono text-xs px-4 py-1.5 rounded-xl bg-[#C9A84C] text-[#0D0D12] font-bold transition-transform ${
                pressSave ? 'scale-90' : 'scale-100'
              }`}
            >
              Deploy ✓
            </button>
          )}
        </div>
      </div>

      <div className="font-mono text-[10px] text-[#2A2A35]/40 tracking-widest">
        $65M+ cumulative impact · 2018–present
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────
   Section wrapper
───────────────────────────────────────── */
export default function Features() {
  const sectionRef = useRef(null)
  const headRef = useRef(null)
  const gridRef = useRef(null)

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
      gsap.fromTo(
        Array.from(gridRef.current.children),
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: { trigger: gridRef.current, start: 'top 80%' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="experience" className="bg-[#0D0D12] py-32 px-8 md:px-20">
      <div ref={headRef} className="mb-16">
        <p className="font-mono text-[#C9A84C] text-xs tracking-[0.35em] uppercase mb-4">
          What I Build
        </p>
        <h2 className="font-sans font-black text-4xl md:text-6xl text-[#FAF8F5] tracking-tight leading-[0.9]">
          Functional
          <br />
          <span className="font-serif italic text-[#C9A84C]">Artifacts</span>
        </h2>
      </div>

      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DiagnosticShuffler />
        <TelemetryTypewriter />
        <CursorScheduler />
      </div>
    </section>
  )
}
