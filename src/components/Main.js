import React from "react";


export default function Main(props){
    
    return(
        <div className="main-content">
            <span>{props.joke}</span>
        </div>
    )
}