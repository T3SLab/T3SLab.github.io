import Image from "next/image"

interface LogoProps {
  size?: number
}

export function Logo({ size = 22 }: LogoProps) {
  return (
    <Image
      src="/logo_v2_cropped.png"
      alt="T3S Lab"
      width={size}
      height={size}
      style={{ display: "block", flexShrink: 0 }}
    />
  )
}
