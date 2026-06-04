import { ImageResponse } from 'next/og'

export const dynamic = 'force-static'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="32" height="32" viewBox="0 0 32 32">
          {/* pin notches */}
          <g stroke="#15161A" strokeWidth="1.4" strokeLinecap="square">
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
          <rect x="5.5" y="5.5" width="21" height="21" rx="1.5" fill="none" stroke="#15161A" strokeWidth="1.4" />
          {/* inner core — orange accent */}
          <rect x="10" y="10" width="12" height="12" rx="0.5" fill="#D86A2A" />
          {/* T cut */}
          <g stroke="#FAFAF7" strokeWidth="1.6" strokeLinecap="square">
            <line x1="12" y1="13" x2="20" y2="13" />
            <line x1="16" y1="13" x2="16" y2="19" />
          </g>
        </svg>
      </div>
    ),
    { ...size }
  )
}
