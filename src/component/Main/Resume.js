import React, { useEffect, useContext } from "react";
import DeatailContext from "../context/DeatailContext";
import Loading from "../Loading/Loading";

export default function Resume() {
  const context = useContext(DeatailContext);
  const { myknowleges, getmyknowleges,myeducation,geteducation } = context;
  document.title = `Resume - TheKoushikDurgas`;
  useEffect(() => {
    if (myknowleges.length === 0) {getmyknowleges();}
    if (myeducation.length === 0) {geteducation();}
}, [geteducation, getmyknowleges, myeducation, myknowleges]);
  return (
    <div className="tabcontent d-flex flex-column align-items-center">
      {myknowleges.length !== 0 ? (
        <>
          <div className="tkdtitle1">Resume</div>
          <div className="resume-title"><div className="name"><i className="fa fa-university"></i><div>EDUCATION</div></div></div>
          <ul className="timeline">{myeducation.map((object, i) => (<li className="timeline-event" key={i}><div className="timeline-event-icon"></div><div className="timeline-event-copy"><p className="timeline-event-thumbnail"><span>{object.degreestart} - {object.degreeend}</span></p><h3>{object.institutename}</h3><h4>{object.degree}</h4><ul>{object.degreelist.map((object1, i1) => (<li key={i1}>{object1}</li>))}</ul></div></li>))}</ul>
          <div className="resume-title resume-title1">
            <div className="name" id="resume-title1-name"><i className="fa fa-list"></i><div>Knowledge</div></div>
            <ul>{myknowleges.map((object, i) => (<li key={i}><div className="name"><span>{object.title}</span></div></li>))}</ul>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}
