// components/Header.js
import Link from 'next/link'

export default function Header() {
  return (
    <header className="header" data-aos="fade-down">
      <div className="logo">
        <h1>GOTH</h1>
      </div>
      <nav className="nav">
        <Link href="/">Accueil</Link>
        <Link href="/about">À propos</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  )
}
