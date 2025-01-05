// import React, { useRef, useState } from "react";
// import "./Banner.scss";
//
// import image1 from "../../../assets/images/24022021x2704a38a.jpg";
// import image2 from "../../../assets/images/1617102175_2.jpg";
// import image3 from "../../../assets/images/1629647029_7-kartinkin-com-p-vkusnaya-yeda-doma-yeda-krasivo-foto-7.jpg";
// import image4 from "../../../assets/images/C1qxlJfXgAYSCHl.jpg";
// import image5 from "../../../assets/images/depositphotos_14773785-stock-photo-hot-chinese-food-with-steam.jpg";
// import image6 from "../../../assets/images/eda-myasnye-blyuda-vkusno-zelen-zapechen-1185675.jpg";
//
// const images = [image1, image2, image3, image4, image5, image6];
//
// const Banner: React.FC = () => {
//   const bannerRef = useRef<HTMLDivElement>(null);
//   const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });
//
//   const handleMouseMove = (e: React.MouseEvent) => {
//     if (!bannerRef.current) return;
//
//     const { left, top } = bannerRef.current.getBoundingClientRect();
//     const x = e.clientX - left;
//     const y = e.clientY - top;
//
//     const distance = Math.sqrt(
//       (x - lastPosition.x) ** 2 + (y - lastPosition.y) ** 2,
//     );
//     if (distance < 50) return; // Минимальное расстояние для отображения нового изображения
//
//     setLastPosition({ x, y });
//
//     const img = new Image();
//     img.src = images[Math.floor(Math.random() * images.length)];
//     img.className = "banner__image";
//     img.style.left = `${x}px`;
//     img.style.top = `${y}px`;
//
//     bannerRef.current.appendChild(img);
//
//     setTimeout(() => {
//       img.style.opacity = "0";
//       img.style.transform = "scale(0.8)";
//     }, 70);
//
//     setTimeout(() => {
//       img.remove();
//     }, 400);
//   };
//
//   return (
//     <section className="banner" ref={bannerRef} onMouseMove={handleMouseMove}>
//       <div className="banner__content">
//         <h2 className="banner__title">Еда, Здоровье, Спорт</h2>
//         <p className="banner__subtitle">Блог Романа Кособуцкого</p>
//       </div>
//     </section>
//   );
// };
//
// export default Banner;

import React, { useRef, useState } from "react";
import "./Banner.scss";

import image1 from "../../../assets/images/24022021x2704a38a.jpg";
import image2 from "../../../assets/images/1617102175_2.jpg";
import image3 from "../../../assets/images/1629647029_7-kartinkin-com-p-vkusnaya-yeda-doma-yeda-krasivo-foto-7.jpg";
import image4 from "../../../assets/images/C1qxlJfXgAYSCHl.jpg";
import image5 from "../../../assets/images/depositphotos_14773785-stock-photo-hot-chinese-food-with-steam.jpg";
import image6 from "../../../assets/images/eda-myasnye-blyuda-vkusno-zelen-zapechen-1185675.jpg";

const images = [image1, image2, image3, image4, image5, image6];

const Banner: React.FC = () => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!bannerRef.current) return;

    const { left, top } = bannerRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const distance = Math.sqrt(
      (x - lastPosition.x) ** 2 + (y - lastPosition.y) ** 2,
    );
    if (distance < 50) return; // Минимальное расстояние для отображения нового изображения

    setLastPosition({ x, y });

    const img = new Image();
    img.src = images[Math.floor(Math.random() * images.length)];
    img.className = "banner__image";
    img.style.left = `${x}px`;
    img.style.top = `${y}px`;

    bannerRef.current.appendChild(img);

    setTimeout(() => {
      img.style.opacity = "0";
      img.style.transform = "scale(0.8)";
    }, 70);

    setTimeout(() => {
      img.remove();
    }, 400);
  };

  return (
    <section className="banner" ref={bannerRef} onMouseMove={handleMouseMove}>
      <div className="banner__content">
        <h1 className="banner__title">
          Еда и Рецепты <br /> Секреты здоровья и спорта
        </h1>
        <p className="banner__quote">
          "Тот, кто имеет причину жить, может вынести почти любое «как»." —
          Фридрих Ницше
        </p>
      </div>
      <div className="banner__footer">
        <p className="banner__author">Блог Романа Кособуцкого</p>
      </div>
    </section>
  );
};

export default Banner;
