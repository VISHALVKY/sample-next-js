'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container">
        <div className="nav">
          <h1 className="logo">My Portfolio</h1>
          
          <nav className="desktop-nav">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/about" className="nav-link">About</Link>
            <Link href="/projects" className="nav-link">Projects</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
          </nav>

          <button 
            className="mobile-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>

        <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
          <Link href="/" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link href="/about" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link href="/projects" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Projects</Link>
          <Link href="/contact" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </nav>
      </div>
    </header>
  )
}