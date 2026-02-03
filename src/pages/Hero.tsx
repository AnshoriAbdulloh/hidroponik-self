import NatureHand from "../assets/img/natureHand.png";

export default function Hero() {
  return (
    <section
      id='Hero'
      className={` flex lg:flex-row flex-col lg:h-[calc(100vh-56px)]  w-full py-5 mb-5 overflow-visible`}
    >
      <div className={`flex flex-col`}>
        <h1 className={`lg:text-7xl md:text-6xl text-5xl leading-tight `}>
          Great Man is Who Plants{" "}
          <span className={`text-[#84bd22]`}>Hidroponik</span>
        </h1>
        <p className={`pl-1 py-3`}>
          Hidroponik is a metode planting that using water to gave and flow the
          nutrition for plant, this rather to made plant clean for someone
          eating.
        </p>
        <div className={`pl-1 pb-3 mt-auto`}>
          <button className={`bg-[#84bd22] p-3 px-5 rounded-md`}>
            Learn More
          </button>
        </div>
      </div>
      <div className={`max-w-125 mx-auto aspect-square `}>
        <img
          src={NatureHand}
          alt='Hero Image'
          className={`w-full object-contain `}
        />
      </div>
    </section>
  );
}
