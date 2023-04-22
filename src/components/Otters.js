import React from "react";
import DeleteButton from "./DeleteButton";


function Otters({students, setStudentClicked, setStudents, deleteOneStudent}){

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
            id={otter.id}
            className = "otter-btn" 
            onClick={()=>{setStudentClicked(otter.id)}}
            >
              {otter.firstName} {otter.lastName}
            </button>
        
            <textarea className="group-area jc-center" maxLength="1" placeholder="Group #"></textarea>
            <div>
          <DeleteButton key={otter.id} student={otter} setStudents={setStudents} deleteOneStudent={deleteOneStudent}/>
          </div>
            </div>   
            
          )}))}
          </ul> 
          </div>  
    )

}

export default Otters;
