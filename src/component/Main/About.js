import React, { useEffect, useContext } from "react";
import DeatailContext from "../context/DeatailContext";
import Loading from "../Loading/Loading";
import tkd1 from "../css/tkd1.jpg";
import Scrambles from './Scrambles';

export default function About() {
  const context = useContext(DeatailContext);
  const { mydetail, myservice, myskills, mylanguages, getmydetail, getmyservice, getmyskills, getmylanguages } = context;
  document.title = `About - TheKoushikDurgas`;
  useEffect(() => {
    if (mydetail.length === 0) {getmydetail();}
    if (myservice.length === 0) {getmyservice();}
    if (myskills.length === 0) {getmyskills();}
    if (mylanguages.length === 0) {getmylanguages();}
  }, [ mydetail, myservice,myskills,mylanguages,getmydetail,getmyservice,getmyskills,getmylanguages,
  ]);
  return (
    <div className="tabcontent">
    {mydetail.length !== 0 && myservice.length !== 0 && myskills.length !== 0 && mylanguages.length !== 0 ? (
        <>
          <div className="tkdtitle1">About Me</div>
          <div className="mydeatils w3-row into">
            <div className="w3-half d-flex flex-col items-center">
              <div className="titleimg"><div><img src={tkd1} alt="Koushik Chandra Saha" /></div></div>
              <a className="resumebutton" href='https://raw.githubusercontent.com/thekoushikdurgas/TKDstroage/main/private/Koushik%20Chandra%20Saha.pdf'>Download CV</a>
            </div>
            <div className="w3-half">
              <div className="tkdaboutme">
                <strong>{mydetail[0].title}</strong>
                <span>
                  <span id="text">I'm a</span>
                  <div>
                    <Scrambles text={["Front-end Web Developer","Back-end Web Developer","Programmer","Freelancer",]}/>
                  </div>
                </span>
                <p>{mydetail[0].subject}</p>
                </div>
              </div>
            </div>
          <div className="w3-row services">{myservice.map((object, i) => (<div className="servicesdiv" key={i}><div className="icon"><i className={object.icon}></i></div><div className="service-item"><div className="name"><div>{object.name}</div></div><div className="desc"><div><p>{object.desc}</p></div></div></div></div>))}</div>
          <div className="w3-row skills1">{myskills.map((object, i) => {return (<div className="progress" key={i}><h3 className="progress-title">{object.title}</h3><div className="progress-bar" style={{ width: object.value + "%" }}><div className="progress-value">{object.value}</div></div></div>);})}</div>
          <div className="w3-row skills2 flex flex-wrap">{mylanguages.map((t, i) => {return (<div className="progress" key={i}><span className="progress-left"><span className="progress-bar" style={{ transform: "rotate(" + t.degl + "deg)" }}></span></span><span className="progress-right"><span className="progress-bar" style={{ transform: "rotate(" + t.degr + "deg)" }}></span></span><div className="inner-circle" style={{ transform: "rotate(" + t.deg + "deg)" }}></div><div  className="progress-value"><span>{t.value}%<br /><span>{t.title}</span></span></div></div>);})}</div>
        </>
    ) : (<Loading />)}
    </div>
  );
}
