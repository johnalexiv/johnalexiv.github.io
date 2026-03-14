export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#08080E] rounded-t-[4rem] px-8 md:px-20 pt-20 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="font-sans font-black text-3xl text-[#FAF8F5] tracking-tight mb-2">
            John Alexander
          </div>
          <div className="font-mono text-[#C9A84C] text-xs tracking-[0.2em] uppercase mb-5">
            Senior Data Scientist · MLOps · E2E AI/ML
          </div>
          <p className="font-sans text-[#FAF8F5]/35 text-sm leading-relaxed max-w-xs">
            Building scalable AI/ML systems that drive measurable business outcomes.
            Las Vegas, NV.
          </p>
        </div>

        {/* Navigate */}
        <div>
          <div className="font-mono text-[10px] text-[#FAF8F5]/25 tracking-[0.3em] uppercase mb-5">
            Navigate
          </div>
          <div className="flex flex-col gap-3">
            {['About', 'Experience', 'Skills', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="link-lift font-sans text-sm text-[#FAF8F5]/50 hover:text-[#FAF8F5] transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <div className="font-mono text-[10px] text-[#FAF8F5]/25 tracking-[0.3em] uppercase mb-5">
            Contact
          </div>
          <div className="flex flex-col gap-3">
            <a
              href="mailto:johnalexiv@gmail.com"
              className="link-lift font-sans text-sm text-[#FAF8F5]/50 hover:text-[#FAF8F5] transition-colors break-all"
            >
              johnalexiv@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/johnalexiv"
              target="_blank"
              rel="noopener noreferrer"
              className="link-lift font-sans text-sm text-[#FAF8F5]/50 hover:text-[#FAF8F5] transition-colors"
            >
              linkedin.com/in/johnalexiv
            </a>
            <span className="font-sans text-sm text-[#FAF8F5]/30">Las Vegas, NV</span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#FAF8F5]/08 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <span className="pulse-dot w-2 h-2 rounded-full bg-emerald-400" />
          <span className="font-mono text-xs text-[#FAF8F5]/35 tracking-widest">
            SYSTEM OPERATIONAL
          </span>
        </div>
        <div className="font-mono text-xs text-[#FAF8F5]/20">
          © {year} John Alexander · All rights reserved
        </div>
      </div>
    </footer>
  )
}
