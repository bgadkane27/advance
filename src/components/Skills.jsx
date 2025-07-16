import { useAnimate } from "framer-motion";
import {
  Atom, Box, Braces, Brain, BringToFront, Clock, Code, Component,
  Crosshair, GitBranch, Lightbulb, Projector, SpeechIcon, Target, Users
} from "lucide-react";

export const Skill = () => (
  <div className="bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-[#f33535] via-[#d8e9f0] to-[#33425b] px-4 py-12 min-h-screen">
    <div className="mx-auto max-w-7xl">
      <div className="mb-8">
        <h1 className="text-4xl sm:text-6xl font-extrabold max-w-fit mb-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Skills
        </h1>
        <p className="text-2xl">
          These are the foundation that <strong className="text-[#747bff]">shapes and defines</strong> my professional journey.
        </p>
      </div>
      <Skills />
    </div>
  </div>
);

const Skills = () => (
  <div className="divide-y divide-neutral-900 border border-neutral-900">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-x divide-neutral-900">
      <LinkBox Icon={Target} label="Attentive" />
      <LinkBox Icon={Brain} label="Strong Analytical Skill" />
      <LinkBox Icon={Users} label="Team Collaboration" />
      <LinkBox Icon={Lightbulb} label="Problem Solving" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-x divide-neutral-900">
      <LinkBox Icon={SpeechIcon} label="Effective Communication" />
      <LinkBox Icon={Clock} label="Time Management" />
      <LinkBox Icon={BringToFront} label="Curious and Proactive" />
      <LinkBox Icon={Projector} label="Patience and Perseverance" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-x divide-neutral-900">
      <LinkBox Icon={Brain} label="User-Centric Mindset" />
      <LinkBox Icon={Crosshair} label="Product Oriented" />
      <LinkBox Icon={Code} label="HTML & CSS" />
      <LinkBox Icon={Braces} label="JavaScript" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-x divide-neutral-900">
      <LinkBox Icon={Atom} label="React" />
      <LinkBox Icon={Box} label="Node.js" />
      <LinkBox Icon={Component} label="UI/UX Design" />
      <LinkBox Icon={GitBranch} label="Version Control (Git)" />
    </div>
  </div>
);

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

const ENTRANCE_KEYFRAMES = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const LinkBox = ({ Icon, label }) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = (e) => {
    const box = e.currentTarget.getBoundingClientRect();
    const distances = [
      { side: "left", dist: Math.abs(e.clientX - box.left) },
      { side: "right", dist: Math.abs(e.clientX - box.right) },
      { side: "top", dist: Math.abs(e.clientY - box.top) },
      { side: "bottom", dist: Math.abs(e.clientY - box.bottom) },
    ];
    return distances.sort((a, b) => a.dist - b.dist)[0].side;
  };

  const handleMouseEnter = (e) => {
    const side = getNearestSide(e);
    animate(scope.current, { clipPath: ENTRANCE_KEYFRAMES[side] });
  };

  const handleMouseLeave = (e) => {
    const side = getNearestSide(e);
    animate(scope.current, { clipPath: EXIT_KEYFRAMES[side] });
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative grid h-20 sm:h-28 md:h-36 w-full place-content-center text-center bg-black"
    >
      <div className="flex flex-col items-center justify-center gap-1">
        <Icon className="text-xl sm:text-3xl lg:text-4xl" />
        <span className="text-xs sm:text-sm md:text-base font-medium">{label}</span>
      </div>

      <div
        ref={scope}
        style={{ clipPath: BOTTOM_RIGHT_CLIP }}
        className="absolute inset-0 grid place-content-center bg-gray-900 text-white"
      >
        <div className="flex flex-col items-center justify-center gap-1">
          <Icon className="text-xl sm:text-3xl md:text-4xl" />
          <span className="text-xs sm:text-sm md:text-base font-medium">{label}</span>
        </div>
      </div>
    </div>
  );
};
