import React, { useEffect, useContext } from "react";
import DeatailContext from "./DeatailContext";
import Loading from "./Loading";

export default function Resume() {
  const context = useContext(DeatailContext);
  const { myknowleges, getmyknowleges,myeducation,geteducation,myinternships,getmyinternships,mycertificates,getmycertificates,formatDate } = context;
  document.title = `Resume - TheKoushikDurgas`;
  useEffect(() => {
    if (myknowleges.length === 0) {getmyknowleges();}
    if (myeducation.length === 0) {geteducation();}
    if (myinternships.length === 0) {getmyinternships();}
    if (mycertificates.length === 0) {getmycertificates();}
}, [geteducation, getmycertificates, getmyinternships, getmyknowleges, mycertificates, myeducation, myinternships, myknowleges]);
  return (
    <div className="overflow-y-auto overflow-x-hidden absolute bg-[#ffffff1a] shadow-[0_20px_50px_#00000026] border border-[#ffffff80] backdrop-blur-[5px] border-r-none border-b-none h-[95%] w-full top-[-100%] rounded-[0] animate-[slidetop_0.5s_forwards] left-[-1px] pb-[125px] grid justify-items-center gap-5 px-[1vw]">
      {myknowleges.length !== 0 && myeducation.length !== 0 && myinternships.length !== 0 && mycertificates.length !== 0 ? (
        <>
        <div className="sticky top-[0] w-fit rounded-[0_0_10px_10px] md:rounded-[0_0_1vw_1vw] px-[10px] md:px-[1vw] text-tkd text-[20px] md:text-[2vw] z-[200] m-[0_auto] bg-[#ffffff1a] shadow-[0_20px_50px_#00000026] border border-t-0 border-[#ffffff80] backdrop-blur-[5px]">Resume</div>
        <div className="grid gap-5">
          <div className="grid justify-items-center gap-3">        
            <div className="flex w-fit gap-2 cursor-pointer bg-[#ffffff1a] shadow-[0_20px_50px_#00000026] border border-[#ffffff80] backdrop-blur-[5px] md:p-[1vh_1vw] p-[8px] items-center md:rounded-[1vw] rounded-[10px] md:text-[1.5vw]">
              <i className="fa fa-university"></i>
              <span>EDUCATION</span>
            </div>
            {myeducation.map((object, i) => (
              <div className="w-full" key={i}>
                <div className="relative">
                  <div className="absolute top-[0] left-[0] right-[0] w-fit rounded-[0_0_10px_10px] md:rounded-[0_0_1vw_1vw] px-[10px] md:px-[1vw] text-tkd text-[13px] md:text-[1.3vw] z-[200] m-[0_auto] bg-[#ffffff1a] shadow-[0_20px_50px_#00000026] border border-t-0 border-[#ffffff80] backdrop-blur-[5px]">{object.degreestart} - {object.degreeend}</div>
                  <div className="absolute z-[1] top-[0] left-[0] after:content-['✔️'] after:bg-[#ffffff1a] after:shadow-[0_20px_50px_#00000026] after:border after:border-[#ffffff80] after:backdrop-blur-[5px] after:cursor-pointer after:rounded-[10px_0_10px_0] after:md:rounded-[1vw_0_1vw_0] after:p-[2px] md:after:p-[0.5vh_0.5vw] after:text-[13px] md:after:text-[1vw] after:flex"></div>
                  <div className="timeline-event-copy bg-[#ffffff1a] shadow-[0_20px_50px_#00000026] border border-[#ffffff80] backdrop-blur-[5px] md:rounded-[1vw] rounded-[10px] p-[1vh_1vw] pt-[4vh]">
                    <p className="text-[18px] md:text-[1.8vw]">{object.institutename}</p>
                    <p className="md:text-[1.5vw]">{object.degree}</p>
                    <ul className="text-[12px] md:text-[1vw]">{object.degreelist.map((object1, i1) => (
                      <li key={i1} className="before:content-['⮚'] flex gap-2">{object1}</li>
                    ))}
                    </ul>
                  </div>
                </div>
              </div>
              ))}
          </div>
          <div className="grid justify-items-center gap-3">        
            <div className="flex w-fit gap-2 cursor-pointer bg-[#ffffff1a] shadow-[0_20px_50px_#00000026] border border-[#ffffff80] backdrop-blur-[5px] md:p-[1vh_1vw] p-[8px] items-center md:rounded-[1vw] rounded-[10px] md:text-[1.5vw]">
              <i className="tkd10-name-id"></i>
              <span>Intership</span>
            </div>
            {myinternships.map((object, i) => (
              <div className="w-full" key={i}>
                <div className="relative">
                  <div className="absolute top-[0] left-[0] right-[0] w-fit rounded-[0_0_10px_10px] md:rounded-[0_0_1vw_1vw] px-[10px] md:px-[1vw] text-tkd text-[13px] md:text-[1.3vw] z-[200] m-[0_auto] bg-[#ffffff1a] shadow-[0_20px_50px_#00000026] border border-t-0 border-[#ffffff80] backdrop-blur-[5px]">{formatDate(object.startdate, "MMM/yyyy")} - {formatDate(object.enddate, "MMM/yyyy")}</div>
                  <div className="absolute z-[1] top-[0] left-[0] after:content-['✔️'] after:bg-[#ffffff1a] after:shadow-[0_20px_50px_#00000026] after:border after:border-[#ffffff80] after:backdrop-blur-[5px] after:cursor-pointer after:rounded-[10px_0_10px_0] after:md:rounded-[1vw_0_1vw_0] after:p-[2px] md:after:p-[0.5vh_0.5vw] after:text-[13px] md:after:text-[1vw] after:flex"></div>
                  <div className="timeline-event-copy bg-[#ffffff1a] shadow-[0_20px_50px_#00000026] border border-[#ffffff80] backdrop-blur-[5px] md:rounded-[1vw] rounded-[10px] p-[1vh_1vw] pt-[4vh] grid gap-1">
                    <p className="flex items-center gap-2 text-[18px] md:text-[1.8vw]"><i className="tkd8-employee"></i><span>{object.profile}</span></p>
                    <a href={object.organizationlink} className="flex items-center gap-2 text-[15px] md:text-[1.5vw]"><i className="tkd8-company-enterprise"></i><span>{object.organization}</span></a>
                    <a href={object.locationlink} className="flex items-center gap-2 text-[12px] md:text-[1vw]"><i className="tkd2-seo-map-location-place-search"></i><span>{object.location}</span></a>
                    <p className="text-[12px] md:text-[1.2vw]">{object.description}</p>
                    <a className="text-[14px] md:text-[1.5vw] p-[10px] md:p-[1vh_1vw] font-semibold cursor-pointer outline-none rounded-[5px] md:rounded-[0.5vw] bg-[#ffffff1a] shadow-[0_20px_50px_#00000026] border border-[#ffffff80] backdrop-blur-[5px] flex items-center gap-1 w-fit" href={object.certificatelink}><span>Certificate</span><i className="tkd11-server-download"></i></a>
                  </div>
                </div>
              </div>
              ))}
          </div>
          <div className="grid justify-items-center gap-3">        
            <div className="flex w-fit gap-2 cursor-pointer bg-[#ffffff1a] shadow-[0_20px_50px_#00000026] border border-[#ffffff80] backdrop-blur-[5px] md:p-[1vh_1vw] p-[8px] items-center md:rounded-[1vw] rounded-[10px] md:text-[1.5vw]">
              <i className="tkd4-iconmonstr-certificate-11"></i>
              <span>Certificate & License</span>
            </div>
            {mycertificates.map((object, i) => (
              <div className="w-full" key={i}>
                <div className="relative">
                  <div className="absolute top-[0] left-[0] right-[0] w-fit rounded-[0_0_10px_10px] md:rounded-[0_0_1vw_1vw] px-[10px] md:px-[1vw] text-tkd text-[13px] md:text-[1.3vw] z-[200] m-[0_auto] bg-[#ffffff1a] shadow-[0_20px_50px_#00000026] border border-t-0 border-[#ffffff80] backdrop-blur-[5px]">{formatDate(object.issuedate, "MMM/yyyy")}</div>
                  <div className="absolute z-[1] top-[0] left-[0] after:content-['✔️'] after:bg-[#ffffff1a] after:shadow-[0_20px_50px_#00000026] after:border after:border-[#ffffff80] after:backdrop-blur-[5px] after:cursor-pointer after:rounded-[10px_0_10px_0] after:md:rounded-[1vw_0_1vw_0] after:p-[2px] md:after:p-[0.5vh_0.5vw] after:text-[13px] md:after:text-[1vw] after:flex"></div>
                  <div className="timeline-event-copy bg-[#ffffff1a] shadow-[0_20px_50px_#00000026] border border-[#ffffff80] backdrop-blur-[5px] md:rounded-[1vw] rounded-[10px] p-[1vh_1vw] pt-[4vh] grid gap-1">
                    <p className="flex items-center gap-2 text-[18px] md:text-[1.8vw]"><i className="tkd2-award"></i><span>{object.name}</span></p>
                    <a href={object.organizationlink} className="flex items-center gap-2 text-[15px] md:text-[1.5vw]"><i className="tkd8-company-enterprise"></i><span>{object.organization}</span></a>
                    <p className="flex items-center gap-2 text-[12px] md:text-[1.2vw]"><span className="text-bold">{`CredentialID : `}</span>{object.credentialid}</p>
                    <a className="text-[14px] md:text-[1.5vw] p-[10px] md:p-[1vh_1vw] font-semibold cursor-pointer outline-none rounded-[5px] md:rounded-[0.5vw] bg-[#ffffff1a] shadow-[0_20px_50px_#00000026] border border-[#ffffff80] backdrop-blur-[5px] flex items-center gap-1 w-fit" href={object.certificatelink}><span>Certificate</span><i className="tkd11-server-download"></i></a>
                  </div>
                </div>
              </div>
              ))}
          </div>
        </div>
        <div className="flex w-fit gap-2 cursor-pointer bg-[#ffffff1a] shadow-[0_20px_50px_#00000026] border border-[#ffffff80] backdrop-blur-[5px] md:p-[1vh_1vw] p-[8px] items-center md:rounded-[1vw] rounded-[10px] md:text-[1.5vw]">
          <i className="fa fa-list"></i>
          <span>Knowledge</span>
        </div>
        <div className="flex flex-wrap gap-5 justify-center">
          {myknowleges.map((object, i) => (
            <div className="flex gap-2 cursor-pointer bg-[#ffffff1a] shadow-[0_20px_50px_#00000026] border border-[#ffffff80] backdrop-blur-[5px] md:p-[1vh_1vw] p-[8px] items-center md:rounded-[1vw] rounded-[10px] md:text-[1.5vw]" key={i}>
              <span>{object.title}</span>
            </div>
          ))}
        </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}
