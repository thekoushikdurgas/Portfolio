/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

export default function Scrambles(props) {
  const textArray = [];
  const [activeText, setActiveText] = React.useState(0);
  const [curtext, setcurtext] = React.useState(0);
  function sleep(e) {return new Promise((n => setTimeout(n, e)))}
  const shuffle = (word) => {return word.split("").sort(() => {return 0.5 - Math.random();}).join("");};
  const gen = (word) => {
    let textArray = [];
    if (word) {
      for (let i = word.length; i >= 0; i--) {
        let tmp = shuffle(word+"!<>-_():/[]{}—=+*^?#0123456789");
        tmp = tmp.slice(0, word.length - i);
        textArray.push(tmp);
      }
      for (let i = 0; i < 6; i++) {textArray.push(shuffle(word));}
      textArray.push(word);
    }
    return textArray;
  };
  for (var i = 0; i < props.text.length; i++) {textArray.push(gen(props.text[i]));}
  React.useEffect(() => {
    let interval = null;
    if (curtext === props.text.length - 1) {
      setcurtext(0);
    } else if (activeText < textArray[curtext].length-1) {
      interval = setInterval(() => {setActiveText(activeText + 1);}, 90);
    } else if (activeText === textArray[curtext].length-1) {
      sleep(1000).then((() => {
          setActiveText(0);
          setcurtext(curtext + 1);
      }));
    }
    return () => clearInterval(interval);
  }, [activeText, curtext, textArray,props.text]);
  return (<>{textArray[curtext][activeText]}</>);
}
