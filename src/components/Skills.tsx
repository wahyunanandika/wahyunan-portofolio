import { skills } from '@/lib/data'
import Section from './Section'

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-8 md:ml-[25%] max-w-[48rem]">
        {skills.map((s) => (
          <div key={s.cat}>
            <dt className="font-semibold mb-2">{s.cat}</dt>
            {s.items.map((it) => (
              <dd key={it} className="text-[15px] text-graphite">{it}</dd>
            ))}
          </div>
        ))}
      </dl>
    </Section>
  )
}
