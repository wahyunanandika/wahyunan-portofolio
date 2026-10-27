const links: { label: string; href: string; wide?: boolean }[] = [
  { label: 'Work', href: '#work' },
  { label: 'Papers', href: '#papers' },
  { label: 'Experience', href: '#experience', wide: true },
  { label: 'Skills', href: '#skills', wide: true },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-paper/95 backdrop-blur border-b border-rule">
      <div className="max-w-page mx-auto px-6 h-14 flex items-center justify-between gap-6">
        <a href="#top" className="semiwide font-semibold text-[15px] whitespace-nowrap">
          Wahyunan Andika
        </a>
        <div className="flex gap-5 text-sm text-graphite">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={`hover:text-ink whitespace-nowrap py-2 ${l.wide ? 'hidden sm:block' : ''}`}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
