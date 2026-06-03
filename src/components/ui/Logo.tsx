interface LogoProps {
  size?: number
  mono?: boolean
}

export function Logo({ size = 22, mono = false }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      aria-hidden="true"
      style={{ display: "block", flexShrink: 0 }}
    >
      {/* pin notches */}
      <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" fill="none">
        <line x1="10" y1="2" x2="10" y2="5" />
        <line x1="16" y1="2" x2="16" y2="5" />
        <line x1="22" y1="2" x2="22" y2="5" />
        <line x1="10" y1="27" x2="10" y2="30" />
        <line x1="16" y1="27" x2="16" y2="30" />
        <line x1="22" y1="27" x2="22" y2="30" />
        <line x1="2" y1="10" x2="5" y2="10" />
        <line x1="2" y1="16" x2="5" y2="16" />
        <line x1="2" y1="22" x2="5" y2="22" />
        <line x1="27" y1="10" x2="30" y2="10" />
        <line x1="27" y1="16" x2="30" y2="16" />
        <line x1="27" y1="22" x2="30" y2="22" />
      </g>
      {/* outer die */}
      <rect
        x="5.5" y="5.5" width="21" height="21" rx="1.5"
        fill="none" stroke="currentColor" strokeWidth="1.4"
      />
      {/* inner core */}
      <rect
        x="10" y="10" width="12" height="12" rx="0.5"
        fill={mono ? "none" : "var(--accent)"}
        stroke="none"
      />
      {/* T cut */}
      <g
        stroke={mono ? "currentColor" : "var(--bg)"}
        strokeWidth="1.6"
        strokeLinecap="square"
      >
        <line x1="12" y1="13" x2="20" y2="13" />
        <line x1="16" y1="13" x2="16" y2="19" />
      </g>
    </svg>
  )
}
