'use client'
// useState untuk nyimpen kondisi, useEffect untuk dengerin event browser
import { useState, useEffect} from 'react'
// array berisi nama-nama menu navigasi
const links = ['About', 'Experience', 'Projects', 'Skills', 'Contact']

export default function Navbar() {
    // scrolled = kondisi apakah halaman udah di-scroll atau belum (true/false)
    // setScrolled = fungsi untuk mengubah nilai scrolled
    const [scrolled, setScrolled] = useState(false)

    useEffect(()=>{
        // fungsi yang jalan setiap kali user scroll
        // kalau posisi scroll lebih dari 40px, scrolled jadi true
        const onScroll = () => setScrolled(window.scrollY > 40)
        // pasang pendengar scroll waktu component muncul di halaman
        window.addEventListener('scroll', onScroll)
        // lepas pendengar waktu component hilang, biar ga bocor memori
        return () => window.removeEventListener('scroll', onScroll)
    },[])

    return (
        // kalau scrolled true, tambah background gelap dan border bawah
        // kalau false, navbar transparan
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0e1117]/90 backdrop-blur-sm border-b border-[#1e2433]' : ''
    }`}>
            <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* logo inisial di kiri */}
                <span className="text-xs text-[#475569] tracking-[0.2em] uppercase font-mono">
                    WA
                </span>
                {/* looping array links, setiap item jadi satu link navigasi */}
                <div className="flex gap-6">
                    {links.map((l) => (
                        <a
                        key={l}
                        href={`#${l.toLowerCase()}`} 
                        className="text-xs text-[#475569] hover:text-[#94a3b8] transition-colors tracking-wider"
                        >
                        {l}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    )
}