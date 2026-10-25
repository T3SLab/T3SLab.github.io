'use client'

import { useState, type MouseEvent } from 'react'

interface CopyBibLinkProps {
  href: string
}

export function CopyBibLink({ href }: CopyBibLinkProps) {
  const [copied, setCopied] = useState(false)

  async function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    // fall back to opening the .bib file if the clipboard is unavailable
    if (!navigator.clipboard) return
    e.preventDefault()
    try {
      const res = await fetch(href)
      if (!res.ok) throw new Error(res.statusText)
      await navigator.clipboard.writeText((await res.text()).trim())
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      window.open(href, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className="pub-link"
      title="Copy BibTeX to clipboard"
      aria-live="polite"
    >
      {copied ? 'copied!' : 'bib'}
    </a>
  )
}
