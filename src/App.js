import React from "react";
import axios from "axios";


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
    <h1>hello</h1>
  )
}