import React, { useEffect, useState } from 'react';
import useSWR from 'swr'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss'

import { PlayCircleIc, PlusIc } from './Icons';
import { fetcher } from '../utils/movieFetcher';
import Button from './Button';

const Banner = () => {
  const [movies, setMovies] = useState([])
  console.log("Banner ~ movies", movies)
  const { data, error, isLoading } = useSWR(`https://api.themoviedb.org/3/movie/upcoming?api_key=aa3572abb9b9cf6df533a4f3392bd512`, fetcher)
  
  useEffect(() => {
    if (data && data.results) setMovies(data.results)
  }, [JSON.stringify(data)])
  return (
    <section className="w-full h-[400px] body-container rounded-lg overflow-hidden">
      <div className="banner-swiper">
        <Swiper slidesPerView={'auto'}>
          {movies.length > 0 && movies.map(movie => (
            <SwiperSlide key={movie.id}>
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <img
                  className="object-cover object-center w-full h-full select-none"
                  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                  alt="banner"
                />
                <div className="absolute z-10 flex flex-col gap-5 bottom-10 left-10">
                  <h2 className="text-[50px] font-bold">{ movie.title }</h2>
                  <div className="tag-container">
                    <Button className="border-2 border-white rounded-lg cursor-pointer border-opacity-20">
                      Action
                    </Button>
                  </div>
                  <div className="flex gap-5 action-container">
                    <Button Icon={PlayCircleIc} className="!px-5 !py-3 bg-primary">
                      Watch
                    </Button>
                    <Button className="bg-gray-500 font-normal w-[48px] text-[30px] px-0 py-0 bg-opacity-50">
                      <PlusIc />
                    </Button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* <div className="relative w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <img
          className="object-cover object-center w-full h-full select-none"
          src="https://nld.mediacdn.vn/2019/4/25/3515432-endgamedek-15561710302491765206118.jpg"
          alt="banner"
        />
        <div className="absolute z-10 flex flex-col gap-5 bottom-10 left-10">
          <h2 className="text-[50px] font-bold">Avengers: Endgame</h2>
          <div className="tag-container">
            <Button className="border-2 border-white rounded-lg cursor-pointer border-opacity-20">
              Action
            </Button>
          </div>
          <div className="flex gap-5 action-container">
            <Button Icon={PlayCircleIc} className="!px-5 !py-3 bg-primary">
              Watch
            </Button>
            <Button className="bg-gray-500 font-normal w-[48px] text-[30px] px-0 py-0 bg-opacity-50">
              <PlusIc />
            </Button>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Banner;
