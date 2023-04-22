import React from "react";
import DeleteButton from "./DeleteButton";


function Pandas({students, setStudentClicked, setStudents, deleteOneStudent}){

    const pandas = students.filter((student)=>student.personalityType === "P")
    

    return(
        <div id="pandas" className="studentTable">
        <h1>Pandas</h1>
        <ul>
        {pandas.length>0 && (
          pandas.map((panda)=>{
          return(
           
            <div key={panda.id} className="studentListBtn jc-center">
            <button 
            id={panda.id}
            className = "panda-btn" 
            onClick={()=>{setStudentClicked(panda.id)}}
            >
              {panda.firstName} {panda.lastName}
            </button>
            <textarea className="group-area jc-center" maxLength="1" placeholder="Group #"></textarea>
            <div>
          <DeleteButton key={panda.id} student={panda} setStudents={setStudents} deleteOneStudent={deleteOneStudent}/>
          </div>
     
          
            </div>   
           
          )}))}
          </ul> 
          </div>  
    )

}

export default Pandas;