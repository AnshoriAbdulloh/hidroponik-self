import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase.ts";

type ImageData = {
  imageUrl: string;
  title?: string;
};

export default function ImageList() {
  const [images, setImages] = useState<ImageData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const snapshot = await getDocs(collection(db, `images`));
        const data = snapshot.docs.map((doc) => doc.data() as ImageData);
        // as ImageData adalah menyatakan bahwa data tersebut sudah sesuai ImageData tanpa dicek
        setImages(data);
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
    <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 mt-5 font-samsung-medium'>
      {images.map((img, i) => (
        // setiap looping komponen react meminta identitas pembeda setiap itemnya agar react tau item mana yg berubah, jika tidak maka react akan kebingungan, best practicenya pakai id jangan pakai index jika itemnya dapat dihapus dan ditambahkan di tengah list
        <div
          key={i}
          className='rounded-xl overflow-hidden shadow-md md:h-82 h-60'
        >
          <img
            src={img.imageUrl}
            alt={img.title ?? "image"}
            className='w-full md:h-48 h-35 object-cover'
          />
          {img.title && <p className='p-2 text-sm'>{img.title}</p>}
        </div>
      ))}
    </div>
  );
}
