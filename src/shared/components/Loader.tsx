import React from 'react';

interface LoaderProps {
  size?: string;
  className?: string;
}

const Loader = ({ size = '50px', className = '' }: LoaderProps) => {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div
        className='w-full h-full border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin'
        style={{
          width: size,
          height: size,
        }}
      ></div>
    </div>
  );
};

export default Loader;
