import React, { useState, useEffect } from "react";
import './loader.css';

export default function Loader() {
  var [word, setword] = useState(0);
  var [words, setwords] = useState([0]);
  var [buttonplaytext, setbuttonplaytext] = useState(null);
  useEffect(() => {
    const interval = setInterval(() => {
      if (word < 101) {
        setword(word + 1);
        setwords(word.toString().split(""));
      } else {
        clearInterval(interval);
        setbuttonplaytext(<div className="buttonplay fade-out" onClick={() => { document.getElementById("loader-wrapper").classList.add("fade-in"); document.getElementById("loader-wrapper").classList.add("d-none"); }} ><div className="video-play-button"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 104 104" enableBackground="new 0 0 104 104" xmlSpace="preserve" ><path fill="none" stroke="rgb(47, 250, 28)" strokeWidth={4} strokeMiterlimit={10} d="M26,35h52L52,81L26,35z" /><circle className="video-play-circle" fill="none" stroke="rgb(47, 250, 28)" strokeWidth={4} strokeMiterlimit={10} cx={52} cy={52} r={50} /></svg></div></div>);
      }
    }, 10);
    return () => clearInterval(interval);
  }, [word]);
  return (
    <div className="loader-wrapper" id="loader-wrapper">
      <div className="word" id="word">
        {words.map((i, j) => (
          <span className="done" key={j}>
            {i}
          </span>
        ))}
      </div>
      {buttonplaytext}
      <div className="gearbox">
        {["one", "two", "three"].map((i, j) => {
          return (
            <div key={j} className={`gear ${i}`}>
              <div className="gear-inner">
                {["one", "two", "three"].map((i, j) => {
                  return <div className="bar" key={j}></div>;
                })}
              </div>
            </div>
          );
        })}
        <div className="gear four large">
          <div className="gear-inner">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </div>
      <div className="body">
        <div className="loader">
          <span></span>
        </div>
      </div>
      <div className="longfazers">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
