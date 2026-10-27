import { profile } from '@/lib/data'

const links = [
  { label: 'Email', text: profile.email, href: `mailto:${profile.email}` },
  { label: 'LinkedIn', text: 'linkedin.com/in/wahyunan-andika', href: profile.linkedin },
  { label: 'GitHub', text: 'github.com/wahyunanandika', href: profile.github },
  { label: 'Hugging Face', text: 'huggingface.co/wahyunan', href: profile.huggingface },
]

export default function Contact() {
  return (
    <footer id="contact" className="border-t border-rule">
      <div className="max-w-page mx-auto px-6 py-20 grid md:grid-cols-12 gap-x-8 gap-y-8">
        <div className="md:col-span-7">
          <h2 className="wide font-light text-[clamp(2rem,5vw,3.25rem)] leading-tight">
            Open to geospatial, 3D vision and computer vision roles.
          </h2>
          <p className="text-graphite mt-4 max-w-[34rem]">
            I am also glad to talk about research collaboration. Email is the fastest way to reach me.
          </p>
        </div>
        <dl className="md:col-span-5 md:pt-3 space-y-3">
          {links.map((l) => (
            <div key={l.label} className="grid grid-cols-[7.5rem_1fr] gap-3">
              <dt className="text-sm text-graphite pt-0.5">{l.label}</dt>
              <dd>
                <a href={l.href} target={l.href.startsWith('mailto:') ? undefined : '_blank'} rel="noopener noreferrer"
                  className="text-link underline underline-offset-4 decoration-1 break-all">
                  {l.text}
                </a>
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <p className="max-w-page mx-auto px-6 pb-10 text-sm text-graphite">© {new Date().getFullYear()} Wahyunan Andika</p>
    </footer>
  )
}
