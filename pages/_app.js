// pages/_app.js
import '../styles/globals.css'
import Layout from '../components/Layout'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true, // L'animation ne se reproduira qu'une seule fois
    })
  }, [])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
