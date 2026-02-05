import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase.ts";

type ImageData = {
  imageUrl: string;
  title?: string;
};

export default function Plants() {
  const [images, setImages] = useState<ImageData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const snapshot = await getDocs(collection(db, `images`));
        {
          /*isi dari  */
        }
        //   snapshot = {
        //     docs: [
        //       QueryDocumentSnapshot,
        //       QueryDocumentSnapshot,
        //       QueryDocumentSnapshot,
        //     ],
        //     size: 3,
        //     empty: false,
        //     forEach: fn,
        //   };
        // snapshot.docs adalah array dokumen firestore bukan data mentah
        const data = snapshot.docs.map((doc) => doc.data() as ImageData);
        // dimap ini lah kita mengambil datanya dengan doc.data
        // as ImageData adalah menyatakan bahwa data tersebut sudah sesuai ImageData tanpa dicek
        setImages(data);
        // dari sinilah images berisi array of object dari data murni firestore
      } catch (error) {
        console.error(error);
        setError(`Gagal mengambil data`);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) return <p>Loading</p>;
  if (error) return <p>{error}</p>;
  return (
    <section id='Plants' className={``}>
      <h1 className={`md:text-6xl sm:text-5xl text-4xl text-center pb-8`}>
        Best Plants
      </h1>
      <div
        className={` lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 sm:grid flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar gap-4`}
      >
        {images.map((img, i) => (
          // setiap looping komponen react meminta identitas pembeda setiap itemnya agar react tau item mana yg berubah, jika tidak maka react akan kebingungan, best practicenya pakai id jangan pakai index jika itemnya dapat dihapus dan ditambahkan di tengah list
          <div
            key={i}
            className={`flex flex-col snap-center shrink-0 rounded-xl border border-[#84bd22]/40 aspect-3/4 overflow-hidden max-h-80`}
          >
            <div className='h-2/3 overflow-hidden'>
              <img
                src={img.imageUrl}
                alt={img.title ?? "image"}
                className='w-full h-full object-cover rounded-xl'
              />
            </div>
            {img.title && <p className='p-2 sm:text-md text-sm'>{img.title}</p>}
            {/* jika img.title ada maka beri style img.title namun jika tidak ada
             maka abaikan semua */}
            <button
              className={`bg-[#84bd22] py-2 px-5 m-2 mt-auto sm:text-sm text-xs rounded-md w-fit`}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
