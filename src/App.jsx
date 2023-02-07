import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/home/Home";
import { MovieDetail } from "./components/moviedetail/MovieDetail";

export function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </main>
  );
}

export default App;
