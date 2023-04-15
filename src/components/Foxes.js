import React from "react";
import StudentCard from "./StudentCard";

function Foxes({students, studentClicked, setStudentClicked, onHideClick}){

    const foxes = students.filter((student)=>student.personalityType === "F")

  function studentBtnClicked(){
    foxes.map((fox)=>{
    setStudentClicked(fox.id)})
    return( <button
      className="x-Btn"
      onClick = {onHideClick}
      >X</button>
    )
  }
    return(
        <div id="foxes" className="studentTable">
        <h1>Foxes</h1>
        <ul>
        {foxes.length>0 && (
          foxes.map((fox)=>{
          return(
            <div key={fox.id} className="studentListBtn">
            <button 
            className = "fox-btn" 
            onClick={studentBtnClicked}
          
            >
              {fox.firstName} {fox.lastName}
            </button>
          </div>)}))} 
        </ul> 
        </div>  
    )

}

export default Foxes;