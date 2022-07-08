import React from "react";
import "./card.css";

export default function Card(props) {
  return (
    <div className="tkdcard">
    <div className="button"><a className="aboutMe" href={props.object.link} target="_blank" rel="noopener noreferrer">Open</a></div>
      <div className="tkdcard-content">
        <div>
          <div className="image"><img src={props.object.myprojectpic} alt={props.object.name} /></div>
        </div>
        <div className="Carddiv1">
          <div className="Carddiv2">
            <div className="name-profession">
              <span className="name">{props.object.name}</span>
              <span className="desc">{props.object.desc}</span>
            </div>
          </div>
          <div className="button">
            <div className="card_right">
              <div className="chart"><i className="fa fa-heart"></i><span>78</span></div>
              <div className="chart"><i className="fa fa-comment"></i><span>03</span></div>
              <div className="chart"><i className="fa fa-eye"></i><span>33</span></div>
              <div className="chart ch3"><i className="fa-light fa-calendar-lines-pen"></i><span>{props.object.projectd}</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
