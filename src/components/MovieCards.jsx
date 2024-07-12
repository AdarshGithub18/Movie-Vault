import React from 'react';
// import cardImage from '../assets/cardImage.jpg';
const MovieCards = ({ posterPath, title }) => {
  return (
    <>
      <div
        className="bg-cover bg-center h-[50vh] w-56 m-5 rounded-md hover:cursor-pointer hover:scale-110 duration-300 flex flex-col justify-end"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${posterPath})`,
        }}
      >
        <div className="movie-title text-white font-semibold text-xl bg-black bg-opacity-50 text-center p-2">
          {title}
        </div>
      </div>
    </>
  );
};

export default MovieCards;
