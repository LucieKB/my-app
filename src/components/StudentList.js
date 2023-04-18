import React, {useState, useEffect} from "react";
import Lions from "./Lions";
import Otters from "./Otters";
import Pandas from "./Pandas";
import Foxes from "./Foxes";
import StudentCard from "./StudentCard";
import "./StudentList.css" 
import Checkbox from "./Checkbox";


function StudentList({students}){
  const [studentClicked, setStudentClicked] = useState()
  const [inGroup, setInGroup]=useState([])
  const [isDone, setIsDone]=useState(false)
 

 

let number = 1



function handleGroup(e){

let arrayLength = inGroup.length;  
let thisStudent = [];
 
 if(arrayLength<=4){


  console.log(e.target.id)
  e.currentTarget.disabled=true
  
  students.forEach((
    (student) => {
    if(student.id == e.target.id){
      thisStudent = student.firstName}}));

   setInGroup([...inGroup, thisStudent])}
    
if (arrayLength === 4){
      alert("Groups can't be bigger than 4 students")
      setInGroup(inGroup)
    }
  }
   
  function handleGroupDone(){
   
    setIsDone(!isDone)
  }
  

  


console.log(inGroup)





return(
  <>
  <div className="titleList">
    
    <center>You have <b><mark>{students.length}</mark></b> students to group for this activity !</center>

 

  <div className="Groups">
      <h3> Group {number}</h3>
      <div className = "group-checked">
      {isDone === false? (
      <button className="not-finished-group" onClick = {handleGroupDone}>This group is done !</button>
      ) : (<button className="not-finished-group" >✅</button> )
      }
      </div>
      {inGroup.map(student=>{
        return(
          <li>
           {student} 
          </li>)
    })}    
  </div>
    
    
  </div>
<div className="studentListBtn"> 
    <Lions students={students} setStudentClicked={setStudentClicked} studentClicked={studentClicked} onClickGroup={handleGroup}/>
    <Otters students={students} setStudentClicked={setStudentClicked} studentClicked={studentClicked} onClickGroup={handleGroup}/>     
    <Pandas students={students} setStudentClicked={setStudentClicked} studentClicked={studentClicked} onClickGroup={handleGroup}/>
    <Foxes students={students} setStudentClicked={setStudentClicked} studentClicked={studentClicked} onClickGroup={handleGroup} />         
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

 //    return(
  //    [ `
  // student 1 : ${inGroup[0]},
  // student 1 : ${inGroup[1]},
  // student 1 : ${inGroup[2]},
  // student 1 : ${inGroup[3]}`])

