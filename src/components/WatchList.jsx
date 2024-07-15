import React from 'react';
import { IoSearch } from 'react-icons/io5';

const WatchList = ({ watchlist }) => {
  return (
    <>
      <div className="genre-divs flex justify-center m-10 gap-4 ">
        <div className="bg-[#F5C518] font-semibold p-2  rounded-sm h-9  w-24 justify-center items-center flex">
          Thriller
        </div>{' '}
        <div className="border-2 border-[#F5C518] text-[#F5C518] font-semibold p-2  rounded-sm h-9  w-24 justify-center items-center flex">
          Thriller
        </div>
      </div>

      <div className="movie-search flex justify-center my-10 w-full ">
        <input
          type="text"
          placeholder="Search Movies"
          className="w-[39rem] outline-none h-[2.5rem] rounded-sm px-5 items-center"
        />
      </div>
      <div className="rounded-sm overflow-hidden m-8">
        <table className="w-full text-center border-2 border-[#161616]">
          <thead className="border-2 border-[#161616]">
            <tr className="text-[#F5C518]">
              <th>Name</th>
              <th>Rating</th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody className="text-white">
            {watchlist.map((movie, index) => {
              return (
                <>
                  <tr className="border-2 border-[#161616]" key={movie.id}>
                    <td className="flex items-center px-4 py-6 ">
                      <img
                        className="h-35 w-28 rounded-md"
                        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path})`}
                        alt="movie-poster"
                      />
                      <div className="mx-10 text-2xl font-semibold">
                        {movie.original_title}
                      </div>
                    </td>
                    <td>{movie.vote_average}</td>
                    <td>{Math.floor(movie.popularity)}</td>
                    <td> </td>
                    <td className="text-red-600">Remove</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default WatchList;
