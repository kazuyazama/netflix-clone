import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Movie = ({ movies }) => {
  const [like, setLike] = useState(false);

  return (
    <div
      key={movies.id}
      className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px]  inline-block cursor-pointer p-2 relative"
    >
      <img
        className="w-full h-auto block "
        src={`https://image.tmdb.org/t/p/w500/${movies.backdrop_path}`}
        alt={movies.title}
      />
      <div className=" absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 ">
        <p className=" whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
          {movies.title}
        </p>
        <p className="">
          {like ? (
            <FaHeart className=" absolute top-4 left-4 text-gray-300" />
          ) : (
            <FaRegHeart className=" absolute top-4 left-4 texy-gray-400" />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;
