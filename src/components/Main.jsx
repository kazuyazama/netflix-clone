import React, { useEffect, useState } from "react";
import requests from "../request";
import swr from "swr";
import { fetcher } from "../fetcher";

const Main = () => {
  const { data, error, isLoading } = swr(requests.requestPopular, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const { results } = data;

  //Math.randomに配列の長さをかけることによりresultsの配列内に絞ってMarh.floorで最も近い整数で切り捨てる
  const movie = results[Math.floor(Math.random() * results.length)];

  //overviewの文字数を制御する関数
  const trunscateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[550px] ">
      <div className="w-full h-full">
        <span className=" absolute h-[550px] w-full bg-gradient-to-r from-black"></span>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt={movie.title}
        />
        <div className=" absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{movie.title}</h1>
          <div className="my-4">
            <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
              Play
            </button>
            <button className="border  text-white border-gray-300 py-2 px-5 ml-4">
              Watch
            </button>
          </div>
          <p className="text-gray-400 text-sm">release: {movie.release_date}</p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 ">
            {trunscateString(movie.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
