import React from "react";
import { BrowserRouter, Routes as Router, Route } from "react-router-dom";

import { Home } from "../Pages/Home";
import { NotFound } from "../Pages/NotFound";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
      </Router>
    </BrowserRouter>
  );
};