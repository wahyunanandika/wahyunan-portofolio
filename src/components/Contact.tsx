import { profile } from '@/lib/data'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto border-t border-[#1e2433]">
      <p className="text-[11px] text-[#475569] tracking-[0.25em] uppercase mb-10 font-mono">
        Contact
      </p>

      <div className="max-w-lg">
        {/* kalimat pembuka */}
        <p className="text-2xl text-[#94a3b8] mb-4 leading-relaxed">
          Interested in collaboration or research opportunities?
        </p>
        <p className="text-sm text-[#64748b] leading-relaxed mb-10">
          Terbuka untuk diskusi riset, kolaborasi project
        </p>

        <div className="space-y-4">
          {/* link ke huggingface */}
          <a
          
            href={profile.huggingface}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            <span className="text-[10px] text-[#475569] font-mono tracking-widest w-16">HF</span>
            <span className="text-sm text-[#4a7fa5] font-mono group-hover:underline">
              huggingface.co/wahyunan ↗
            </span>
          </a>

          {/* link ke github */}
          <a
          
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            <span className="text-[10px] text-[#475569] font-mono tracking-widest w-16">GitHub</span>
            <span className="text-sm text-[#4a7fa5] font-mono group-hover:underline">
              github.com/wahyunanandika ↗
            </span>
          </a>
        </div>
      </div>

      {/* footer */}
      <div className="mt-20 pt-8 border-t border-[#1e2433]">
        <p className="text-[10px] text-[#2a3548] font-mono tracking-widest">
          © 2025 Wahyunan Andika
        </p>
      </div>
    </section>
  )
}