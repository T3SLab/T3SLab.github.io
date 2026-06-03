'use client'

import { ThemeProvider } from 'next-themes'
import { AccentProvider } from '@/contexts/ThemeContext'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <AccentProvider>
        {children}
      </AccentProvider>
    </ThemeProvider>
  )
}
