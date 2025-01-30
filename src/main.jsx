import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ViewDetails from "./ViewDetails.jsx";
import Schedule from "./Schedule.jsx";
import MainLayout from "./MainLayout";
import Login from "./Login.jsx"; 
import Signup from "./SignUp.jsx";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import React, { useState } from "react";
const Main = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/"
          element={isAuthenticated ? (<MainLayout />) : (<Navigate to="/login" replace />)}>
          <Route index element={<App />} />
          <Route path="/details" element={<ViewDetails />} />
          <Route path="/schedule" element={<Schedule />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

createRoot(document.getElementById("root")).render(<Main />);