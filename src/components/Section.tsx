export default function Section({
  id,
  title,
  intro,
  children,
}: {
  id: string
  title: string
  intro?: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="max-w-page mx-auto px-6 py-20 border-t border-rule">
      <div className="grid md:grid-cols-12 gap-x-8 mb-12">
        <h2 className="md:col-span-3 semiwide text-[1.75rem] font-medium leading-tight">{title}</h2>
        {intro && <p className="md:col-span-7 text-graphite mt-3 md:mt-1 max-w-[38rem]">{intro}</p>}
      </div>
      {children}
    </section>
  )
}
