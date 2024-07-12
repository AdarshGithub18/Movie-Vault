import React from 'react';
import banner from '../assets/banner.jpg';

const HeaderBanner = () => {
  return (
    <>
      <div
        className="banner  md:h-[65vh] w-full bg-cover bg-center flex items-end mt-2"
        style={{
          backgroundImage: `url(${banner}) `,
          //   backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="banner-movie-name   text-center w-full bg-slate-950 bg-opacity-50 p-4 text-white text-xl">
          Avengers Endgame
        </div>
      </div>
    </>
  );
};

export default HeaderBanner;
