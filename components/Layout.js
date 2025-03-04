// components/Layout.js
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="container">
      <Header />
      <main className="main" data-aos="fade-in">
        {children}
      </main>
      <Footer />
    </div>
  )
}
