import React, { useState } from "react";
import DeatailContext from "./DeatailContext";

export default function DeatailState(props) {
  const host = "https://thekoushikdurgasserver.herokuapp.com";
  const headers = {
    "Content-Type": "application/json",
    "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI5ZmE4M2I2Zjc1OGY0OGIxY2E4YzdmIn0sImlhdCI6MTY1NDY5MDYwMX0._sln2d2AROxcp0qMosUrIIkNkW5PNZsm2YUBFNL3mvg",
  };
  const [iconlist, seticonlist] = useState([]);
  const geticonlist = async () => {
    const response = await fetch(`${host}/api/icons`, {
      method: "GET",
      headers: headers,
    });
    const json = await response.json();
    seticonlist(json);
  };
  const [myproject, setmyproject] = useState([]);
  const getmyproject = async () => {
    const response = await fetch(`${host}/api/projects`, {
      method: "GET",
      headers: headers,
    });
    const json = await response.json();
    setmyproject(json);
  };
  const [allMusic, setallMusic] = useState([]);
  const getallMusic = async () => {
    const response = await fetch(`${host}/api/music`, {
      method: "GET",
      headers: headers,
    });
    const json = await response.json();
    setallMusic(json);
  };
  const [mydetail, setmydetail] = useState([]);
  const getmydetail = async () => {
    const response = await fetch(`${host}/api/detail`, {
      method: "GET",
      headers: headers,
    });
    const json = await response.json();
    setmydetail(json);
  };
  const [myeducation, setmyeducation] = useState([]);
  const geteducation = async () => {
    const response = await fetch(`${host}/api/education`, {
      method: "GET",
      headers: headers,
    });
    const json = await response.json();
    setmyeducation(json);
  };
  const [myservice, setmyservice] = useState([]);
  const getmyservice = async () => {
    const response = await fetch(`${host}/api/service`, {
      method: "GET",
      headers: headers,
    });
    const json = await response.json();
    setmyservice(json);
  };
  const [myskills, setmyskills] = useState([]);
  const getmyskills = async () => {
    const response = await fetch(`${host}/api/skills`, {
      method: "GET",
      headers: headers,
    });
    const json = await response.json();
    setmyskills(json);
  };
  const [mylanguages, setmylanguages] = useState([]);
  const getmylanguages = async () => {
    const response = await fetch(`${host}/api/tkdlanguage`, {
      method: "GET",
      headers: headers,
    });
    const json = await response.json();
    setmylanguages(json);
  };
  const [myknowleges, setmyknowleges] = useState([]);
  const getmyknowleges = async () => {
    const response = await fetch(`${host}/api/knowleges`, {
      method: "GET",
      headers: headers,
    });
    const json = await response.json();
    setmyknowleges(json);
  };
  const [myinternships, setmyinternships] = useState([]);
  const getmyinternships = async () => {
    const response = await fetch(`${host}/api/internship`, {
      method: "GET",
      headers: headers,
    });
    const json = await response.json();
    setmyinternships(json);
  };
  const [mycertificates, setmycertificates] = useState([]);
  const getmycertificates = async () => {
    const response = await fetch(`${host}/api/licensecertification`, {
      method: "GET",
      headers: headers,
    });
    const json = await response.json();
    setmycertificates(json);
  };
  const [myfriend, setmyfriend] = useState([]);
  const getmyfriend = async () => {
    const response = await fetch(`${host}/api/friends`, {
      method: "GET",
      headers: headers,
    });
    const json = await response.json();
    setmyfriend(json);
  };
  const [mysocial, setmysocial] = useState([]);
  const getmysocial = async () => {
    const response = await fetch(`${host}/api/social`, {
      method: "GET",
      headers: headers,
    });
    const json = await response.json();
    setmysocial(json);
  };
  const [country, setcountry] = useState([]);
  const getcountry = async () => {
    const response = await fetch(`${host}/api/country`, {
      method: "GET",
      headers: headers,
    });
    const json = await response.json();
    setcountry(json);
  };
  const [alertactive, setalertactive] = React.useState([false, '', '']);
  const getalertactive = (a,b,c)=>{setalertactive(a,b,c);};
  const [popvisible, setpopvisible] = React.useState(false);
  const getpopvisible = (t)=>{setpopvisible(t)};
  const [state, setstate] = useState([]);
  const getstate = async () => {
    const response = await fetch(`${host}/api/state`, {
      method: "GET",
      headers: headers,
    });
    const json = await response.json();
    setstate(json);
  };
  const sleep = (e) => {
    return new Promise((n) => setTimeout(n, e));
  };
  const getRndInteger = (a, o) => {
    return Math.floor(Math.random() * (o - a + 1)) + a;
  };
  const arrayRemove = (r, n) => {
    return r.filter(function (r) {
      return r !== n;
    });
  };
  const playaudio = (src) => {
    const obj = document.createElement("audio");
    obj.src = src;
    obj.play();
  };
  const clipboardcode = (a) => {
    if (!a) {
      return;
    }
    const textarea = document.createElement("textarea");
    textarea.value = a;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    window.prompt("copied!", a);
  };
  const download = (e, t) => {
    var n = document.createElement("a");
    n.setAttribute(
      "href",
      "data:text/plain;charset=utf-8, " + encodeURIComponent(t)
    );
    n.setAttribute("download", e);
    document.body.appendChild(n);
    n.click();
    document.body.removeChild(n);
  };
  const capitalize = (str) => {
    return str === "" ? "" : str[0].toUpperCase() + str.slice(1);
  };
  const formatDate = (date, format, utc) => {
    date = new Date(date);
    var MMMM = [
      "\x00",
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var MMM = [
      "\x01",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var dddd = [
      "\x02",
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    var ddd = ["\x03", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    function ii(i, len) {
      var s = i + "";
      len = len || 2;
      while (s.length < len) s = "0" + s;
      return s;
    }
    var y = utc ? date.getUTCFullYear() : date.getFullYear();
    format = format.replace(/(^|[^\\])yyyy+/g, "$1" + y);
    format = format.replace(/(^|[^\\])yy/g, "$1" + y.toString().substr(2, 2));
    format = format.replace(/(^|[^\\])y/g, "$1" + y);
    var M = (utc ? date.getUTCMonth() : date.getMonth()) + 1;
    format = format.replace(/(^|[^\\])MMMM+/g, "$1" + MMMM[0]);
    format = format.replace(/(^|[^\\])MMM/g, "$1" + MMM[0]);
    format = format.replace(/(^|[^\\])MM/g, "$1" + ii(M));
    format = format.replace(/(^|[^\\])M/g, "$1" + M);
    var d = utc ? date.getUTCDate() : date.getDate();
    format = format.replace(/(^|[^\\])dddd+/g, "$1" + dddd[0]);
    format = format.replace(/(^|[^\\])ddd/g, "$1" + ddd[0]);
    format = format.replace(/(^|[^\\])dd/g, "$1" + ii(d));
    format = format.replace(/(^|[^\\])d/g, "$1" + d);
    var H = utc ? date.getUTCHours() : date.getHours();
    format = format.replace(/(^|[^\\])HH+/g, "$1" + ii(H));
    format = format.replace(/(^|[^\\])H/g, "$1" + H);
    var h = H > 12 ? H - 12 : H === 0 ? 12 : H;
    format = format.replace(/(^|[^\\])hh+/g, "$1" + ii(h));
    format = format.replace(/(^|[^\\])h/g, "$1" + h);
    var m = utc ? date.getUTCMinutes() : date.getMinutes();
    format = format.replace(/(^|[^\\])mm+/g, "$1" + ii(m));
    format = format.replace(/(^|[^\\])m/g, "$1" + m);
    var s = utc ? date.getUTCSeconds() : date.getSeconds();
    format = format.replace(/(^|[^\\])ss+/g, "$1" + ii(s));
    format = format.replace(/(^|[^\\])s/g, "$1" + s);
    var f = utc ? date.getUTCMilliseconds() : date.getMilliseconds();
    format = format.replace(/(^|[^\\])fff+/g, "$1" + ii(f, 3));
    f = Math.round(f / 10);
    format = format.replace(/(^|[^\\])ff/g, "$1" + ii(f));
    f = Math.round(f / 10);
    format = format.replace(/(^|[^\\])f/g, "$1" + f);
    var T = H < 12 ? "AM" : "PM";
    format = format.replace(/(^|[^\\])TT+/g, "$1" + T);
    format = format.replace(/(^|[^\\])T/g, "$1" + T.charAt(0));
    var t = T.toLowerCase();
    format = format.replace(/(^|[^\\])tt+/g, "$1" + t);
    format = format.replace(/(^|[^\\])t/g, "$1" + t.charAt(0));
    var tz = -date.getTimezoneOffset();
    var K = utc || !tz ? "Z" : tz > 0 ? "+" : "-";
    if (!utc) {
      tz = Math.abs(tz);
      var tzHrs = Math.floor(tz / 60);
      var tzMin = tz % 60;
      K += ii(tzHrs) + ":" + ii(tzMin);
    }
    format = format.replace(/(^|[^\\])K/g, "$1" + K);
    var day = (utc ? date.getUTCDay() : date.getDay()) + 1;
    format = format.replace(new RegExp(dddd[0], "g"), dddd[day]);
    format = format.replace(new RegExp(ddd[0], "g"), ddd[day]);
    format = format.replace(new RegExp(MMMM[0], "g"), MMMM[M]);
    format = format.replace(new RegExp(MMM[0], "g"), MMM[M]);
    format = format.replace(/\\(.)/g, "$1");
    return format;
  };
  const [windowinnerWidth, setwindowinnerWidth] = useState([]);
  window.onresize=()=> {
    if (window.innerWidth <= 640) {setwindowinnerWidth("sm");}
    else if (window.innerWidth <= 768) {setwindowinnerWidth("md");}
    else if (window.innerWidth <= 1024) {setwindowinnerWidth("lg");}
    else if (window.innerWidth <= 1280) {setwindowinnerWidth("xl");}
    else if (window.innerWidth <= 1536) {setwindowinnerWidth("2xl");}
  }
  return (
    <DeatailContext.Provider
      value={{
        iconlist: iconlist,
        geticonlist: geticonlist,
        myproject: myproject,
        getmyproject: getmyproject,
        allMusic: allMusic,
        getallMusic: getallMusic,
        mydetail: mydetail,
        getmydetail: getmydetail,
        myservice: myservice,
        getmyservice: getmyservice,
        myskills: myskills,
        getmyskills: getmyskills,
        mylanguages: mylanguages,
        getmylanguages: getmylanguages,
        myknowleges: myknowleges,
        getmyknowleges: getmyknowleges,
        mysocial: mysocial,
        getmysocial: getmysocial,
        myfriend: myfriend,
        getmyfriend: getmyfriend,
        country: country,
        getcountry: getcountry,
        state: state,
        getstate: getstate,
        sleep: sleep,
        clipboardcode: clipboardcode,
        download: download,
        capitalize: capitalize,
        getRndInteger: getRndInteger,
        arrayRemove: arrayRemove,
        playaudio: playaudio,
        formatDate: formatDate,
        myeducation: myeducation,
        geteducation: geteducation,
        alertactive: alertactive,
        getalertactive: getalertactive,
        myinternships: myinternships,
        getmyinternships: getmyinternships,
        mycertificates: mycertificates,
        getmycertificates: getmycertificates,
        windowinnerWidth: windowinnerWidth,
        popvisible: popvisible,
        getpopvisible: getpopvisible,
      }}
    >
      {props.children}
    </DeatailContext.Provider>
  );
}
