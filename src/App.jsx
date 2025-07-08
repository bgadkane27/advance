import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SplashCursor from './components/SplashCursor';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Skill from './components/Skill';
import Experience from './components/Experience';

const App = () => {
  return (
    <main>
      <SplashCursor />
      <Navbar />
      <Hero />   
      <AboutMe />
      <Skill />
      <Experience />
      <Contact />
    </main>

  )
}

export default App
