'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Icon } from '@/components/ui/Icon'

export function SearchBox() {
  const [query, setQuery] = useState('')
  const pathname = usePathname()
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)

  // Clear search when navigating between pages
  useEffect(() => {
    setQuery('')
  }, [pathname])

  // ⌘K / Ctrl+K shortcut
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    setQuery(val)
    const params = val ? `?q=${encodeURIComponent(val)}` : ''
    router.replace(pathname + params, { scroll: false } as Parameters<typeof router.replace>[1])
  }

  const pageName = pathname === '/' ? 'the lab' : pathname.replace('/', '')

  return (
    <label
      className="hidden sm:flex items-center gap-2 rounded-[var(--r-md)] cursor-text transition-[border-color,background] duration-150"
      style={{
        background: 'var(--bg-2)',
        border: '1px solid var(--rule)',
        padding: '6px 10px',
        fontSize: 'var(--fs-sm)',
        color: 'var(--muted)',
        minWidth: 220,
      }}
      onFocus={(e) => {
        const el = e.currentTarget
        el.style.borderColor = 'var(--accent-line)'
        el.style.background = 'var(--bg)'
        el.style.color = 'var(--fg)'
      }}
      onBlur={(e) => {
        const el = e.currentTarget
        el.style.borderColor = 'var(--rule)'
        el.style.background = 'var(--bg-2)'
        el.style.color = 'var(--muted)'
      }}
    >
      <Icon name="search" size={13} />
      <input
        ref={inputRef}
        type="search"
        placeholder={`Search ${pageName}…`}
        value={query}
        onChange={handleChange}
        className="border-0 bg-transparent outline-none w-full min-w-0"
        style={{
          font: 'inherit',
          color: 'var(--fg)',
        }}
      />
      <kbd
        className="hidden lg:block font-mono"
        style={{
          fontSize: '10.5px',
          padding: '1px 5px',
          border: '1px solid var(--rule)',
          borderRadius: 3,
          color: 'var(--muted-2)',
          background: 'var(--bg)',
          lineHeight: 1.6,
          flexShrink: 0,
        }}
      >
        ⌘K
      </kbd>
    </label>
  )
}
