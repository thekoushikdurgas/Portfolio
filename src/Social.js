import React from "react";
import DeatailContext from "./DeatailContext";

export default function Social() {
  const context = React.useContext(DeatailContext);
  const { mysocial, getmysocial } = context;
  document.title = `Social - TheKoushikDurgas`;
  React.useEffect(() => {
    if (mysocial.length === 0) {getmysocial();}
  }, [getmysocial, mysocial]);
  return (
    <div className="overflow-y-auto overflow-x-hidden absolute bg-[#ffffff1a] shadow-[0_20px_50px_#00000026] border border-[#ffffff80] backdrop-blur-[5px] border-r-none border-b-none h-[95%] w-full top-[-100%] rounded-[0] animate-[slidetop_0.5s_forwards] left-[-1px] pb-[125px] hidden">
      {mysocial.map((object, i) => (
        <i className={object.icon}></i>
      ))}
    </div>
  );
}
