import Hero from "@/components/Hero"
import Menu from "@/components/Menu"
import About from "@/components/About"
import EnquirySection from "@/components/EnquirySection"
import Footer from "@/components/Footer"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Menu />
      <About />
      <EnquirySection />
      <Footer />
    </main>
  )
}