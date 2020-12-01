import React, {useEffect, useState} from 'react';
import ProgressBar from "./ProgressBar.js"
const RandomBar = () =>{
    const [complete, setComplete] = useState(0);
    const [yellow, setYellow] = useState(0);
    const [blue, setBlue] = useState(0);
    const [darkBlue, setDarkBlue] = useState(0);

    useEffect(() =>{
         setInterval(() => {setComplete(Math.floor(Math.random() * 100) + 1)}, 500);
         setInterval(() => {setYellow(Math.floor(Math.random() * 100) + 1)}, 1000);
         setInterval(() => {setBlue(Math.floor(Math.random() * 100) + 1)}, 1500);
         setInterval(() => {setDarkBlue(Math.floor(Math.random() * 100) + 1)}, 800);
    },[]);


    return(
      <div>
          <ProgressBar bgColor="#6B5E62" completed={complete} />
          <ProgressBar bgColor="#F9DC5C" completed={yellow} />
          <ProgressBar bgColor="#011936" completed={blue} />
          <ProgressBar bgColor="#465362" completed={darkBlue} />
      </div>

    )
};
export default RandomBar;