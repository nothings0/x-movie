import React from "react";
import { Routes, Route } from "react-router-dom";
import LeftSide from "../components/LeftSide";
import List from "../pages/List";
import HomeRoute from "./HomeRoute";
import Detail from "../pages/Detail";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import RecentPage from "../pages/RecentPage";
import Setting from "../pages/Setting";

const Layout = () => {
  return (
    <>
      <LeftSide />
      <div className="main">
        <Routes>
          <Route path="*" element={<HomeRoute />} />
          <Route path="/movie" element={<List title="Movie" category="movie" type="popular"/>} />
          <Route path="/tv" element={<List title="TV" category="tv" type="popular"/>} />
          <Route path="/recent" element={<RecentPage/>} />
          <Route path="/:category/:id" element={<Detail />} />
          <Route path='/:category/search/:keyword' element={<List/>}/>
          <Route path='/:category/a/:type' element={<List/>}/>
          <Route path='/search/:keyword' element={<Detail/>}/>
          <Route path='/login' element={<LoginForm/>}/>
          <Route path='/register' element={<RegisterForm/>}/>
          <Route path='/settings' element={<Setting/>}/>
        </Routes>
      </div>
    </>
  );
};

export default Layout;
