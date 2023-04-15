import React from "react";
import StudentCard from "./StudentCard";

function Otters({students, studentClicked, setStudentClicked}){

    const otters = students.filter((student)=>student.personalityType === "O")

    return(
        <div id="otters" className="studentTable">
        <h1>Otters</h1>
        <ul>
        {otters.length>0 && (
          otters.map((otter)=>{
          return(
            <div key={otter.id} className="studentListBtn">
            <button 
            className = "otter-btn" 
            onClick={()=>{setStudentClicked(otter.id)}}
            >
              {otter.firstName} {otter.lastName}
            </button>
          </div>)}))} 
        </ul>      
              </div>  
    )

}

export default Otters;