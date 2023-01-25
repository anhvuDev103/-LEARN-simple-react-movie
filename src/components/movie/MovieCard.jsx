import React from 'react';

import Button from '../Button';
import { PlayCircleIc, StarIc } from '../Icons';

const MovieCard = ({ movieInfo }) => {
  return (
    <div className="flex flex-col gap-3 bg-[#2d2d2d] p-4 rounded-[16px]">
      <div className="w-full rounded-[12px] overflow-hidden h-[250px] select-none">
        <img
          src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
          alt=""
        />
      </div>
      <h3 className="text-[19px] font-semibold truncate">{ movieInfo.title }</h3>
      <div className="flex items-center justify-between">
        <span>{ String(movieInfo.release_date).slice(0, 4) }</span>
        <span className="flex items-center justify-between gap-3 text-yellow-400">
          <span className='text-white'>{ movieInfo.vote_average }</span>
          <StarIc />
        </span>
      </div>
      <Button className="!px-5 !py-3 bg-primary" Icon={PlayCircleIc}>
        Watch now
      </Button>
    </div>
  );
};

export default MovieCard;