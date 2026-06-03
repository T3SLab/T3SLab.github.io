import { Logo } from './Logo'

interface WordmarkProps {
  size?: number
}

export function Wordmark({ size = 18 }: WordmarkProps) {
  return (
    <span
      className="inline-flex items-center gap-[9px] font-serif font-medium"
      style={{ fontSize: size, letterSpacing: '-0.01em' }}
    >
      <Logo size={size + 4} />
      <span style={{ color: 'var(--fg)' }}>
        T
        <sub
          className="font-mono"
          style={{
            fontSize: '0.65em',
            letterSpacing: 0,
            verticalAlign: 'baseline',
            color: 'var(--accent)',
            margin: '0 0.05em',
            fontWeight: 400,
          }}
        >
          3
        </sub>
        S
        <span style={{ color: 'var(--muted-2)', fontWeight: 300 }}> · </span>
        Lab
      </span>
    </span>
  )
}
