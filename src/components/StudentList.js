import React, {useState, useEffect} from "react";
import StudentCard from "./StudentCard"
import StudentGroups from "./StudentGroups";


function StudentList({students, formData}){
  const [group, setGroup] = useState([])

  useEffect(()=>{
  const lions = students.filter(isLion);
  function isLion(student) {
    if (student.personalityType === "L"){
      return student
    }
  }
  console.log(lions)
  let randomIndexL= lions[Math.floor(Math.random()*lions.length)];
  console.log(randomIndexL)
  

  const otters = students.filter(isOtter);
  function isOtter(student) {
    if (student.personalityType === "O"){
      return student
    }
  }
  console.log(otters)
  let randomIndexO= otters[Math.floor(Math.random()*otters.length)];
  console.log(randomIndexO)
  

  const pandas = students.filter(isPanda);
  function isPanda(student) {
    if (student.personalityType === "P"){
      return student
    }
  }
  console.log(pandas)
  let randomIndexP= pandas[Math.floor(Math.random()*pandas.length)];
  console.log(randomIndexP)
  

  const fox = students.filter(isFox);
  function isFox(student) {
    if (student.personalityType === "F"){
      return student
    }
  }
  console.log(fox)
  let randomIndexF= fox[Math.floor(Math.random()*fox.length)];
  console.log(randomIndexF)
  
  setGroup([randomIndexL, randomIndexP, randomIndexF, randomIndexO])
  
}, [ ,formData])

function handleClickGroups(){
  const studentGroup = group.map((student, index)=>{
    return <StudentGroups key={index} {...student} />;
  });
  
  return (
    <div>
    <h1>Here are your groups for today's project !</h1>
    {studentGroup}
   </div> 
  ) 
}

return(
    <div className="studentList">
       <h2> List of Students :</h2>
        {students.map((student)=>{
          return(
            <StudentCard key={student.id} student={student} formData={formData}/>
        );
        } 
        )} 
       
       <button onClick={handleClickGroups} > Create my Groups !</button>  
    </div>
);
}

export default StudentList;

// fName={student.firstName} lName={student.lastName}