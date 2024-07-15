import React, { useEffect, useState } from 'react';
import MovieCards from './MovieCards';
import axios from 'axios';
import { FaArrowRightLong } from 'react-icons/fa6';
import { FaArrowLeft } from 'react-icons/fa6';
const myApiKey = import.meta.env.VITE_API_KEY;

const Movies = ({
  handleAddWatchlist,
  handleRemoveFromWatchlist,
  watchlist,
}) => {
  const [movies, setMovies] = useState([]);
  const [pages, setPages] = useState(1);

  function pageForward() {
    return setPages((prevPage) => prevPage + 1);
  }

  function pageBackward() {
    if (pages > 1) {
      return setPages((prevPage) => prevPage - 1);
    }
  }
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${myApiKey}&language=en-US&page=${pages}
`
      )
      .then((res) => setMovies(res.data.results));
  }, [pages]);
  // console.log(movies);

  return (
    <>
      <div className="movies mt-8">
        <div className="heading  text-center  font-semibold text-3xl text-[#F5C518]">
          Trending Movies
        </div>
        <div className="cards mt-6 flex flex-wrap justify-around">
          {movies.map((movieItem, index) => {
            return (
              <MovieCards
                key={movieItem.id}
                posterPath={movieItem.poster_path}
                title={movieItem.original_title}
                handleAddWatchlist={handleAddWatchlist}
                movieItem={movieItem}
                handleRemoveFromWatchlist={handleRemoveFromWatchlist}
                watchlist={watchlist}
              />
            );
          })}
        </div>
      </div>
      <div className="pages bg-[#161616] text-[#F5C518] flex text-center justify-center text-2xl gap-5 p-3 m-5 ">
        <button onClick={pageBackward}>{<FaArrowLeft />}</button>
        {pages} <button onClick={pageForward}>{<FaArrowRightLong />}</button>
      </div>
    </>
  );
};

export default Movies;
