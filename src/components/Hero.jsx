import { useGSAP } from "@gsap/react";
import Beams from "./Beams"
import gsap from "gsap";
// import { SplitText } from "gsap/SplitText";
import PixelCard from "./PixelCard";

const Hero = () => {

  useGSAP(() => {
    // const title = new SplitText(".title", {
    //   type: "chars, words"
    // });

    // const paragraphSplit = new SplitText(".subtitle", {
    //   type: "lines",
    // });

    // title.chars.forEach((char) => char.classList.add("text-gradient"));

    // gsap.from(title.chars, {
    //   yPercent: 100,
    //   duration: 1.8,
    //   ease: "elastic.out(1, 0.8)",
    //   stagger: 0.06,
    // })

    // gsap.from(paragraphSplit.lines, {
    //   opacity: 0,
    //   yPercent: 100,
    //   duration: 1.8,
    //   ease: "expo.out",
    //   stagger: 0.06,
    //   delay: 1,
    // });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".right-leaf", { y: 200 }, 0)
      .to(".left-leaf", { y: -200 }, 0)

  }, []);

  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative', overflow: "hidden" }}>
      <Beams
        beamWidth={2}
        beamHeight={15}
        beamNumber={25}
        lightColor="#fff"
        speed={2}
        noiseIntensity={1.75}
        scale={0.2}
        rotation={25}
      />
      <div id="hero" className="noisy overflow-hidden">
        {/* <h1 className="title font-bold">Baburao  <br />Adkane</h1> */}
        <div className="flex items-center justify-center h-screen z-500">
          <PixelCard variant="blue">
            <div className="absolute top-0 px-4">
              <p className="text-xs bg-gray-100/20 p-2 rounded-lg">Hover Me</p>
            </div>
            <div className="absolute top-20">
              <strong className="sm:text-3xl text-2xl bg-gradient-to-r from-orange-500 via-indigo-500 to-green-500 text-transparent bg-clip-text">Baburao Adkane</strong>
            </div>
            <img
              src="/hero/profile.webp"
              alt="left-leaf"
              className="absolute bottom-0"
            />
          </PixelCard>
        </div>
        <img
          src="/images/hero-left-leaf.webp"
          alt="left-leaf"
          className="left-leaf"
        />
        <img
          src="/images/hero-right-leaf.webp"
          alt="right-leaf"
          className="right-leaf"
        />
        <div className="body max-w-7xl mx-auto">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p></p>
              <p className="subtitle">
                Passion | Skill |<br /> Stratergy | Quality
              </p>
            </div>

            <div className="view-cocktails">
              <p className="subtitle text-center">
                I design test strategies that ensure reliable, scalable, and bug-free systems.
              </p>
              {/* <a href="/" className="italic">- Baburao Adkane</a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;