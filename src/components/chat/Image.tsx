import React, { FC } from 'react';

interface ImageProps {
  url: string;
}

const Image: FC<ImageProps> = ({ url }) => {
  return (
    <img
      className="bg-cover rounded-lg shadow-lg"
      src={url}
      alt="Generated artwork"
      loading="lazy"
    />
  );
};

export default Image;
