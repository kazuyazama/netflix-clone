import React from "react";
import { Outlet } from "react-router-dom";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../request";

const Home = () => {
  return (
    <>
      <Main />
      <Row title="Up Coming" fetchURL={requests.requestUpcoming} />
      <Row title="Horror" fetchURL={requests.requestHorror} />
      <Row title="Popular" fetchURL={requests.requestPopular} />
      <Row title="TopRated" fetchURL={requests.requestTopRated} />
      <Row title="Trending" fetchURL={requests.requestTrending} />
    </>
  );
};

export default Home;
