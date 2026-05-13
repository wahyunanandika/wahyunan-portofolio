// ini import navbar dari file src/components/Navbar.tsx
import Navbar from '@/components/Navbar' 
// ini import hero dari file src/components/Hero.tsx
import Hero from '@/components/Hero'
// ini import experience dari file src/components/Experience.tsx
import Experience from '@/components/Experience'
// ini import projects dari file src/components/Projects.tsx
import Projects from '@/components/Projects'
// ini import skills dari file src/components/Skills.tsx
import Skills from '@/components/Skills'
// ini import contacts dari file src/components/Contacts.tsx
import Contact from '@/components/Contact'

// export fungsi home sebagai utama supaya next.js ngenalin sebagai halaman
export default function Home() {
  //mengembalikan tampilan html 
  return (
    <main className='relative'>
      <Navbar />
      <div className='relative z-10'>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </main>
  )
}