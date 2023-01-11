import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Bookings from "../pages/Bookings";


const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/bookings" element={<Bookings />} />}
      />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/bookings" element={<Bookings />} />
      
    </Routes>
  );
};

export default Router;