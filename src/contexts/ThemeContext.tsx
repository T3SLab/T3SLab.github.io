'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

const ACCENTS = ['#D86A2A', '#1F6FB5', '#1E8A5F', '#7548C9'] as const
export type Accent = typeof ACCENTS[number]

type Density = 'comfortable' | 'compact'

interface AccentContextValue {
  accent: Accent
  setAccent: (a: Accent) => void
  density: Density
  setDensity: (d: Density) => void
  accents: readonly Accent[]
}

const AccentContext = createContext<AccentContextValue | null>(null)

export function AccentProvider({ children }: { children: ReactNode }) {
  const [accent, setAccentState] = useState<Accent>('#D86A2A')
  const [density, setDensityState] = useState<Density>('comfortable')

  useEffect(() => {
    const savedAccent = localStorage.getItem('t3s-accent') as Accent | null
    const savedDensity = localStorage.getItem('t3s-density') as Density | null
    if (savedAccent && ACCENTS.includes(savedAccent)) setAccentState(savedAccent)
    if (savedDensity) setDensityState(savedDensity)
  }, [])

  useEffect(() => {
    document.documentElement.style.setProperty('--accent-raw', accent)
    localStorage.setItem('t3s-accent', accent)
  }, [accent])

  useEffect(() => {
    document.documentElement.setAttribute('data-density', density)
    localStorage.setItem('t3s-density', density)
  }, [density])

  const setAccent = (a: Accent) => setAccentState(a)
  const setDensity = (d: Density) => setDensityState(d)

  return (
    <AccentContext.Provider value={{ accent, setAccent, density, setDensity, accents: ACCENTS }}>
      {children}
    </AccentContext.Provider>
  )
}

export function useAccent() {
  const ctx = useContext(AccentContext)
  if (!ctx) throw new Error('useAccent must be used within AccentProvider')
  return ctx
}
