import React from "react";
import StudentCard from "./StudentCard";

function Lions({students, studentClicked, setStudentClicked}){

    const lions = students.filter((student)=>student.personalityType === "L")

    return(
        <div id="lions" className="studentTable">
        <h1>Lions</h1>
        <ul>
        {lions.length>0 && (
          lions.map((lion)=>{
          return(
            <div key={lion.id} className="studentListBtn">
            <button 
            className = "lion-btn" 
            onClick={()=>{setStudentClicked(lion.id)}}
            >
              {lion.firstName} {lion.lastName}
            </button>
          </div>)}))} 
        </ul> 
           </div>  
    )

}

export default Lions;