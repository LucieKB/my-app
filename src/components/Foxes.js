
import React from "react";
import DeleteButton from "./DeleteButton";

function Foxes({students, setStudentClicked, setStudents, deleteOneStudent }){

    const foxes = students.filter((student)=>student.personalityType === "F")

    return(
        <div id="foxes" className="studentTable">
        <h1>Foxes</h1>
        <ul>
        {foxes.length>0 && (
          foxes.map((fox)=>{
          return(
            
            <div key={fox.id} className="studentListBtn">
            <button 
            id={fox.id}
            className = "fox-btn" 
            onClick={()=>{setStudentClicked(fox.id)}}
            >
              {fox.firstName} {fox.lastName}
            </button>
         
            <textarea className="group-area jc-center" maxLength="1" placeholder="Group #"></textarea>
            <div>
          <DeleteButton key={fox.id} student={fox} setStudents={setStudents} deleteOneStudent={deleteOneStudent}/>
          </div>
            </div>
         
         
        )}))}
        </ul> 
        </div>  
       
    )

}

export default Foxes;

