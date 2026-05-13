import { skills } from '@/lib/data'

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-4xl mx-auto border-t border-[#1e2433]">
      <p className="text-[11px] text-[#475569] tracking-[0.25em] uppercase mb-12 font-mono">
        Skills
      </p>

      {/* grid 2 kolom untuk skill cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((s, i) => (
          <div
            key={i}
            className="bg-[#131720] border border-[#1e2433] rounded-lg p-5"
          >
            {/* nama kategori */}
            <p className="text-[10px] text-[#4a7fa5] font-mono tracking-[0.15em] uppercase mb-4">
              {s.cat}
            </p>

            {/* looping items skill */}
            <div className="space-y-2">
              {s.items.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  {/* titik kecil di depan setiap item */}
                  <div className="w-1 h-1 rounded-full bg-[#2a3548] flex-shrink-0" />
                  <span className="text-xs text-[#64748b] font-mono">{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}