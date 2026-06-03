'use client'

interface ChipProps {
  active?: boolean
  onClick?: () => void
  children: React.ReactNode
}

export function Chip({ active = false, onClick, children }: ChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        appearance: 'none',
        border: `1px solid ${active ? 'var(--fg)' : 'var(--rule)'}`,
        background: active ? 'var(--fg)' : 'transparent',
        color: active ? 'var(--bg)' : 'var(--fg-2)',
        fontFamily: 'inherit',
        fontSize: 'var(--fs-sm)',
        padding: '4px 10px',
        borderRadius: 999,
        cursor: 'pointer',
        transition: 'all 0.15s var(--ease)',
        lineHeight: 1.4,
      }}
      onMouseOver={(e) => {
        if (!active) {
          e.currentTarget.style.background = 'var(--bg-2)'
          e.currentTarget.style.borderColor = 'var(--rule-strong)'
        }
      }}
      onMouseOut={(e) => {
        if (!active) {
          e.currentTarget.style.background = 'transparent'
          e.currentTarget.style.borderColor = 'var(--rule)'
        }
      }}
    >
      {children}
    </button>
  )
}
