import { useTranslation } from "react-i18next";

export default function Why() {
  const { t } = useTranslation();

  return (
    <section id='Why' className={` flex flex-col items-center py-4 `}>
      <h1 className={`md:text-6xl sm:text-5xl text-4xl text-center pb-8`}>
        {t("why.title")}
      </h1>
      <div
        className={`grid md:grid-cols-3 gap-2 *:max-w-122.5 *:rounded-md *:bg-[#def7e5] *:p-4 [&_p_h1]:text-2xl [&_p_h1]:w-full [&_p_h1]:text-center [&_p_h1]:pb-3`}
      >
        <p>
          <h1>{t("why.grid.1.title")}</h1>
          {t("why.grid.1.p")}
        </p>
        <p>
          <h1>{t("why.grid.2.title")}</h1>
          {t("why.grid.2.p")}
        </p>
        <p>
          <h1>{t("why.grid.3.title")}</h1>
          {t("why.grid.3.p")}
        </p>
      </div>
    </section>
  );
}
