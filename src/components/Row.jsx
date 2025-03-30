import React, { useState, useEffect, useCallback } from 'react'
import axios from '../api/axios'
import './Row.css'

const Row = ({ title, id, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  const fetchMovieData = useCallback(async () => {
    const response = await axios.get(fetchUrl);
    setMovies(response.data.results);
  }, [fetchUrl]);

  useEffect(() => {
    fetchMovieData();
  }, [fetchMovieData]);

  return (
    <div>
      <h2>{title}</h2>
      <div className="slider">

        {/* 왼쪽 화살표*/}
        <div className="slider__arrow-left">
          <span className="arrow">
            {'<'}
          </span>
        </div>

        {/* 영화 */}
        <div id={id} className="row__posters">
          {movies.map(movie => (
            <img
              key={movie.id}
              className="row__poster"
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt={movie.name}
            />
          ))}
        </div>

        {/* 오른쪽 화살표 */}
        <div className="slider__arrow-right">
          <span className="arrow">
            {'>'}
          </span>
        </div>

      </div>
    </div>
  )
}

export default Row
