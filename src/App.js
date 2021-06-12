import React,{useState} from "react";
import './App.css';

const App = () => {
    let time = new Date().toLocaleTimeString();
    const [ctime, setCtime]= useState(time);

    const updateTime = () =>{
      time= new Date().toLocaleTimeString();
      setCtime(time);
    };
    setInterval(updateTime,1000);
    return(
      <>
          <h1>{time}</h1>
      </>
    );
};
export default App;
