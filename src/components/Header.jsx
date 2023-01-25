import React from 'react';
import { NavLink, Router } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex items-center justify-center gap-4 my-10">
      <span className="font-bold text-primary">TV Series</span>
      <span className="font-bold text-gray-500">Movies</span>
      <span className="font-bold text-gray-500">Anime</span>
    </header>
  );
};

export default Header;
