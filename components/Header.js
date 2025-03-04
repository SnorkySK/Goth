import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const toggleMenu = () => {
    setIsOpen(prev => !prev)
  }

  // Fermer le menu lors du clic sur un lien
  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <header className="header">
      <div className="logo">
        <Link href="/" onClick={handleLinkClick}>
          <span>GOTH</span>
        </Link>
      </div>
      <button 
        className={`burger ${isOpen ? 'open' : ''}`} 
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <Link href="/" onClick={handleLinkClick}>
          <span className={router.pathname === '/' ? 'active' : ''}>Accueil</span>
        </Link>
        <Link href="/about" onClick={handleLinkClick}>
          <span className={router.pathname === '/about' ? 'active' : ''}>À propos</span>
        </Link>
        <Link href="/contact" onClick={handleLinkClick}>
          <span className={router.pathname === '/contact' ? 'active' : ''}>Contact</span>
        </Link>
      </nav>
    </header>
  )
}
