import React from "react";
import Contactform from "./Contactus/Contactus";
import DeatailContext from "./DeatailContext";

export default function Contactus() {
  const context = React.useContext(DeatailContext);
  const { mydetail, getmydetail } = context;
  document.title = `Contact - TheKoushikDurgas`;
  React.useEffect(() => {
    if (mydetail.length === 0) {getmydetail();}
  }, [mydetail, getmydetail]);
  return (
    <div className="overflow-y-auto overflow-x-hidden absolute bg-[#ffffff1a] shadow-[0_20px_50px_#00000026] border border-[#ffffff80] backdrop-blur-[5px] border-r-none border-b-none h-[95%] w-full top-[-100%] rounded-[0] animate-[slidetop_0.5s_forwards] left-[-1px] pb-[125px] ">
      <Contactform mydetail={mydetail} />
    </div>
  );
}
