// component hero, section pertama yang keliatan pengunjung
export default function Hero() {
    return (
        // id="about" supaya link #about di navbar bisa scroll kesini
        // min-h-screen supaya section ini setinggi layar
        <section id="about" className="min-h-screen flex flex-col justify-center pt-24 pb-16 px-6 max-w-4xl mx-auto">
            {/* label kecil di atas nama */}
            <p className="text-xs text-[#475569] tracking-[0.25em] uppercase mb-6 font-mono">
                Portfolio - Junior Researcher
            </p>
            {/* nama besar */}
            <h1 className="text-5xl font-light text-[#f1f5f9] leading-tight mb-3">
                Wahyunan
                <br/>
                {/* nama belakang warnanya lebih redup */}
                <span className="text-[#64748b]">
                    Andika
                </span>
            </h1>
            {/* subtitle jabatan */}
            <p className="text-sm text-[#475569] tracking-widest uppercase mt-4 mb-10 font-mono">
                Junior Researcher - Photogrammetry & 3D Vision

            </p>
            {/* deskripsi singkat perjalanan karir */}
            <p className="text-[#94a3b8] text-base leading-relaxed max-w-xl">

            </p>
            {/* looping array tags, setiap item jadi satu badge kecil */}
            <div className="flex flex-wrap gap-2 mt-8">
                {['Photogrammetry', '3D Vision', 'Remote Sensing', 'Python', 'AI / ML'].map((tag) =>(
                    <span
                    key={tag}
                    className="text-[11px] px-3 py-1 border border-[#2a3548] rounded-full text-[#64748b] font-mono"
                    >
                        {tag}
                    </span>

                ))}
            </div>
            {/* tiga tombol di bawah */}
            <div className="flex gap-4 mt-10">
                {/* tombol ke huggingface, target blank = buka tab baru */}
                <a
                href="https://huggingface.co/wahyunan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#4a7fa5] border border-[#4a7fa530] px-4 py-2 rounded hover:bg-[#4a7fa510] transition-colors tracking-wider"
                >
                    HuggingFace
                </a>
                {/* tombol scroll ke section github */}
                <a
                href="https://github.com/wahyunanandika"
                    className="text-xs text-[#64748b] border border-[#2a3548] px-4 py-2 rounded hover:bg-[#131720] transition-colors tracking-wider"
                    >
                        Github
                </a>
                {/* tombol scroll ke section contact */}
                <a
                    href="#contact"
                    className="text-xs text-[#64748b] border border-[#2a3548] px-4 py-2 rounded hover:bg-[#131720] transition-colors tracking-wider"
                    >
                        Contact
                </a>
            </div>
            </section>
    )
}