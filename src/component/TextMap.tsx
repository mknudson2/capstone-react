import React from "react";

interface TextMapProps {
  imgUrl: string;
}

const TextMap: React.FC<TextMapProps> = ({ imgUrl }) => { 
  return (
      <img src={imgUrl} alt="Selected Map Image" />

  );
};

export default TextMap;
