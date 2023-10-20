import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";




function App() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    const getData = async () =>{
      try{
        const res = await axios.get("https://icanhazdadjoke.com/", {
          headers: {
            Accept: "application/json",
          }
        })
        setData(res.data)
      }catch(error){
        console.log(error)
      }
    }
    getData()
  },[])
  
  return(
    <>
      <div className="container">
        <h1>{data.joke}</h1>
        <button onClick={()=> window.location.reload(true)}>Next</button>
      </div>
    </>
  );
}

export default App;
