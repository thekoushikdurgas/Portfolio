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
import Social from './Social';
import Error404 from '../404/404';
import Alert from '../Alert/Alert';

export default function Main() {
  const context = useContext(DeatailContext);
  const { mysocial,getmysocial,alertactive} = context;
  const location = (useLocation().pathname).split('/');
  const [socialvisible,setsocialvisible] = useState(false);
  const [projectvisible,setprojectvisible] = useState(false);
  document.title = `Home - TheKoushikDurgas`;
  const translatex =[121.425,73.1854,-52.0496,-98.407,10,10,10,10,10];
  const translatey =[-20,-80,-80,-20,-66,-122,-178,-234,-290];
  useEffect(() => {
    if(mysocial.length === 0){getmysocial()}
    // location[1] === "social" ? setsocialvisible(true) : setsocialvisible(false);
    location[1] === "dashboard" ? setprojectvisible(true) : setprojectvisible(false);
  }, [getmysocial, location, mysocial]);
  return (
    <>
      <Alert alertactive={alertactive} />
      <div className="tkdnavbar absolute bottom-0 z-[1000] w-full">
        <div className="tkdnav">
          <ul className="nav relative flex bg-tkd2 h-[80px] md:rounded-[2vw_2vw_0_0] rounded-[20px_20px_0_0] filtergoo justify-between items-center z-[2]">
            <div className={`nav-indicator w-[90px] sm:w-[105px] h-[105px] rounded-[50%] bg-tkd2 absolute bottom-[20px] left-0 right-0 m-auto z-[-5] transition-[height_0.3s] ${socialvisible?"socialvisible":""}`}>
              {mysocial.map((object, i)=>(
                <a href={object.link} className={`menu-item bg-tkd2 rounded-[50%] w-[70px] h-[70px] absolute flex text-tkd1 transition-transform ease-out items-center justify-center text-[21px] 2xl:hidden ${socialvisible?"ease-tkdanimation1":""}`} style={{transitionDuration: `${socialvisible?((i+1)*160):(70+(i*60))}ms`,transform : `translate(${socialvisible?translatex[i]:10}px, ${socialvisible?translatey[i]:5}px)`}} key={i} target="_blank" rel="noopener noreferrer">
                  <i className={object.icon}></i> 
                </a>
              ))}  
            </div>
            <li className="navitem cursor-pointer flex w-[20vw] h-full relative z-[2] items-center justify-center">
              <Link to="/about/" className={`text-tkd1 w-[105px] h-full flex z-[1] relative justify-center items-center flex-col after:content-[""] after:w-full after:h-[2px] after:bg-tkd1 after:absolute after:rounded-[100px] after:bottom-[-2px] ${location[1] === 'about' ? "navitemactive text-activecolor flex flex-row items-center after:bottom-[0]" : ""}`} onClick={() => {setsocialvisible(false);setprojectvisible(false);}}>
                <i className={`tkd7-about-me ${location[1] === 'about' ? "md:text-[45px] text-[36px]" : "md:text-[30px] text-[24px]"}`} />
                <span className={`md:text-[12px] text-[10px] mt-[5px] ${location[1] === 'about' ? "hidden" : "sm:block hidden"}`}>About me</span>
              </Link>
            </li>
            <li className="navitem cursor-pointer flex w-[20vw] h-full relative z-[2] items-center justify-center">
              <Link to="/resume/" className={`text-tkd1 w-[105px] h-full flex z-[1] relative justify-center items-center flex-col after:content-[""] after:w-full after:h-[2px] after:bg-tkd1 after:absolute after:rounded-[100px] after:bottom-[-2px] ${location[1] === "resume" ? "navitemactive text-activecolor flex flex-row items-center after:bottom-[0]" : ""}`} onClick={() => {setsocialvisible(false);setprojectvisible(false);}}>
                <i className={`fal fa-graduation-cap ${location[1] === 'resume' ? "md:text-[45px] text-[36px]" : "md:text-[30px] text-[24px]"}`} />
                <span className={`md:text-[12px] text-[10px] mt-[5px] ${location[1] === 'resume' ? "hidden" : "sm:block hidden"}`}>Qualification</span>
              </Link>
            </li>
            <li className="navitem cursor-pointer flex w-[20vw] h-full relative z-[2] items-center justify-center navitem1">
              <Link to="/social/" className={`text-tkd1 w-[105px] h-full flex z-[1] relative justify-center items-center flex-col gap-2 after:content-[""] after:w-full after:h-[2px] after:bg-tkd1 after:absolute after:rounded-[100px] translate-y-[-23px] ${location[1] === 'social' ? "navitemactive1 text-activecolor after:bottom-[-24px]" : "after:bottom-[-36px]"}`} onClick={() => { setsocialvisible(!socialvisible);setprojectvisible(false); }}>
                <div className="w-[60px] sm:w-[70px] h-[60px] sm:h-[70px] z-[200] rounded-[50%]">
                  <div className='rounded-[50%] overflow-hidden h-[100%] w-[100%]'>
                    <img src={myimg} alt="TheKoushikDurgas" className='scale-110 w-[100%]' />
                  </div>
                </div>
                <span className="md:text-[12px] text-[10px] flex flex-col sm:flex-row items-center leading-[1]"><span>Koushik</span><span>Chandra</span><span>Saha</span></span>
              </Link>
            </li>
            <li className="navitem cursor-pointer flex w-[20vw] h-full relative z-[2] items-center justify-center">
              <Link to="/dashboard/" className={`text-tkd1 w-[105px] h-full flex z-[1] relative justify-center items-center flex-col after:content-[""] after:w-full after:h-[2px] after:bg-tkd1 after:absolute after:rounded-[100px] after:bottom-[-2px] ${location[1] === 'dashboard' ? "navitemactive text-activecolor flex flex-row items-center after:bottom-[0]" : ""}`} onClick={() => { setsocialvisible(false);setprojectvisible(true); }} >
                <i className={`tkd10-project-work ${location[1] === 'dashboard' ? "md:text-[45px] text-[36px]" : "md:text-[30px] text-[24px]"}`} />
                <span className={`md:text-[12px] text-[10px] mt-[5px] ${location[1] === 'dashboard' ? "hidden" : "sm:block hidden"}`}>Works</span>
              </Link>
            </li>
            <li className="navitem cursor-pointer flex w-[20vw] h-full relative z-[2] items-center justify-center">
              <Link to="/contact/" className={`text-tkd1 w-[105px] h-full flex z-[1] relative justify-center items-center flex-col after:content-[""] after:w-full after:h-[2px] after:bg-tkd1 after:absolute after:rounded-[100px] after:bottom-[-2px] ${location[1] === 'contact' ? "navitemactive text-activecolor flex flex-row items-center after:bottom-[0]" : ""}`} onClick={() => { setsocialvisible(false);setprojectvisible(false); }} >
                <i className={`cib-minutemailer ${location[1] === 'contact' ? "md:text-[45px] text-[36px]" : "md:text-[30px] text-[24px]"}`} />
                <span className={`md:text-[12px] text-[10px] mt-[5px] ${location[1] === 'contact' ? "hidden" : "sm:block hidden"}`}>Contact</span>
              </Link>
            </li>
          </ul>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className='hidden'><defs><filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation={10} result="blur" /><feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo"/><feBlend in="SourceGraphic" in2="goo" /></filter></defs></svg>
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
      <div className="relative z-[3] md:h-[89vh] h-[87vh] text-tkd">
        <Routes>
          <Route exact path="" element={<Navigate to='/about/' />} />
          <Route exact path="about/" element={<About />}/>
          <Route exact path="resume/" element={<Resume />} />
          <Route exact path="social/" element={<Social />} />
          <Route exact path="dashboard/*" element={<Project />}/>
          <Route exact path="contact/" element={<Contactus />} />
          <Route exact path="404/" element={<Error404 />} />
          <Route path="*" element={<Navigate to="/404/" />} />
        </Routes>
      </div>
    </>
  );
}