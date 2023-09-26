import { useEffect, useRef, useState } from 'react';
//@ts-ignore
import Typed from 'typed.js';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
// import { EffectFade, Navigation, Pagination } from 'swiper/modules';

// import 'swiper/css';
// import 'swiper/css/effect-fade';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import { ImageCarrousel } from './ImageCarrousel';

export const HeroReact = () => {
  const typed = useRef<Typed>();

  const [items, setItems] = useState([
    {
      text: 'Descubre los cursos que tenemos para ti.',
      img: 'https://www.datascience.pe/assets/img/image-home-with-movement.png',
    },
    {
      text: 'Los 8 sonidos principales del perro | Fundación Affinity.',
      img: 'https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg',
    },
    {
      text: '11 cosas por las que amas a tu gato y no lo sabías (o quizá sí).',
      img: 'https://ca-times.brightspotcdn.com/dims4/default/796e6c9/2147483647/strip/true/crop/1970x1108+39+0/resize/1200x675!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F12%2Fa5%2F79e097ccf62312d18a025f22ce48%2Fhoyla-recuento-11-cosas-aman-gatos-top-001',
    },
  ]);

  const [pos, setPos] = useState(0);

  useEffect(() => {
    if (document.querySelector('#title-react')) {
      typed.current = new Typed('#title-react', {
        strings: items.map((item) => item.text),
        typeSpeed: 40,
        backSpeed: 20,
        backDelay: 2000,
        loop: true,
        preStringTyped: (arrayPos: number, self: any) => {
          console.log(`preStringTyped ${arrayPos}`);
          // nextImage(arrayPos);
          setPos(arrayPos);
        },
        onStringTyped: (arrayPos: number, self: any) => {
          console.log(`onStringTyped ${arrayPos}`);
        },
      });
    }
    return () => {
      typed.current?.destroy();
    };
  }, []);

  return (
    <section className="container m-auto max-w-screen-lg">
      <div className="h-screen">
        <div className="flex h-full">
          <div className="w-1/2 flex justify-center flex-col">
            <h1 className="font-black uppercase text-5xl text-indigo-600 mb-5">
              <span id="title-react"></span>
            </h1>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus suscipit quibusdam
              eum vel, itaque sit delectus? Porro pariatur nemo tempora eligendi illum assumenda
              harum fuga, est tenetur nihil, corporis labore?
            </p>
            <div className="flex gap-2">
              <button className="bg-indigo-500 text-white rounded-full py-2 px-4">
                Contáctanos
              </button>
              <button className="bg-indigo-500 text-white rounded-full py-2 px-4">
                Ver soluciones
              </button>
            </div>
          </div>
          <div className="w-1/2 flex items-center">
            <ImageCarrousel images={items.map((item) => item.img)} pos={pos} />
          </div>
        </div>
      </div>
    </section>
  );
};
