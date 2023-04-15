import React, {useState, useEffect} from "react";
import Lions from "./Lions";
import Otters from "./Otters";
import Pandas from "./Pandas";
import Foxes from "./Foxes";
import StudentCard from "./StudentCard";
import "./StudentList.css" 


function StudentList({students}){
  const [studentClicked, setStudentClicked] = useState()
  const [isVisible, setIsVisible] = useState(false)

  // function handleHideButton(){
  //   { (
  //   SetIsDisplayed((isDisplayed)=>!isDisplayed)) : SetIsDisplayed(false)}
  //   howManyPlates(sushi)
  // }


function hide(){
  setIsVisible(!isVisible)
}


return(
  <>
  <div className="titleList">
    <p>
    <center>You have <b><mark>{students.length}</mark></b> students to group for this activity !</center>
    
    </p>
  </div>
<div className="studentListBtn"> 
    <Lions students={students} setStudentClicked={setStudentClicked} studentClicked={studentClicked} onHideClick={hide}/>
    <Otters students={students} setStudentClicked={setStudentClicked} studentClicked={studentClicked}/>     
    <Pandas students={students} setStudentClicked={setStudentClicked} studentClicked={studentClicked}/>
    <Foxes students={students} setStudentClicked={setStudentClicked} studentClicked={studentClicked}/>         
</div>
<div> 
{students.map((student)=>{
        if (student.id === studentClicked)
            return (
                <StudentCard key={student.id} student={student}/> )})}        
</div>    
</>);
}

export default StudentList;