import { experience, education } from '@/lib/data'
import Section from './Section'

type Row = { year: string; title: string; sub: string; desc: string; points: string[] }

function Rows({ rows }: { rows: Row[] }) {
  return (
    <ol className="space-y-10">
      {rows.map((r) => (
        <li key={r.title + r.year} className="grid md:grid-cols-12 gap-x-8 gap-y-1">
          <p className="md:col-span-3 text-sm text-graphite">{r.year}</p>
          <div className="md:col-span-9 max-w-[44rem]">
            <h3 className="font-semibold">{r.title}</h3>
            <p className="text-sm text-graphite">{r.sub}</p>
            {r.desc && <p className="mt-2 text-[15px]">{r.desc}</p>}
            {r.points.length > 0 && (
              <ul className="mt-2 space-y-1.5 list-disc pl-5 marker:text-rule text-[15px] text-graphite">
                {r.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ol>
  )
}

export default function Experience() {
  return (
    <>
      <Section id="experience" title="Experience">
        <Rows rows={experience.map((e) => ({ year: e.year, title: e.role, sub: `${e.company}, ${e.place}`, desc: e.desc, points: e.points }))} />
      </Section>
      <Section id="education" title="Education and training">
        <Rows rows={education.map((e) => ({ year: e.year, title: e.title, sub: e.place, desc: e.detail, points: [] }))} />
      </Section>
    </>
  )
}
