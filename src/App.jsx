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
        // console.log(data)
      }catch(error){
        console.log(error)
      }
    }
    getData()
  })
  
  return(
    <>
      {data.map(m=>{
        <li>{m.id}</li>
      })}
    </>
  );
}

export default App;
