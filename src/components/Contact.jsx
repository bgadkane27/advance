import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { contactLinks } from "../constants";
import ModelViewer from "./ModelViewer";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useGSAP(() => {
    // gsap.from(sectionRef.current, {
    //   opacity: 0,
    //   y: 60,
    //   duration: 1,
    //   ease: "power3.out",
    //   scrollTrigger: {
    //     trigger: sectionRef.current,
    //     start: "top 85%",
    //     toggleActions: "play none none reverse",
    //   },
    // });

    gsap.from(leftRef.current, {
      opacity: 0,
      x: -50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: leftRef.current,
        start: "top 90%",
      },
    });

    gsap.from(rightRef.current, {
      opacity: 0,
      x: 50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: rightRef.current,
        start: "top 90%",
      },
    });
  }, []);

  return (
    <div
      // ref={sectionRef}
      id="contact"
    // className="px-8 py-16 relative overflow-hidden flex flex-col"
    >
      {/* <img
        src="/images/left.svg"
        alt="background image"
        className="hidden sm:block absolute inset-0 w-full h-full object-contain z-0"
      /> */}
      <img src="/images/slider-right-leaf.webp" alt="leaf-right" id="f-right-leaf" />
      <img src="/images/slider-left-leaf.webp" alt="leaf-left" id="f-left-leaf" />
      <div className="w-full max-w-7xl mx-auto mb-6">
        <h1 className="
                text-4xl sm:text-6xl font-extrabold max-w-fit mb-4
                bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 
                text-transparent bg-clip-text
                ">
          Contact Me
        </h1>
        <p className="text-2xl text-start">
          Let's get in touch — for the best <strong className="text-[#747bff] font-bold">collaboration</strong> experience.
        </p>
      </div>
      <div className="w-full max-w-7xl mx-auto">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 z-50">
          <div ref={leftRef}
            className="space-y-6 border rounded-2xl border-gray-800 px-4 py-4 bg-center shadow-[0_0_25px_rgba(255,255,200,0.2)]"
          >
            {contactLinks.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl p-4 border border-gray-800 hover:border-gray-600 transition-all duration-300 group max-w-xs"
              >
                <h2 className="text-xl font-bold mb-1 group-hover:text-pink-500 transition-colors duration-300">
                  {item.label}
                </h2>
                <p className="text-gray-400 text-sm">{item.value}</p>
              </a>
            ))}
          </div>
          <div ref={rightRef} className="rounded-2xl overflow-hidden shadow-lg border border-gray-800 bg-gray-950 z-100">
            <ModelViewer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
