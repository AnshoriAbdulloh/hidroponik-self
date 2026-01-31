import NatureHand from "../assets/img/natureHand.png";

export default function Hero() {
  return (
    <section className={`grid grid-cols-2 h-130 py-5 border`}>
      <div className={` font-dm_sans-medium flex flex-col`}>
        <h1 className={` text-7xl leading-tight `}>
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
      <div
        style={{ backgroundImage: `url(${NatureHand})` }}
        className={` bg-center bg-cover bg-no-repeat sm:bg-position-[19%_center] rounded-3xl w-full`}
      ></div>
    </section>
  );
}
