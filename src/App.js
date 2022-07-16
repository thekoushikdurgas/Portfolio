import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./component/css/keyframe.css";
import "./component/css/style.css";
import Main from "./component/Main/Main";
import DeatailState from "./component/context/DeatailState";
// import Loader from "./component/Loader/Loader";
import SunMoon from "./component/SunMoon/SunMoon";
// import Popup from "./component/Popup/Popup";

export default function App() {
  // const [visible1, setvisible1] = React.useState(false);
  // document.onmouseenter = function () {
  //   setvisible1(false);
  // };
  // document.onmouseleave = function () {
    // setvisible1(true);
  // };
  // document.oncontextmenu = function () {
  //   console.log("Right Click Disabled");
  //   return false;
  // };
  return (
    <DeatailState>
      {/* <Loader /> */}
      <SunMoon />
      {/* <Popup showclose={visible1} /> */}
      <Router>
        <Routes>
          <Route path="/*" element={<Main title="Home" />} />
        </Routes>
      </Router>
    </DeatailState>
  );
}
