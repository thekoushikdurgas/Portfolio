import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import DeatailContext from "../context/DeatailContext";
import Loading from "../Loading/Loading";
import tkd1 from "../css/tkd1.jpg";
import Scrambles from './Scrambles';

export default function About() {
  const context = useContext(DeatailContext);
  const { myproject, getmyproject,mydetail, myservice, myskills, mylanguages, getmydetail, getmyservice, getmyskills, getmylanguages } = context;
  document.title = `About - TheKoushikDurgas`;
  useEffect(() => {
    if (mydetail.length === 0) {getmydetail();}
    if (myservice.length === 0) {getmyservice();}
    if (myskills.length === 0) {getmyskills();}
    if (mylanguages.length === 0) {getmylanguages();}
    if (myproject.length === 0) {getmyproject();}
  }, [mydetail, myservice, myskills, mylanguages, getmydetail, getmyservice, getmyskills, getmylanguages, myproject, getmyproject]);
  return (
    <div className="overflow-y-auto overflow-x-hidden absolute bg-[#ffffff1a] shadow-[0_20px_50px_#00000026] border border-[#ffffff80] backdrop-blur-[5px] border-r-none border-b-none h-[95%] w-full top-[-100%] rounded-[0] animate-[slidetop_0.5s_forwards] left-[-1px] pb-[125px] gap-15">
    {mydetail.length !== 0 && myproject.length !== 0 && myservice.length !== 0 && myskills.length !== 0 && mylanguages.length !== 0 ? (
        <>
          <div className="sticky top-[0] w-fit rounded-[0_0_10px_10px] md:rounded-[0_0_1vw_1vw] px-[10px] md:px-[1vw] text-[20px] md:text-[2vw] z-[200] m-[0_auto] bg-[#ffffff1a] shadow-[0_20px_50px_#00000026] border border-t-0 border-[#ffffff80] backdrop-blur-[5px]">About Me</div>
          <div className="flex md:flex-row flex-col items-center rounded-[10px] md:rounded-[1vw] md:p-[1vh_1vw] p-[13px] md:m-[1vh_1vw] m-[12px_20px] bg-[#ffffff1a] shadow-[0_20px_50px_#00000026] border border-[#ffffff80] backdrop-blur-[5px]">
            <div className="flex flex-col items-center md:m-[1vw] m-auto gap-5">
              <div className="z-[200] rounded-[10px] md:rounded-[1vw] md:w-[28vw] w-[250px] md:h-[28vw] h-[250px] md:p-[0.5vw] p-[5px] m-auto bg-[#ffffff1a] shadow-[0_20px_50px_#00000026] border border-[#ffffff80] backdrop-blur-[5px]">
                <div className="rounded-[10px] md:rounded-[1vw] overflow-hidden h-[100%] w-[100%]">
                  <img src={tkd1} alt="Koushik Chandra Saha" className='w-[100%]' />
                </div>
              </div>
              <div className="flex gap-5">
                <a className="text-[14px] md:text-[1.5vw] p-[10px] md:p-[1vh_1vw] font-semibold cursor-pointer outline-none rounded-[5px] md:rounded-[0.5vw] bg-[#ffffff1a] shadow-[0_20px_50px_#00000026] border border-[#ffffff80] backdrop-blur-[5px] flex items-center gap-1" href='https://koushikchandrasaha.thekoushikdurgas.in/private/Koushik%20Chandra%20Saha.pdf'><span>Download CV</span><i className="tkd11-server-download"></i></a>
                <Link className="text-[14px] md:text-[1.5vw] p-[10px] md:p-[1vh_1vw] font-semibold cursor-pointer outline-none rounded-[5px] md:rounded-[0.5vw] bg-[#ffffff1a] shadow-[0_20px_50px_#00000026] border border-[#ffffff80] backdrop-blur-[5px] flex items-center gap-1" to='/contact/'><span>Hire Me</span><i className="uil uil-message button_icon"></i></Link>
              </div>
            </div>
            <div className="md:m-[1vw] m-[0]">
              <div className="flex flex-col text-left gap-5">
                <strong className="text-[25px] md:text-[2vw] font-medium">{mydetail[0].title}</strong>
                <span className="text-[15px] md:text-[2vw] font-medium">I'm a{` `}<Scrambles text={["Front-end Web Developer","Back-end Web Developer","Programmer","Freelancer",]}/></span>
                <p className="text-[16px] md:text-[1.2vw]">{mydetail[0].subject}</p>
                <div className="flex justify-center gap-10 text-center">
                  <div className="flex flex-col">
                    <span className="font-medium md:text-[2vw] text-[20px]">Fresher</span>
                    <span className="md:text-[1vw] text-[10px]">Experience</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium md:text-[2vw] text-[20px]">+{myproject.length}</span>
                    <span className="md:text-[1vw] text-[10px]">Projects</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium md:text-[2vw] text-[20px]">+2</span>
                    <span className="md:text-[1vw] text-[10px]">Intership</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {myservice.map((object, i) => (
            <div className="p-[3vh_2vw] cursor-pointer bg-[#ffffff1a] shadow-[0_20px_50px_#00000026] border border-[#ffffff80] backdrop-blur-[5px] rounded-[10px] md:rounded-[1vw] md:m-[1vh_1vw] m-[12px_20px]" key={i}>
                <div className="relative flex flex-col text-[#2c0101]">
                  <div className="absolute md:text-[5vw] text-[45px] opacity-10 leading-0 right-0">
                    <i className={object.icon}></i>
                  </div>
                  <p className="font-extrabold md:text-[2.5vw] text-[20px] mb-[1vh] font-['Manrope']">{object.name}</p>
                  <p className="font-medium md:text-[1.2vw] text-[10px] font-['Manrope'] mb-[1vh]">{object.desc}</p>
                  {myskills.filter((e)=>e.type===object.name).map((object1, i1) => {return (
                    <div key={i1}>
                      <div className="mb-[1vh] bg-[#ffffff1a] shadow-[0_20px_50px_#00000026] border border-b-none border-[#ffffff80] backdrop-blur-[5px] rounded-[5px] md:rounded-[0.5vw]">
                        <div className="w-full h-full bg-[#0c0] text-xs font-medium text-[#2c0101] p-0.5 leading-none bg-gradient-to-br from-[#ffffff8f_30%] to-[transparent_120%] rounded-[5px] md:rounded-[0.5vw]" style={{width: object1.value+'%'}}>
                          <div className="flex items-center justify-between md:text-[1.2vw] text-[13px] p-[0.5vh_1vw] relative z-[1]">
                            <div className="flex items-center gap-2"><i className={`${object1.icon} md:text-[2vw] text-[21px]`}></i><p>{object1.title}</p></div>
                            <p>{object1.value}%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );})}
                </div>
            </div>
          ))}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:m-[1vh_1vw] m-[12px_20px]">
          {mylanguages.map((t, i) => {return (
            <div className="bg-[#ffffff1a] shadow-[0_20px_50px_#00000026] border border-[#ffffff80] backdrop-blur-[5px] rounded-[10px] md:rounded-[1vw]" key={i}>
              <div className="m-[2vh_2vw] gap-2 grid">
                <h2 className="m-0 font-semibold text-center text-[20px] md:text-[2vw]">{t.title}</h2>
                <div className="px-8 pb-3 -mx-8">
                  <div className="flex items-center mt-1 text-[10px] md:text-[1vw]">
                    <div className="w-1/5">
                      <span>Speak</span>
                    </div>
                    <div className="w-3/5">
                      <div className="w-full h-full bg-white rounded-[10px] md:rounded-[1vw]">
                        <div className="p-[0.5vh_0.5vw] bg-[#0c0] rounded-[10px] md:rounded-[1vw]" style={{width: t.speakvalue+'%'}} />
                      </div>
                    </div>
                    <div className="w-1/5 pl-3">
                      <span>{t.speakvalue}%</span>
                    </div>
                  </div>
                  <div className="flex items-center mt-1 text-[10px] md:text-[1vw]">
                    <div className="w-1/5">
                      <span>Write</span>
                    </div>
                    <div className="w-3/5">
                      <div className="w-full h-full bg-white rounded-[10px] md:rounded-[1vw]">
                        <div className="p-[0.5vh_0.5vw] bg-[#0c0] rounded-[10px] md:rounded-[1vw]" style={{width: t.writevalue+'%'}}  />
                      </div>
                    </div>
                    <div className="w-1/5 pl-3">
                      <span>{t.writevalue}%</span>
                    </div>
                  </div>
                  <div className="flex items-center mt-1 text-[10px] md:text-[1vw]">
                    <div className="w-1/5">
                      <span>Read</span>
                    </div>
                    <div className="w-3/5">
                      <div className="w-full h-full bg-white rounded-[10px] md:rounded-[1vw]">
                        <div className="p-[0.5vh_0.5vw] bg-[#0c0] rounded-[10px] md:rounded-[1vw]" style={{width: t.readvalue+'%'}}  />
                      </div>
                    </div>
                    <div className="w-1/5 pl-3">
                      <span>{t.readvalue}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );})}
          </div>
        </>
    ) : (<Loading />)}
    </div>
  );
}
