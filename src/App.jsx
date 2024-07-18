import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Movies from './components/Movies';
import WatchList from './components/WatchList';
import HeaderBanner from './components/HeaderBanner';
import { useEffect, useState } from 'react';

function App() {
  let [watchlist, setWatchlist] = useState([]);

  const handleAddWatchlist = (movieItem) => {
    let newWatchlist = [...watchlist, movieItem];
    setWatchlist(newWatchlist);

    localStorage.setItem('movies', JSON.stringify(newWatchlist));
  };
  // handleing localstorage
  useEffect(() => {
    let moviesFromLocalStronage = localStorage.getItem('movies');
    if (!moviesFromLocalStronage) {
      return;
    } else {
      setWatchlist(JSON.parse(moviesFromLocalStronage));
    }
  }, []);

  const handleRemoveFromWatchlist = (movieItem) => {
    let filteredMovies = watchlist.filter((movie) => {
      return movie.id !== movieItem.id;
    });

    setWatchlist(filteredMovies);
    // console.log(watchlist);
  };
  // console.log(watchlist);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeaderBanner />
                <Movies
                  handleAddWatchlist={handleAddWatchlist}
                  handleRemoveFromWatchlist={handleRemoveFromWatchlist}
                  watchlist={watchlist}
                />
              </>
            }
          />
          <Route
            path="/watchlist"
            element={
              <WatchList watchlist={watchlist} setWatchlist={setWatchlist} />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
