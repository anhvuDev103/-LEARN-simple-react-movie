import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import useSWR from 'swr'
import 'swiper/scss'

import { fetcher } from '../../utils/movieFetcher';
import MovieCard from './MovieCard';

const MovieList = ({type = 'now_playing'}) => {
  const [movies, setMovies] = useState([])
  const { data, error, isLoading } = useSWR(`https://api.themoviedb.org/3/movie/${type}?api_key=aa3572abb9b9cf6df533a4f3392bd512`, fetcher)
  
  useEffect(() => {
    if (data && data.results) setMovies(data.results)
  }, [JSON.stringify(data)])
  return (
    <div className="movie-list">
      <Swiper grabCursor spaceBetween={40} slidesPerView={"auto"}>
       {movies.length > 0 && movies.map(movie => (
        <SwiperSlide key={movie.id}>
          <MovieCard movieInfo={movie}/>
        </SwiperSlide>
       ))}
      </Swiper>
    </div>
  );
};

export default MovieList;