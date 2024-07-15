import React from 'react';
import { BsBookmarkHeartFill } from 'react-icons/bs';
import { MdBookmarkRemove } from 'react-icons/md';

const MovieCards = ({
  posterPath,
  title,
  handleAddWatchlist,
  movieItem,
  handleRemoveFromWatchlist,
  watchlist,
}) => {
  //function to check weather the movie exist in array or not
  // function itExist(movieItem) {
  //   for (let i = 0; i < watchlist.length; i++) {
  //     if (watchlist[i].id == movieItem.id) {
  //       return true;
  //     }
  //   }
  //   return false;
  // }

  const itExist = (movieItem) => {
    return watchlist.some((movie) => movie.id === movieItem.id);
  };

  return (
    <>
      <div
        className="bg-cover relative bg-center h-[50vh] w-56 m-5 rounded-md hover:cursor-pointer hover:scale-110 duration-300 flex flex-col justify-end"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${posterPath})`,
        }}
      >
        {itExist(movieItem) ? (
          <div
            title="Remove from watchlist"
            className="  absolute top-2 right-2 text-[#FE0000] h-8 w-8 flex justify-center items-center rounded-sm text-3xl"
            onClick={() => handleRemoveFromWatchlist(movieItem)}
          >
            <MdBookmarkRemove />
          </div>
        ) : (
          <div
            title="Add to watchlist"
            className="  absolute top-2 right-2 text-[#FE0000] h-8 w-8 flex justify-center items-center rounded-sm text-3xl"
            onClick={() => handleAddWatchlist(movieItem)}
          >
            <BsBookmarkHeartFill />
          </div>
        )}

        <div className="movie-title text-white font-semibold text-xl bg-black bg-opacity-50 text-center p-2">
          {title}
        </div>
      </div>
    </>
  );
};

export default MovieCards;
