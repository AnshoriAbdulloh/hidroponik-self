// import { useState } from "react";

import Navbar from "./components/Navbar";
import About from "./pages/About";
import Hero from "./pages/Hero";
import Plants from "./pages/Plants";
import Why from "./pages/Why";
// import Card from "./components/Card";
// import ImageList from "./components/ImageList";

export default function App() {
  // const [count, setCount] = useState(0);

  return (
    <div
      className={` font-dm_sans-medium min-h-screen w-full flex flex-col items-center`}
    >
      <Navbar />
      <main className={`px-4 lg:max-w-5xl md:max-w-3xl w-full  `}>
        <Hero />
        <Why />
        <Plants />
        {/* <ImageList /> */}
      </main>
      <About />
    </div>
  );
}
