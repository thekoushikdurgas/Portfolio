import React from "react";
import Contactform from "../Contactus/Contactus";
import DeatailContext from "../context/DeatailContext";

export default function Contactus() {
  const context = React.useContext(DeatailContext);
  const { mydetail, getmydetail } = context;
  document.title = `Contact - TheKoushikDurgas`;
  React.useEffect(() => {
    if (mydetail.length === 0) {getmydetail();}
  }, [mydetail, getmydetail]);
  return (
    <div className="tabcontent">
      <Contactform mydetail={mydetail} />
    </div>
  );
}
