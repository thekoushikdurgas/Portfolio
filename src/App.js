import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./style.css";
import Main from "./Main";
import DeatailState from "./DeatailState";
// import Loader from "./Loader/Loader";
import Sign from "./Sign";
import SunMoon from "./SunMoon";
import Fullscreen from "./Fullscreen";

export default function App() {
  // document.oncontextmenu = function () {
  //   console.log("Right Click Disabled");
  //   return false;
  // };
  return (
    <DeatailState>
      {/* <Loader /> */}
      <SunMoon />
      <div className="absolute top-0 right-0 z-[5] w-full"><Sign /></div>
      <Router>
        <Routes>
          <Route path="/*" element={<Main title="Home" />} />
        </Routes>
      </Router>
      <div className="absolute top-0 right-0 z-[5] hidden md:block"><Fullscreen /></div>
    </DeatailState>
  );
}
