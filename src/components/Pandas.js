import React from "react";
import StudentCard from "./StudentCard";

function Pandas({students, onClickGroup, setStudentClicked}){

    const pandas = students.filter((student)=>student.personalityType === "P")

    return(
        <div id="pandas" className="studentTable">
        <h1>Pandas</h1>
        <ul>
        {pandas.length>0 && (
          pandas.map((panda)=>{
          return(
            <>
            <div key={panda.id} className="studentListBtn">
            <button 
            id={panda.id}
            className = "panda-btn" 
            onClick={()=>{setStudentClicked(panda.id)}}
            >
              {panda.firstName} {panda.lastName}
            </button>
        
        <button id={panda.id} onClick={onClickGroup}>X</button>
          
            </div>   
            </>
          )}))}
          </ul> 
          </div>  
    )

}

export default Pandas;