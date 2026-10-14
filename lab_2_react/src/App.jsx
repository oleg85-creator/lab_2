import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-800">
      <Header />
      <main className="mx-auto my-8 grid max-w-4xl gap-6 px-4 md:grid-cols-2">
        <About />
        <Experience />
        <Education />
        <Skills />
      </main>
      <Footer />
    </div>
  )
}

export default App
