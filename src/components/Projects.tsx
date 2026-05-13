import { projects } from '@/lib/data'

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-4xl mx-auto border-t border-[#1e2433]">
      <div className="flex justify-between items-baseline mb-12">
        {/* judul section */}
        <p className="text-[11px] text-[#475569] tracking-[0.25em] uppercase font-mono">
          Projects
        </p>
        {/* link ke huggingface */}
        <a
          href="https://huggingface.co/wahyunan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] text-[#4a7fa5] font-mono tracking-wider hover:underline"
        >
          View all on HuggingFace ↗
        </a>
      </div>

      {/* grid 2 kolom untuk project cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* setiap project jadi satu card yang bisa diklik */}
        {projects.map((proj, i) => ( 
            <a
            key={i}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-[#131720] border border-[#1e2433] rounded-lg p-5 hover:border-[#2a3548] transition-all duration-200"
          >
            {/* kategori project */}
            <p className="text-[10px] text-[#4a7fa5] font-mono tracking-[0.15em] uppercase mb-2">
              {proj.type}
            </p>

            {/* nama project */}
            <h3 className="text-sm text-[#cbd5e1] font-mono mb-2">
              {proj.name} <span className="text-[#2a3548] text-xs">↗</span>
            </h3>

            {/* deskripsi */}
            <p className="text-xs text-[#64748b] leading-relaxed mb-4">
              {proj.desc}
            </p>

            {/* looping tags */}
            <div className="flex flex-wrap gap-1.5">
              {proj.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] px-2 py-0.5 border border-[#2a3548] rounded text-[#475569] font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}