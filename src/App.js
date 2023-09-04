import "./App.css";
import React from "react";
import Loginpage from "./components/loginpage.jsx";
import ReactDOM from "react-dom/client";
import Dashboard from "./components/dashboard.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loginpage />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
