import React, { createRef, forwardRef, useRef, useState } from "react";
import swr from "swr";
import { fetcher } from "../fetcher";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useSlide } from "../hooks/useSlide";

const Row = ({ title, fetchURL }) => {
  const { data, error, isLoading } = swr(fetchURL, fetcher);

  // const scrollRef = useRef(null);

  const { scrollRef, slideLeft, slideRight } = useSlide();

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  //横スライドする為の関数
  // const slideLeft = (length) => {
  //   const slider = scrollRef.current;
  //   slider.scrollLeft = slider.scrollLeft - length;
  // };

  // const slideRight = (length) => {
  //   const slider = scrollRef.current;
  //   slider.scrollLeft = slider.scrollLeft + length;
  // };

  return (
    <>
      <h2 className="font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={() => slideLeft(500)}
          size={40}
          className=" bg-white text-black rounded-full left-0  absolute  opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
        <div
          ref={scrollRef}
          className="w-full h-full  overflow-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative  "
        >
          {data.results.map((movies) => (
            <Movie key={movies.id} movies={movies} />
          ))}
        </div>
        <MdChevronRight
          onClick={() => slideRight(500)}
          size={40}
          className=" bg-white text-black rounded-full  absolute right-0  opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
      </div>
    </>
  );
};

export default Row;
