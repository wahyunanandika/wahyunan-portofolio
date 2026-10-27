import { publications } from '@/lib/data'
import Section from './Section'

function Authors({ text }: { text: string }) {
  const parts = text.split('Andika, W.')
  return (
    <>
      {parts.map((p, i) => (
        <span key={i}>
          {p}
          {i < parts.length - 1 && <strong className="font-semibold text-ink">Andika, W.</strong>}
        </span>
      ))}
    </>
  )
}

export default function Publications() {
  return (
    <Section id="papers" title="Papers">
      <ol className="space-y-10">
        {publications.map((pub) => (
          <li key={pub.doi} className="grid md:grid-cols-12 gap-x-8 gap-y-2">
            <p className="md:col-span-3 text-sm text-graphite">{pub.year}, ISPRS Archives</p>
            <div className="md:col-span-9 max-w-[44rem]">
              <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer"
                className="semiwide text-lg font-medium leading-snug hover:text-link">
                {pub.title}
              </a>
              <p className="text-sm text-graphite mt-2"><Authors text={pub.authors} /></p>
              <p className="text-sm text-graphite mt-1">
                {pub.venue}. <span className="font-mono text-xs">doi:{pub.doi}</span>
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
