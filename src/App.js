import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main"
import Style from "./App.css"
import data from "./data"


export default function App(){
const jokes = data.map(iteams => {
  return(
    <Main 
      key={iteams.id}
      joke={iteams.joke}
    />
  )
})
  return(
    <div>
      <Navbar />
      {jokes}
    </div>
  )
}