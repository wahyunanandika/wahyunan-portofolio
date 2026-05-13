import { experience } from '@/lib/data'

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 max-w-4xl mx-auto border-t border-[#1e2433]">
      <p className="text-[11px] text-[#475569] tracking-[0.25em] uppercase mb-12 font-mono">
        Experience
      </p>

      <div className="relative">
        {/* garis vertikal di kiri */}
        <div className="absolute left-0 top-2 bottom-2 w-px bg-[#1e2433]" />

        <div className="space-y-10 pl-8">
          {experience.map((exp, i) => (
            <div key={i} className="relative group">
              {/* titik di garis timeline, biru kalau active */}
              <div className={`absolute -left-8 top-1.5 w-[5px] h-[5px] rounded-full border ${
                exp.active
                  ? 'border-[#4a7fa5] bg-[#4a7fa5]'
                  : 'border-[#2a3548] bg-[#0e1117]'
              }`} />

              {/* tahun */}
              <p className="text-[10px] text-[#475569] font-mono tracking-widest mb-1">
                {exp.year}
              </p>

              {/* nama jabatan */}
              <h3 className="text-sm text-[#cbd5e1] font-mono mb-0.5">
                {exp.role}
              </h3>

              {/* lokasi */}
              <p className="text-xs text-[#475569] mb-3">
                {exp.place}
              </p>

              {/* deskripsi */}
              <p className="text-sm text-[#64748b] leading-relaxed">
                {exp.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}