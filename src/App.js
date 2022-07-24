import React from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Style from "./App.css"


export default function App(){

  const jokes = async () => {
    const res = await axios.get('https://icanhazdadjoke.com/',{
      headers: {
        'Accept' : 'application/json'
      }
    })
    console.log(res)
  }


  return(
    <div>
      <Navbar />
    </div>
  )
}