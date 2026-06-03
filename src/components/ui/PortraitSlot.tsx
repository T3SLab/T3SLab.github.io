interface PortraitSlotProps {
  label?: string
  width?: number
  height?: number
}

export function PortraitSlot({ label = 'Portrait', width = 260, height = 320 }: PortraitSlotProps) {
  return (
    <div
      className="relative rounded-[var(--r-sm)] overflow-hidden w-full"
      style={{
        maxWidth: width,
        aspectRatio: `${width} / ${height}`,
        background: 'var(--bg-2)',
        border: '1px solid var(--rule)',
      }}
    >
      <svg
        className="portrait-stripes"
        viewBox="0 0 100 125"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <pattern id="portrait-stripe" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="4" stroke="currentColor" strokeWidth="0.3" />
          </pattern>
        </defs>
        <rect width="100" height="125" fill="url(#portrait-stripe)" />
      </svg>
      <div
        className="absolute inset-0 flex items-center justify-center"
      >
        <span
          className="font-mono"
          style={{
            fontSize: 'var(--fs-xs)',
            color: 'var(--muted)',
            letterSpacing: '0.08em',
          }}
        >
          [ {label} ]
        </span>
      </div>
    </div>
  )
}
