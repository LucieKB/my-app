
import React, {useState} from "react";




function Foxes({students, setStudentClicked, onClickGroup}){

const foxes = students.filter((student)=>student.personalityType === "F")



    return(
      
        <div id="foxes" className="studentTable">
        <h1>Foxes</h1>
        <ul>
        {foxes.length>0 && (
          foxes.map((fox)=>{
          return(
            <>
            <div key={fox.id} className="studentListBtn">
            <button 
            id={fox.id}
            className = "fox-btn" 
            onClick={()=>{setStudentClicked(fox.id)}}
            >
              {fox.firstName} {fox.lastName}
            </button>
         
              <button key={fox.id} onClick={onClickGroup}>X</button>
            
            </div>
          
            
            
          </>
        )}))}
        </ul> 
        </div>  
       
    )

}

export default Foxes;

// {isVisible === true? (
//   <button id={fox.id} onClick={onClickGroup(fox.id)}>X</button>
// ):(
//   null
// )} 