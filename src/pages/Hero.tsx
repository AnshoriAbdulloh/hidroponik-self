import { useTranslation } from "react-i18next";

import NatureHand from "../assets/img/natureHand.png";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id='Hero'
      className={` flex lg:flex-row flex-col lg:h-[calc(100vh-56px)]  w-full py-5 mb-5 overflow-visible`}
    >
      <div className={`flex flex-col`}>
        <h1 className={`lg:text-7xl md:text-6xl text-5xl leading-tight `}>
          {t("hero.title")}
          <span className={`text-[#84bd22]`}>{t("hero.hydroponics")}</span>
        </h1>
        <p className={`pl-1 py-3`}>{t("hero.description")}</p>
        <div className={`pl-1 pb-3 mt-auto`}>
          <button className={`bg-[#84bd22] p-3 px-5 rounded-md`}>
            {t("hero.learnMore")}
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
