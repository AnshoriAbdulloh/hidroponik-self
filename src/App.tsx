// import { useState } from "react";
import { Element } from "react-scroll";

import Navbar from "./components/Navbar";
import About from "./pages/About";
import Hero from "./pages/Hero";
import Plants from "./pages/Plants";
import Why from "./pages/Why";
// import Card from "./components/Card";

export default function App() {
  // const [count, setCount] = useState(0);

  return (
    <div
      className={` font-dm_sans-medium min-h-screen w-full flex flex-col items-center *:transition-all *:duration-500`}
    >
      <Navbar />
      <main
        className={`flex flex-col gap-5 px-4 lg:max-w-5xl md:max-w-3xl w-full  `}
      >
        <Element name='Hero'>
          <Hero />
        </Element>
        <Element name='Why'>
          <Why />
        </Element>
        <Element name='Plants'>
          <Plants />
        </Element>
      </main>
      <Element name='About' className='w-full'>
        <About />
      </Element>
    </div>
  );
}
