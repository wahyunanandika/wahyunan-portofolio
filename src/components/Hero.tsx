import { profile } from '@/lib/data'

export default function Hero() {
  return (
    <header id="top" className="max-w-page mx-auto px-6 pt-16 md:pt-24 pb-24">
      <h1 className="wide font-light leading-[0.95] tracking-[-0.01em] text-[clamp(2.75rem,8vw,6rem)]">
        Wahyunan
        <br />
        Andika
      </h1>
      <p className="text-graphite mt-5 text-lg">{profile.title}, Bandung</p>

      <div className="mt-10 max-w-[38rem]">
        <p className="semiwide text-[1.5rem] md:text-[1.75rem] leading-snug font-medium">{profile.headline}</p>
        <p className="mt-6 text-graphite">{profile.summary}</p>
        <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8 text-[15px]">
          <a href="#work" className="text-link underline underline-offset-4 decoration-1">See projects</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-link underline underline-offset-4 decoration-1">GitHub</a>
          <a href={profile.huggingface} target="_blank" rel="noopener noreferrer" className="text-link underline underline-offset-4 decoration-1">Hugging Face</a>
          <a href={`mailto:${profile.email}`} className="text-link underline underline-offset-4 decoration-1">Email me</a>
        </div>
      </div>

    </header>
  )
}
