import { type Publication } from '@/data'
import { Pill } from './Pill'

interface PubRowProps {
  pub: Publication
}

export function PubRow({ pub }: PubRowProps) {
  return (
    <li
      className="grid gap-[var(--space-5)] items-start grid-cols-1 sm:grid-cols-[140px_1fr]"
      style={{
        padding: 'var(--space-5) 0',
        borderBottom: '1px solid var(--rule)',
      }}
    >
      {/* left: year + venue */}
      <div className="flex flex-col gap-1">
        <span
          className="font-mono font-medium"
          style={{ fontSize: 'var(--fs-sm)', color: 'var(--fg)' }}
        >
          {pub.year}
        </span>
        <span
          className="font-mono uppercase"
          style={{
            fontSize: 'var(--fs-xs)',
            color: 'var(--muted)',
            letterSpacing: '0.06em',
          }}
        >
          {pub.venue}
        </span>
      </div>

      {/* right: title + authors + foot */}
      <div>
        <h4
          className="font-serif m-0"
          style={{
            fontSize: 'var(--fs-md)',
            fontWeight: 500,
            lineHeight: 'var(--lh-snug)',
            letterSpacing: '-0.005em',
            color: 'var(--fg)',
            marginBottom: 6,
          }}
        >
          {pub.title}
        </h4>
        <div style={{ fontSize: 13.5, color: 'var(--fg-2)' }}>
          {pub.authors.join(' · ')}
        </div>
        <div
          className="flex flex-wrap items-center gap-[var(--space-3)]"
          style={{ marginTop: 'var(--space-3)' }}
        >
          <span
            className="font-mono uppercase"
            style={{
              fontSize: 'var(--fs-xs)',
              color: 'var(--muted)',
              letterSpacing: '0.08em',
            }}
          >
            {pub.topic}
          </span>
          {pub.badges?.map((badge) => (
            <Pill key={badge} tone="accent">{badge}</Pill>
          ))}
          <span
            className="font-mono flex gap-[var(--space-3)] ml-auto"
            style={{ fontSize: 'var(--fs-xs)' }}
          >
            {[['pdf', pub.pdf], ['bib', pub.bib], ['code', pub.code]].map(([label, href]) => (
              <a key={label} href={href ?? '#'} className="pub-link">
                {label}
              </a>
            ))}
          </span>
        </div>
      </div>
    </li>
  )
}
