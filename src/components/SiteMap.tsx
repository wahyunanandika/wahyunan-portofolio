import { sites } from '@/lib/data'

// Equirectangular index map of project locations (western Indonesia).
const W = 560
const LON0 = 105, LON1 = 118.5
const LAT0 = 0.5, LAT1 = -8.5
const H = Math.round((W * (LAT0 - LAT1)) / (LON1 - LON0))
const x = (lon: number) => ((lon - LON0) / (LON1 - LON0)) * W
const y = (lat: number) => ((LAT0 - lat) / (LAT0 - LAT1)) * H

const lons = [106, 108, 110, 112, 114, 116, 118]
const lats = [0, -2, -4, -6, -8]

export default function SiteMap() {
  return (
    <figure className="grid md:grid-cols-12 gap-8 items-start">
      <div className="md:col-span-8 border border-rule bg-panel">
        <svg viewBox={`-34 -6 ${W + 40} ${H + 30}`} className="w-full h-auto block" role="img"
          aria-label="Map of western Indonesia with project locations marked">
          {/* graticule */}
          {lons.map((lo) => (
            <g key={lo}>
              <line x1={x(lo)} x2={x(lo)} y1={0} y2={H} stroke="var(--rule)" strokeWidth={1} />
              <text x={x(lo)} y={H + 18} textAnchor="middle" className="font-mono" fontSize={10} fill="var(--graphite)">
                {lo}°E
              </text>
            </g>
          ))}
          {lats.map((la) => (
            <g key={la}>
              <line x1={0} x2={W} y1={y(la)} y2={y(la)} stroke="var(--rule)" strokeWidth={1} />
              <text x={-6} y={y(la) + 3} textAnchor="end" className="font-mono" fontSize={10} fill="var(--graphite)">
                {la === 0 ? '0°' : `${-la}°S`}
              </text>
            </g>
          ))}
          <rect x={0} y={0} width={W} height={H} fill="none" stroke="var(--graphite)" strokeWidth={1} />

          {/* water names, set the cartographic way */}
          <text x={x(111.2)} y={y(-4.9)} fontSize={13} fontStyle="italic" letterSpacing="0.3em" fill="var(--graphite)">
            Java Sea
          </text>
          <text x={x(116.6)} y={y(-3.6)} fontSize={11} fontStyle="italic" letterSpacing="0.25em" fill="var(--graphite)"
            textAnchor="middle">
            Makassar Str.
          </text>

          {/* control points: triangulation-station symbol */}
          {sites.map((s, i) => {
            const px = x(s.lon), py = y(s.lat)
            const end = px > W * 0.7
            const ly = s.anchor === 'above' ? py - 14 : py + 22
            return (
              <a key={s.name} href={s.href} aria-label={`${s.name}: ${s.work}`}>
                <g className="plot" style={{ animationDelay: `${250 + i * 160}ms` }}>
                  <path d={`M ${px} ${py - 8} L ${px + 7} ${py + 5} L ${px - 7} ${py + 5} Z`}
                    fill="var(--paper)" stroke="var(--mark)" strokeWidth={1.6} />
                  <circle cx={px} cy={py + 1} r={1.6} fill="var(--mark)" />
                  <text x={end ? px - 10 : px + (s.anchor === 'above' ? -6 : 10)} y={ly}
                    textAnchor={end ? 'end' : 'start'} fontSize={13} fontWeight={600} fill="var(--ink)">
                    {s.name}
                  </text>
                </g>
              </a>
            )
          })}
        </svg>
      </div>

      <figcaption className="md:col-span-4">
        <p className="text-sm text-graphite mb-4">Where the work was done</p>
        <dl className="space-y-4">
          {sites.map((s) => (
            <div key={s.name}>
              <dt>
                <a href={s.href} className="font-semibold text-ink hover:text-link">
                  {s.name}
                </a>
                <span className="font-mono text-xs text-graphite ml-2">
                  {Math.abs(s.lat).toFixed(2)}°S {s.lon.toFixed(2)}°E
                </span>
              </dt>
              <dd className="text-sm text-graphite">{s.work}</dd>
            </div>
          ))}
        </dl>
      </figcaption>
    </figure>
  )
}
