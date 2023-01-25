import React from 'react';

const Button = ({ children, Icon = null, className }) => {
  return (
    <button
      className={`px-3 py-2 font-semibold rounded-lg flex gap-2 justify-center items-center hover:opacity-70 transition-opacity duration-300 ${className}`}
    >
      {children} {Icon && <Icon />}
    </button>
  );
};

export default Button;
