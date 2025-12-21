import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"
import Hero from "./components/Hero"
import Header from "./components/Header"
import Section2 from "./components/Section2"
import Section3 from "./components/Section3"
import Section4 from "./components/Section4"
import Footer from "./components/Footer"
import Section5 from "./components/Section5"
import Section6 from "./components/Section6"
import { FiMenu } from "react-icons/fi"
import { IoMdSearch } from "react-icons/io"
import CamDrop from "./components/CamDrop"

gsap.registerPlugin(ScrollTrigger, SplitText)

function App() {
  return (
    <>
      <main>
        <CamDrop />
        <div id="sidebar" className="bg-[#ffefd8] fixed left-0 z-12 h-screen border-r-3 border-[#99400b] w-[80px] flex flex-col text-[42px] items-center pt-[24px] gap-[16px]">
          <FiMenu />
          <IoMdSearch />
        </div>
        <div>
          <Header />
          <Hero />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
          <Footer />
        </div>
      </main>
    </>
  )
}

export default App
