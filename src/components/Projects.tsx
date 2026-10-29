import { featuredProjects, otherWork, models, earlierProjects, profile, SmallProject } from '@/lib/data'
import Section from './Section'

function CompactList({ items }: { items: SmallProject[] }) {
  return (
    <ul className="border-t border-rule">
      {items.map((p) => (
        <li key={p.name} className="border-b border-rule">
          <a
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid md:grid-cols-12 gap-x-8 gap-y-1 py-4"
          >
            <span className="md:col-span-4 font-semibold group-hover:text-link">{p.name}</span>
            <span className="md:col-span-5 text-sm text-graphite">{p.desc}</span>
            <span className="md:col-span-3 text-sm text-graphite md:text-right">{p.tags.join(', ')}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default function Projects() {
  return (
    <>
      <Section
        id="work"
        title="Projects"
        intro="Recent work in 3D vision, computer vision and GIS, with the test results from each."
      >
        <div className="space-y-20">
          {featuredProjects.map((p) => (
            <article key={p.id} id={p.id} className="grid md:grid-cols-12 gap-x-8 gap-y-6">
              {/* metadata column */}
              <div className="md:col-span-3 text-sm text-graphite space-y-1">
                <p>{p.year}</p>
                <p>{p.place}</p>
                <div className="pt-3 flex flex-wrap gap-x-4 gap-y-1">
                  {p.links.map((l) => (
                    <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer"
                      className="text-link underline underline-offset-4 decoration-1">
                      {l.label}
                    </a>
                  ))}
                  {p.status && <span>{p.status}</span>}
                </div>
              </div>

              {/* content column */}
              <div className="md:col-span-9 max-w-[44rem]">
                <h3 className="semiwide text-[1.375rem] font-semibold leading-snug">{p.name}</h3>
                <p className="mt-3">{p.desc}</p>

                <ul className="mt-5 space-y-2 list-disc pl-5 marker:text-rule text-[15px] text-graphite">
                  {p.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>

                {p.results && (
                  <table className="mt-6 w-full text-sm">
                    <tbody>
                      {p.results.map((r) => (
                        <tr key={r.label} className="border-t border-rule last:border-b">
                          <th scope="row" className="text-left font-medium py-2 pr-4 align-top">{r.label}</th>
                          <td className="py-2 font-mono text-[13px] text-graphite text-right">{r.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
                {p.note && <p className="mt-3 text-[13px] text-graphite">{p.note}</p>}

                <p className="mt-5 text-sm text-graphite">Built with {p.tags.join(', ')}.</p>
              </div>
            </article>
          ))}
        </div>

        <div className="grid md:grid-cols-12 gap-x-8 mt-24">
          <h3 className="md:col-span-3 font-semibold mb-4">Other project work</h3>
          <ul className="md:col-span-9 max-w-[44rem] space-y-3 list-disc pl-5 marker:text-rule text-[15px] text-graphite">
            {otherWork.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section
        id="models"
        title="Models and demos"
        intro="A selection of models published on Hugging Face. Spaces sleep when idle and take a minute to wake up."
      >
        <CompactList items={models} />
        <a href={profile.huggingface} target="_blank" rel="noopener noreferrer"
          className="inline-block mt-6 text-link underline underline-offset-4 decoration-1">
          More on Hugging Face
        </a>
      </Section>

      <Section id="earlier" title="Earlier projects" intro="Data science and web projects from the Pacmann and Hacktiv8 programs.">
        <CompactList items={earlierProjects} />
      </Section>
    </>
  )
}
