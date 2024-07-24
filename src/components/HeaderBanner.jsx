import React, { useEffect, useState } from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr';

// importing all header banners
import img1 from '../assets/Avengers.jpg';
import img2 from '../assets/Cars.jpg';
import img3 from '../assets/johnwick.jpg';
import img4 from '../assets/oppenheimer.jpg';
import img5 from '../assets/Scream.jpg';
import img6 from '../assets/spiderman.jpg';
import img7 from '../assets/Theboys.jpg';
import img8 from '../assets/Theroundup.jpg';

const imgArray = [
  { url: img1, title: 'The Avengers' },
  { url: img2, title: 'Cars' },
  { url: img3, title: 'John Wick' },
  { url: img4, title: 'Oppenheimer' },
  { url: img5, title: 'Scream' },
  { url: img6, title: 'Spiderman' },
  { url: img7, title: 'The Boys' },
  { url: img8, title: 'The Roundup' },
];

const HeaderBanner = () => {
  const [slider, setSlider] = useState(0);

  //functions for next and previous buttons
  function handleNext() {
    setSlider(slider == imgArray.length - 1 ? 0 : slider + 1);
  }

  function handlePrev() {
    setSlider(slider == 0 ? imgArray.length - 1 : slider - 1);
  }

  //for creating auto slides
  useEffect(() => {
    const autoSlide = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(autoSlide);
  }, [slider]);

  return (
    <>
      <div className="slides w-full mt-5 h-[80vh]">
        {imgArray.map((img, idx) => {
          return (
            <div
              key={idx}
              className={`slider w-full h-[80vh]  flex items-end justify-center m-auto relative ${
                slider == idx ? 'block' : 'hidden'
              }`}
            >
              <img src={img.url} alt="" className="w-full h-[80vh]" />
              <span className="text-white text-xl font-semibold absolute bg-black text-center bg-opacity-55 w-full p-3 m-3">
                {img.title}
              </span>
              <div className="w-full slideBtns absolute top-[50%] flex justify-between text-white text-[60px] px-4 ">
                <button onClick={handlePrev}>
                  <GrPrevious />
                </button>
                <button onClick={handleNext}>
                  <GrNext />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HeaderBanner;
