import React from "react";
import StudentCard from "./StudentCard";

function Lions({students, onClickGroup, setStudentClicked}){

    const lions = students.filter((student)=>student.personalityType === "L")

    return(
      <div id="Lions" className="studentTable">
      <h1>Lions</h1>
      <ul>
      {lions.length>0 && (
        lions.map((lion)=>{
        return(
          <>
          <div key={lion.id} className="studentListBtn">
          <button 
          id={lion.id}
          className = "lion-btn" 
          onClick={()=>{setStudentClicked(lion.id)}}
          >
            {lion.firstName} {lion.lastName}
          </button>
       
            <button id={lion.id} onClick={onClickGroup}>X</button>
          
          </div>
        
          
          
        </>
      )}))}
      </ul> 
      </div>  
    )

}

export default Lions;