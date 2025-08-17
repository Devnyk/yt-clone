import React from "react";
import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import VideoPlayerPage from "../pages/VideoPlayerPage";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/video/:id" element={<VideoPlayerPage />} />
    </Routes>
  );
};

export default MainRoute;