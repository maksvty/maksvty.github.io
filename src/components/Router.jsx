import React, {Suspense} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./screens/home/Home.jsx";
import Header from "./Header/Header.jsx";
import MainMenu from "./MainMenu/MainMenu.jsx";
import Menu from "./screens/Menu/Menu";
import CategoryPage from "./screens/CategoryPage/CategoryPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <main className="app-main">
          <Routes>
            <Route element={<Home />} path='/' />
            <Route element={<Menu />} path='/menu' />
            <Route element={<CategoryPage />} path='/menu/:categoryId' />

            <Route element={<div>Not found</div>} path='*' />
          </Routes>
        </main>
        <MainMenu />
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
