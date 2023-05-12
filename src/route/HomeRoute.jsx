import React from "react";
import { Routes, Route } from "react-router-dom";
import RightSide from "../components/RightSide";
import MoviePage from "../pages/MoviePage";
import Header from "../components/Header";
import Helmet from "../components/Helmet";

const HomeRoute = () => {
  return (
    <Helmet title="Home">
      <div className="main-left">
        <Header />
        <div className="main__content">
          <Routes>
            <Route path="/" element={<MoviePage list="movie"/>} />
            <Route path="/tv-show" element={<MoviePage list="tv"/>} />
          </Routes>
        </div>
      </div>
      <RightSide />
    </Helmet>
  );
};

export default HomeRoute;
