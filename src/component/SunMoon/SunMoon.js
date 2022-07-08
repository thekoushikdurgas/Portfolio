import React,{useState,useEffect} from "react";
import "./sunmoon.css";
var SunCalc = require("suncalc");

export default function SunMoon() {
  const csslistjson = [
    { topcsslist: 70, leftcsslist: -10, rotatecsslist: 315 },
    { topcsslist: 60, leftcsslist: -1, rotatecsslist: 322.5 },
    { topcsslist: 50, leftcsslist: 8.2, rotatecsslist: 330 },
    { topcsslist: 40, leftcsslist: 17.3, rotatecsslist: 337.5 },
    { topcsslist: 30, leftcsslist: 26.4, rotatecsslist: 345 },
    { topcsslist: 20, leftcsslist: 35.5, rotatecsslist: 352.5 },
    { topcsslist: 10, leftcsslist: 44.6, rotatecsslist: 360 },
    { topcsslist: 20, leftcsslist: 53.7, rotatecsslist: 7.5 },
    { topcsslist: 30, leftcsslist: 62.8, rotatecsslist: 15 },
    { topcsslist: 40, leftcsslist: 71.9, rotatecsslist: 22.5 },
    { topcsslist: 50, leftcsslist: 81, rotatecsslist: 30 },
    { topcsslist: 60, leftcsslist: 90.1, rotatecsslist: 37.5 },
  ];
  const [cssposition, setcssposition] = useState(0);
  const [daynight, setdaynight] = useState(false);
  const [lsborderradius, setlsborderradius] = useState("");
  const changedaynight = (t) => {
    setdaynight(t);
    var className = t ? "bodydark" : "";
    document.body.className = className;
    if (t) {
      moonPhase(new Date());
    }
  };
  const handleOnChange = () => {
    changedaynight(!daynight);
  };
  const positionsunmoon = () => {
    var e = new Date().getHours(),
      t = true;
    if (e <= 5) {
      e += 6;
    } else if (e >= 6 && e <= 17) {
      t = false;
      e -= 6;
    } else {
      e -= 18;
    }
    changedaynight(t);
    setcssposition(e);
  };
  const moonPhase = (e) => {
    var t = SunCalc.getMoonIllumination(e);
    var n = t.fraction;
    var shadowRadius = Math.abs(50 - 100 * n);
    setlsborderradius(shadowRadius + "%/50%");
  };
  setTimeout(() => {
    positionsunmoon();
  }, 6e4);
  useEffect(() => {
    positionsunmoon();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="background"></div>
      <div className="sun" style={{ left: csslistjson[cssposition].leftcsslist + "%", top: csslistjson[cssposition].topcsslist + "%", transform:"rotate(" + csslistjson[cssposition].rotatecsslist + "deg)",}}>
        <div className="sun-anime">
          <div className="sun-ball"></div>
          {[...Array(12).keys()].map((i) => {
            return (
              <div className="sun-light" key={i}>
                <b></b>
                <s></s>
              </div>
            );
          })}
        </div>
      </div>
      <div className="moon" style={{ left: csslistjson[cssposition].leftcsslist + "%", top: csslistjson[cssposition].topcsslist + "%", transform:"rotate(" + csslistjson[cssposition].rotatecsslist + "deg)",}}>
        <div className="shadow" id="shadow" style={{ borderRadius: lsborderradius }}></div>
        <div className="light" style={{ borderRadius: lsborderradius }}></div>
      </div>
      <div className="tkddarklight">
        <label>
          <input className="toggle-checkbox" type="checkbox" checked={daynight} onChange={handleOnChange} />
          <div className="toggle-slot">
            <div className="sun-icon-wrapper">
              <i className="fa fa-sun-bright" />
            </div>
            <div className="moon-icon-wrapper">
              <i className="fas fa-moon-cloud fa-fw" />
            </div>
          </div>
        </label>
      </div>
    </>
  );
}
