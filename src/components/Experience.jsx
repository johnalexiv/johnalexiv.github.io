import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const jobs = [
  {
    company: 'Amazon',
    role: 'Data Scientist II',
    period: 'Oct 2022 — Present',
    location: 'Las Vegas, NV',
    highlights: [
      'Architected Agentic AI runner expert system for natural language shoe discovery — projected $18M–$25M annualized sales.',
      'Built ML ranking algorithm improving product discovery for 70% of search users: +2.3% sales (~$30M), +1.03% CTR.',
      'Developed computer vision fabric swatch model enabling dynamic product grouping: +25% impressions, +2% gross sales.',
      'Shipped NER system extracting entities across 9 attributes and 1200+ values from queries at 94.93% accuracy.',
    ],
  },
  {
    company: 'Zappos',
    role: 'Data Scientist',
    period: 'Feb 2019 — Oct 2022',
    location: 'Las Vegas, NV',
    highlights: [
      'Architected E2E training and inference sizing service delivering personalized size recommendations for 25% of PDP views — 10.09% reduction in sizing returns.',
      'Developed scalable multi-region query understanding platform enabling auto-filtering by brand, gender, product type — +0.8% sales (~$10.6M annualized).',
      'Built deep learning image embedding model for visual search and style recommendations across full product catalog.',
    ],
  },
  {
    company: 'Zappos',
    role: 'Junior Data Scientist',
    period: 'Jul 2018 — Feb 2019',
    location: 'Las Vegas, NV',
    highlights: [
      'ML algorithm suggesting high-performing Google SEM keywords — +1.2% annual sales uplift.',
      'Custom neural networks backfilling product taxonomy at 99% accuracy, resolving data sparsity for downstream models.',
    ],
  },
]

export default function Experience() {
  const sectionRef = useRef(null)
  const itemsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((el, i) => {
        if (!el) return
        gsap.fromTo(
          el,
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            delay: i * 0.12,
            scrollTrigger: { trigger: el, start: 'top 85%' },
          }
        )
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-[#0D0D12] py-24 px-8 md:px-20 border-t border-[#FAF8F5]/05">
      <div className="mb-14">
        <p className="font-mono text-[#C9A84C] text-xs tracking-[0.35em] uppercase mb-4">Career</p>
        <h2 className="font-sans font-black text-4xl md:text-6xl text-[#FAF8F5] tracking-tight leading-[0.9]">
          Where I've
          <br />
          <span className="font-serif italic text-[#C9A84C]">Shipped</span>
        </h2>
      </div>

      <div className="space-y-0">
        {jobs.map((job, i) => (
          <div
            key={`${job.company}-${job.role}`}
            ref={(el) => (itemsRef.current[i] = el)}
            className="py-10 border-b border-[#FAF8F5]/08 grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8"
          >
            {/* Left: meta */}
            <div>
              <div className="font-sans font-black text-xl text-[#FAF8F5] tracking-tight">{job.company}</div>
              <div className="font-sans font-medium text-[#C9A84C] text-sm mt-1">{job.role}</div>
              <div className="font-mono text-xs text-[#FAF8F5]/35 mt-3 tracking-wide">{job.period}</div>
              <div className="font-mono text-xs text-[#FAF8F5]/25 mt-1 tracking-wide">{job.location}</div>
            </div>

            {/* Right: highlights */}
            <ul className="space-y-3 pt-1">
              {job.highlights.map((h, j) => (
                <li key={j} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#C9A84C] flex-shrink-0" />
                  <span className="font-sans text-[#FAF8F5]/65 text-sm leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Education */}
      <div className="mt-10 pt-10 border-t border-[#FAF8F5]/05 grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8">
        <div>
          <div className="font-sans font-black text-xl text-[#FAF8F5] tracking-tight">UNLV</div>
          <div className="font-sans font-medium text-[#C9A84C] text-sm mt-1">B.S., Computer Science</div>
          <div className="font-mono text-xs text-[#FAF8F5]/35 mt-3 tracking-wide">2013 — 2018</div>
        </div>
        <div className="pt-1">
          <p className="font-sans text-[#FAF8F5]/45 text-sm leading-relaxed">
            University of Nevada, Las Vegas. Foundation in algorithms, data structures, software engineering, and machine learning fundamentals.
          </p>
        </div>
      </div>
    </section>
  )
}
