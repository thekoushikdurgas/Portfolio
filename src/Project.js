import React, { useEffect, useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import DeatailContext from "./DeatailContext";
import Loading from "./Loading";
import Card from "./Card/Card";

export default function Project() {
  const context = useContext(DeatailContext);
  const { myproject, getmyproject } = context;
  useEffect(() => {
    if (myproject.length === 0) {getmyproject();}
  }, [ myproject, getmyproject]);
  return (
    <div className="overflow-y-auto overflow-x-hidden absolute bg-[#ffffff1a] shadow-[0_20px_50px_#00000026] border border-[#ffffff80] backdrop-blur-[5px] border-r-none border-b-none h-[95%] w-full top-[-100%] rounded-[0] animate-[slidetop_0.5s_forwards] left-[-1px] pb-[125px] ">
      {myproject.length !== 0 ? (
        <div className="boxes" id="boxes">
          <Routes>
            <Route exact path="" element={<ProjectList myproject={myproject} type="all" />} />
            <Route exact path="project/" element={<ProjectList myproject={myproject} type="project" />} />
            <Route exact path="software/" element={<ProjectList myproject={myproject} type="software" />} />
            <Route exact path="website/" element={<ProjectList myproject={myproject} type="website" />} />
            <Route exact path="game/" element={<ProjectList myproject={myproject} type="game" />} />
            <Route path="*" element={<Navigate to="/404/" />} />
          </Routes>
        </div>
      ) : (<Loading />)}
    </div>
  );
}
function ProjectList(props) {
  const context = useContext(DeatailContext);
  const { capitalize } = context;
  document.title = `${capitalize(props.type==="all"?"dashboard":props.type)} - TheKoushikDurgas`;
  const myprojectcategory = props.type === "all" ? props.myproject : props.myproject.filter((element) => element.category === props.type);
  return (<>{myprojectcategory.map((object, i) => (<div className="contentdiv" key={i}><Card object={object} key={i} /></div>))}</>);
}
