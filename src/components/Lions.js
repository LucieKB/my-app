import React from "react";
import DeleteButton from "./DeleteButton";

function Lions({students, setStudentClicked, setStudents, deleteOneStudent}){
 



    const lions = students.filter((student)=>student.personalityType === "L")
   

    return(
      <div id="Lions" className="studentTable">
      <h1>Lions</h1>
      <ul>
      {lions.length>0 && (
        lions.map((lion)=>{
        return(
          
          <div key={lion.id} className="studentListBtn">
          <button 
          id={lion.id}
          className = "lion-btn" 
          onClick={()=>{setStudentClicked(lion.id)}}
          >
            {lion.firstName} {lion.lastName}
          </button>
       
          <textarea className="group-area jc-center" maxLength="1" placeholder="Group #" ></textarea>
          <div>
          <DeleteButton key={lion.id} student={lion} setStudents={setStudents} deleteOneStudent={deleteOneStudent}/>
          </div>
          
          </div>
        
      )}))}
      </ul> 
      </div>  
    )

}

export default Lions;