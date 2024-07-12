import React, { useEffect, useState } from 'react';
import MovieCards from './MovieCards';
import axios from 'axios';
import { FaArrowRightLong } from 'react-icons/fa6';
import { FaArrowLeft } from 'react-icons/fa6';

const Movies = () => {
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
        `https://api.themoviedb.org/3/movie/popular?api_key=1405cfdcc49c4ef45a5b986019f2083b&language=en-US&page=${pages}
`
      )
      .then((res) => setMovies(res.data.results));
  }, [pages]);
  console.log(movies);

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
                posterPath={movieItem.poster_path}
                title={movieItem.original_title}
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
