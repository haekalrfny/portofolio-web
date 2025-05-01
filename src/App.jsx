import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { menu } from "./data/Routes.jsx";

// components
import BottomBar from "./components/BottomBar";
import Header from "./components/Header";

export default function App() {
  return (
    <Router>
      <div className="bg-[#0b0b0b] min-h-screen">
        <Routes>
          {menu.map((i, idx) => (
            <Route key={idx} path={i.path} element={i.element} />
          ))}
        </Routes>
      </div>
      <div className="fixed top-0 w-full z-50">
        <Header />
      </div>
      <div className="fixed bottom-0 flex justify-center w-full z-50 pb-6 px-6">
        <BottomBar />
      </div>
    </Router>
  );
}
