import React, {useState, useEffect} from "react";
import StudentCard from "./StudentCard"


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

  const otters = students.filter(isOtter);
  function isOtter(student) {
    if (student.personalityType === "O"){
      return student
    }
  }
  console.log(otters)

  const pandas = students.filter(isPanda);
  function isPanda(student) {
    if (student.personalityType === "P"){
      return student
    }
  }
  console.log(pandas)

  const fox = students.filter(isFox);
  function isFox(student) {
    if (student.personalityType === "F"){
      return student
    }
  }
  console.log(fox)
}, [ ,formData])

useEffect(() => {
  let oneLion = ((lion)=> {
    let randomIndexL= Math.floor(Math.random()*lion.length)
    oneLion = lion[randomIndexL] 
  }
  )
  let oneOtter = ((otter)=> {
    let randomIndexL= Math.floor(Math.random()*otter.length)
    oneOtter = otter[randomIndexL]
  }
  )
  let onePanda = ((panda)=> {
    let randomIndexL= Math.floor(Math.random()*panda.length)
    onePanda = panda[randomIndexL] 
  }
  )

  let oneFox = ((fox)=> {
    let randomIndexL= Math.floor(Math.random()*fox.length)
    oneFox = fox[randomIndexL]
  }
  )
setGroup({oneLion, oneOtter, onePanda, oneFox})
console.log(group) 
},[])




return(
    <div className="studentList">
       <h2> List of Students :</h2>
        {students.map((student)=>{
          return(
            <StudentCard key={student.id} student={student} formData={formData}/>
        );
        } 
        )} 
       <button > Make my Groups !</button>  
    </div>
);
}

export default StudentList;