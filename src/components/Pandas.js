import React from "react";
import StudentCard from "./StudentCard";

function Pandas({students, studentClicked, setStudentClicked}){

    const pandas = students.filter((student)=>student.personalityType === "P")

    return(
        <div id="pandas" className="studentTable">
        <h1>Pandas</h1>
        <ul>
        {pandas.length>0 && (
          pandas.map((panda)=>{
          return(
            <div key={panda.id} className="studentListBtn">
            <button 
            className = "panda-btn" 
            onClick={()=>{setStudentClicked(panda.id)}}
            >
              {panda.firstName} {panda.lastName}
            </button>
          </div>)}))} 
        </ul>     
              </div>  
    )

}

export default Pandas;