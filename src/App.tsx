// import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Card from "./components/Card";
import ImageList from "./components/ImageList";

export default function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className={`min-h-screen w-full flex flex-col items-center`}>
      <Navbar />
      <main className={`px-4 lg:max-w-5xl md:max-w-3xl w-full  `}>
        <Hero />
        {/* <ImageList /> */}
      </main>
    </div>
  );
}
