export default function Why() {
  return (
    <section id='Why' className={` flex flex-col items-center py-4 `}>
      <h1 className={`md:text-6xl sm:text-5xl text-4xl text-center pb-8`}>
        Why Hidroponik
      </h1>
      <div
        className={`grid md:grid-cols-3 gap-2 *:max-w-122.5 *:rounded-md *:bg-[#def7e5] *:p-4 [&_p_h1]:text-2xl [&_p_h1]:w-full [&_p_h1]:text-center [&_p_h1]:pb-3`}
      >
        <p>
          <h1>Efisiensi Lahan</h1>
          Hidroponik memungkinkan budidaya tanaman tanpa tanah secara vertikal,
          menjadikannya solusi terbaik untuk berkebun di lahan sempit atau area
          perkotaan yang terbatas.
        </p>
        <p>
          <h1>Kualitas Nutrisi</h1>
          Karena nutrisi air dikontrol secara ketat dan minim penggunaan
          pestisida, sayuran yang dihasilkan jauh lebih bersih, renyah, dan aman
          dikonsumsi keluarga.
        </p>
        <p>
          <h1>Hemat Sumber Daya</h1>
          Metode ini menggunakan sistem sirkulasi yang menghemat penggunaan air
          hingga 90% dibandingkan pertanian konvensional, sehingga jauh lebih
          berkelanjutan.
        </p>
      </div>
    </section>
  );
}
