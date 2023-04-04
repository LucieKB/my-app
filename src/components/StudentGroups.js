import React, {useState, useEffect} from "react";

function StudentGroups({student, name, personality}){
    // const [lion, setLion]= useState([])
    // const [otter, setOtter]= useState([])
    // const [panda, setPanda]= useState([])
    // const [fox, setFox]= useState([])


    console.log(student, name, personality)

      function sortStudents(){
        if (personality === "L"){
            return name
        }
           }  
        
     

return(
    <div>
        <button onClick={sortStudents}>Group Students</button>
    </div>
)
      
}

export default StudentGroups;

// const student = students.map((student)=>{
//     return student})
// const personality = student.personalityType
// console.log(personality)

// useEffect(()=>{
// switch(student.personalityType){
//  case "L": setLion(student);
//  break;
//  case "O": setOtter(student);
//  break;
//  case "P": setPanda(student);
//  break;
//  case "F": setFox(student);
//  break;  
//  default : console.log("there shouldn't be a default")
// }}, [] )