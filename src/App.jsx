import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SplashCursor from './components/SplashCursor';
import Art from './components/Art';
import Contact from './components/Contact';

const App = () => {
  return (
    <main>
      <SplashCursor />
      <Navbar />
      <Hero />   
      <Art />
      <Contact />
    </main>

  )
}

export default App
