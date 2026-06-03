interface IconProps {
  name: string
  size?: number
  className?: string
}

export function Icon({ name, size = 14, className }: IconProps) {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 16 16",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    className,
    style: { display: 'inline-block', flexShrink: 0 },
  }

  switch (name) {
    case "search":
      return <svg {...props}><circle cx="7" cy="7" r="4.5" /><line x1="10.5" y1="10.5" x2="14" y2="14" /></svg>
    case "sun":
      return (
        <svg {...props}>
          <circle cx="8" cy="8" r="3" />
          <line x1="8" y1="1" x2="8" y2="3" /><line x1="8" y1="13" x2="8" y2="15" />
          <line x1="1" y1="8" x2="3" y2="8" /><line x1="13" y1="8" x2="15" y2="8" />
          <line x1="3" y1="3" x2="4.5" y2="4.5" /><line x1="11.5" y1="11.5" x2="13" y2="13" />
          <line x1="13" y1="3" x2="11.5" y2="4.5" /><line x1="4.5" y1="11.5" x2="3" y2="13" />
        </svg>
      )
    case "moon":
      return <svg {...props}><path d="M13 9.5A5.5 5.5 0 1 1 6.5 3a4.5 4.5 0 0 0 6.5 6.5z" /></svg>
    case "arrow":
      return <svg {...props}><line x1="3" y1="8" x2="13" y2="8" /><polyline points="9,4 13,8 9,12" /></svg>
    case "ext":
      return <svg {...props}><polyline points="6,3 13,3 13,10" /><line x1="13" y1="3" x2="7" y2="9" /><polyline points="11,13 3,13 3,5" /></svg>
    case "dot":
      return <svg {...props}><circle cx="8" cy="8" r="2" fill="currentColor" stroke="none" /></svg>
    case "menu":
      return <svg {...props}><line x1="2" y1="4" x2="14" y2="4" /><line x1="2" y1="8" x2="14" y2="8" /><line x1="2" y1="12" x2="14" y2="12" /></svg>
    case "x":
      return <svg {...props}><line x1="3" y1="3" x2="13" y2="13" /><line x1="13" y1="3" x2="3" y2="13" /></svg>
    default:
      return null
  }
}
