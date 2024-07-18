import React, { useState } from 'react';
import { FaArrowUpLong } from 'react-icons/fa6';
import { FaArrowDownLong } from 'react-icons/fa6';
import genreId from '../utility';

const WatchList = ({ watchlist, setWatchlist }) => {
  const [search, setSearch] = useState('');

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let handleDelete = (id) => {
    let updatedWatchlist = watchlist.filter((movie) => {
      return movie.id != id;
    });
    setWatchlist(updatedWatchlist);
    localStorage.setItem('movies', JSON.stringify(updatedWatchlist));
  };

  return (
    <>
      {/* genre sections */}
      <div className="genre-divs flex justify-center m-10 gap-4 ">
        <div className="bg-[#F5C518] font-semibold p-2  rounded-sm h-9  w-24 justify-center items-center flex">
          Thriller
        </div>{' '}
        <div className="border-2 border-[#F5C518] text-[#F5C518] font-semibold p-2  rounded-sm h-9  w-24 justify-center items-center flex">
          Thriller
        </div>
      </div>

      {/* search input */}
      <div className="movie-search flex justify-center my-10 w-full ">
        <input
          type="text"
          placeholder="Search Movies"
          className="w-[39rem] outline-none h-[2.5rem] rounded-sm px-5 items-center"
          onChange={handleSearch}
          value={search}
        />
      </div>

      {/* table section */}
      <div className="rounded-sm overflow-hidden m-8 flex flex-wrap">
        <table className="w-full  text-center border-2 border-[#161616]">
          <thead className="border-2 border-[#161616]">
            <tr className="text-[#F5C518]">
              <th>Name</th>
              <div className="flex gap-3 items-center justify-center">
                <div className="cursor-pointer">
                  <FaArrowUpLong />
                </div>
                <th>Rating</th>
                <div className="cursor-pointer">
                  <FaArrowDownLong />
                </div>
              </div>

              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody className="text-white">
            {/* filter is use for search filter */}
            {watchlist
              .filter((movie) => {
                return movie.original_title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((movie, index) => {
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
                      <td>{genreId[movie.genre_ids[0]]}</td>
                      <td
                        onClick={() => handleDelete(movie.id)}
                        className="text-red-600 cursor-pointer"
                      >
                        Remove
                      </td>
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
