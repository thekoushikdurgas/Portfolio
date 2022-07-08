import React,{useState,useEffect,useContext} from 'react';
import { Link, Route, Routes, useLocation, Navigate } from "react-router-dom";
import DeatailContext from "../context/DeatailContext";
import myimg from '../css/tkd.jpg';
import Fullscreen from '../Fullscreen/Fullscreen';
import foglow from '../css/fog-low.png';
import About from './About';
import Resume from './Resume';
import Project from './Project';
import Contactus from './Contactus';
import Error404 from '../404/404';
import Alert from '../Alert/Alert';

export default function Main() {
  const context = useContext(DeatailContext);
  const { mysocial,getmysocial,alertactive} = context;
  const location = (useLocation().pathname).split('/');
  const [socialvisible,setsocialvisible] = useState(false);
  const [projectvisible,setprojectvisible] = useState(false);
  document.title = `Home - TheKoushikDurgas`;
  useEffect(() => {
    if(mysocial.length === 0){getmysocial()}
    // location[1] === "social" ? setsocialvisible(true) : setsocialvisible(false);
    location[1] === "dashboard" ? setprojectvisible(true) : setprojectvisible(false);
  }, [getmysocial, location, mysocial]);
  return (
    <>
      <Alert alertactive={alertactive} />
      <div className="tkdnavbar">
        <div className="tkdnav">
          <ul className="nav">
            <div className={`nav-indicator ${socialvisible?"socialvisible":""}`}>
              {mysocial.map((object, i)=>(
                <a href={object.link} className="menu-item" key={i} target="_blank" rel="noopener noreferrer">
                  <i className={object.icon}></i> 
                </a>
              ))}  
            </div>
            <li className="navitem">
              <Link to="/about/" className={location[1] === 'about' ? "navitemactive" : ""} onClick={() => {setsocialvisible(false);setprojectvisible(false);}}>
                <i className="tkd7-about-me" />
                <span className="title">About me</span>
              </Link>
            </li>
            <li className="navitem">
              <Link to="/resume/" className={location[1] === "resume" ? "navitemactive" : ""} onClick={() => {setsocialvisible(false);setprojectvisible(false);}}>
                <i className="fal fa-graduation-cap" />
                <span className="title">Education</span>
              </Link>
            </li>
            <li className="navitem navitem1">
              <Link to="/social/" className={location[1] === 'social' ? "navitemactive1" : ""} onClick={() => { setsocialvisible(!socialvisible);setprojectvisible(false); }}>
                <div className="titleimg"><div><img src={myimg} alt="TheKoushikDurgas" /></div></div>
                <span className="title"><span>Koushik</span><span>Chandra</span><span>Saha</span></span>
              </Link>
            </li>
            <li className="navitem">
              <Link to="/dashboard/" className={location[1] === 'dashboard' ? "navitemactive" : ""} onClick={() => { setsocialvisible(false);setprojectvisible(true); }} >
                <i className="tkd10-project-work" />
                <span className="title">Works</span>
              </Link>
            </li>
            <li className="navitem">
              <Link to="/contact/" className={location[1] === 'contact' ? "navitemactive" : ""} onClick={() => { setsocialvisible(false);setprojectvisible(false); }} >
                <i className="cib-minutemailer" />
                <span className="title">Contact</span>
              </Link>
            </li>
          </ul>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="filter-svg"><defs><filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation={10} result="blur" /><feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo"/><feBlend in="SourceGraphic" in2="goo" /></filter></defs></svg>
          <nav className={`dashboardnav ${projectvisible?'projectvisible':''}`}>
              <div className="nav-bar">
                <div className="darkLight-searchBox">
                  <div className="searchBox">
                    <div className="search-field">
                      <input type="text" placeholder="Search..." />
                      <i className="fas fa-search"></i>
                    </div>
                  </div>
                </div>
                  <ul className="nav-links">
                    <div>
                      <li className={`${location[2] === "project" ?"active":""}`} onClick={()=>{}}><Link to="/dashboard/project/"><i className="ti ti-code"></i><span>Project</span></Link></li>
                      <li className={`${location[2] === "software" ?"active":""}`} onClick={()=>{}}><Link to="/dashboard/software/"><i className="tkd9-laptop-report"></i><span>Software</span></Link></li>
                    </div>
                    <div>
                      <li className={`${location[2] === "website" ?"active":""}`} onClick={()=>{}}><Link to="/dashboard/website/"><i className="tkd2-browser"></i><span>Website</span></Link></li>
                      <li className={`${location[2] === "game" ?"active":""}`} onClick={()=>{}}><Link to="/dashboard/game/"><i className="tkd9-game-controller"></i><span>Game</span></Link></li>
                    </div>
                  </ul>
                </div>
          </nav>
        </div>
      </div>
      <div className="portfolio">
        <div className="presentation-subtitle text-center">
          <div className="stage">{[...Array(20).keys()].map((i) => {return <div className="layer" key={i}></div>})}</div>
        </div>
        <div className="tkdwrapper">
          <div className="fog-low"><img src={foglow} alt="" /></div>
          <div className="fog-low right"><img src={foglow} alt="" /></div>
          <div className="moving-clouds"></div>
        </div>
        <div className="fullscreendiv"><Fullscreen /></div>
      </div>
      <div className="pages">
        <Routes>
          <Route exact path="" element={<></>} />
          <Route exact path="about/" element={<About />}/>
          <Route exact path="resume/" element={<Resume />} />
          <Route exact path="social/" element={<></>} />
          <Route exact path="dashboard/*" element={<Project />}/>
          <Route exact path="contact/" element={<Contactus />} />
          <Route exact path="404/" element={<Error404 />} />
          <Route path="*" element={<Navigate to="/404/" />} />
        </Routes>
      </div>
    </>
  );
}