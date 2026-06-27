import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import FeaturedWork from './components/FeaturedWork.jsx'
import Skills from './components/Skills.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-base text-ink font-body">
      <Navbar />
      <main>
        <Hero />
        <FeaturedWork />

        <section className="pt-4 pb-16 sm:pt-6 sm:pb-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Skills />
              <About />
            </div>
            <Experience />
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  )
}
