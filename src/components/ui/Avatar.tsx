interface AvatarProps {
  name: string
  area?: string
  size?: number
}

function hashHue(s: string): number {
  return [...s].reduce((a, c) => (a + c.charCodeAt(0)) % 360, 0)
}

function getInitials(name: string): string {
  return name
    .replace(/^(Dr\.|Prof\.)\s*/i, '')
    .split(/\s+/)
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

export function Avatar({ name, area = '', size = 96 }: AvatarProps) {
  const initials = getInitials(name)
  const hue = hashHue(area + name)

  return (
    <div
      className="relative rounded-[var(--r-sm)] overflow-hidden flex-shrink-0"
      style={{
        width: size,
        height: size,
        background: `hsl(${hue}deg 8% 50%)`,
      }}
    >
      {/* diagonal stripe pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id={`stripe-${hue}`} x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
            <line x1="0" y1="6" x2="6" y2="0" stroke="currentColor" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#stripe-${hue})`} />
      </svg>

      {/* initials */}
      <span
        className="absolute inset-0 flex items-center justify-center font-serif font-normal select-none"
        style={{
          fontSize: size * 0.32,
          color: `hsl(${hue}deg 12% 92%)`,
          letterSpacing: '-0.01em',
        }}
      >
        {initials}
      </span>

      {/* "photo" micro-label */}
      <span
        className="absolute bottom-1 right-1 font-mono leading-none"
        style={{
          fontSize: 8,
          color: `hsl(${hue}deg 8% 75%)`,
          letterSpacing: '0.04em',
        }}
      >
        photo
      </span>
    </div>
  )
}
