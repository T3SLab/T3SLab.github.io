import { type ReactNode } from 'react'

type PillTone = 'default' | 'accent'

interface PillProps {
  children: ReactNode
  tone?: PillTone
}

export function Pill({ children, tone = 'default' }: PillProps) {
  const styles: Record<PillTone, React.CSSProperties> = {
    default: {
      background: 'var(--bg-2)',
      color: 'var(--fg-2)',
      border: '1px solid var(--rule)',
    },
    accent: {
      background: 'var(--accent-soft)',
      color: 'var(--accent)',
      border: '1px solid var(--accent-line)',
    },
  }

  return (
    <span
      className="inline-flex items-center font-mono uppercase"
      style={{
        fontSize: '10.5px',
        padding: '2px 7px',
        borderRadius: 3,
        letterSpacing: '0.06em',
        ...styles[tone],
      }}
    >
      {children}
    </span>
  )
}
