import React, {useState, useEffect} from "react";
import Lions from "./Lions";
import Otters from "./Otters";
import Pandas from "./Pandas";
import Foxes from "./Foxes";
import StudentCard from "./StudentCard";
import "./StudentList.css" 



function StudentList({students, onAddNewGroup, newGroups}){
  const [studentClicked, setStudentClicked] = useState()
  const [inGroup, setInGroup]=useState([])
  const [inGroup2, setInGroup2]=useState([])
  const [isDone, setIsDone]=useState(false)
 

 

let number = 1



function handleGroup(e){

let arrayLength = inGroup.length;  
let thisStudent = [];
 
 if(0<arrayLength<=4){


  console.log(e.target.id)
  e.currentTarget.disabled=true
  
  students.forEach((
    (student) => {
    if(student.id == e.target.id){
      thisStudent = student.firstName}}));

   setInGroup([...inGroup, thisStudent])}
    
else if (arrayLength === 4){
      alert("Groups can't be bigger than 4 students")
      setInGroup(inGroup)
    }

else if (arrayLength>4){
  let newNameArray=inGroup.splice(4,4)
  console.log(newNameArray)
  setInGroup2(newNameArray)
  e.currentTarget.disabled=true
  
  students.forEach((
    (student) => {
    if(student.id == e.target.id){
      thisStudent = student.firstName}}));

   setInGroup2([...inGroup2, thisStudent])}
}
 
   
  function handleGroupDone(){
    setIsDone(!isDone)
    fetch ("http://localhost:3001/groups",{
      method:"POST",
      headers:{
        "Content-Type": "application/json" 
      },
      body: JSON.stringify(inGroup)
  })
    .then(r=>r.json())
    .then (newGroup=>onAddNewGroup(newGroup));
    setIsDone(!isDone)
  }

console.log(inGroup)

// TRY TO HAVE A SET AMOUNT OF GROUPS, AND THEN A BUTTON THAT WOULD - EDIT BUTTON / DONE EDITING - THE GROUPS THEMSELVES CAN BE STORED IN THE DATA BASE (MAYBE GROUP1, GROUP2 ... KEY IS TO HAVE AN EDIT BTN )

// function handleGroupDone2(){
//   fetch ("http://localhost:3001/groups",{
//     method:"POST",
//     headers:{
//       "Content-Type": "application/json" 
//     },
//     body: JSON.stringify(inGroup2)
// })
//   .then(r=>r.json())
//   .then (newGroup=>onAddNewGroup(newGroup));
//   setIsDone(!isDone)
// }







return(
  <>
  <div className="titleList">
    
    <center>You have <b><mark>{students.length}</mark></b> students to group for this activity !</center>

 

    <div className="Groups">
{newGroups.map((thisGroup, index) => {
return (
  <div>
  <h3> Group {index+1}</h3>
      <div className = "group-checked">
      {isDone === false? (
      <button className="not-finished-group" onClick = {handleGroupDone}>This group is done !</button>
      ) : (<button className="not-finished-group" >✅</button> )
      }
      </div>
      
      {thisGroup.map(student=>{
        return(
          <li>
           {student} 
          </li>)
    })}  
  </div>  
)

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

 {/* //    return(
  //    [ `
  // student 1 : ${inGroup[0]},
  // student 1 : ${inGroup[1]},
  // student 1 : ${inGroup[2]},
  // student 1 : ${inGroup[3]}`]) */}


   {/* //map each group to a group component (like the <div> 
{students.map((student)=>{
        if (student.id === studentClicked)
            return (
                <StudentCard key={student.id} student={student}/> )})}        
</div>  ) */}

{/* // <div className="Groups">
    //   <h3> Group {number+1}</h3>
    //   <div className = "group-checked">
    //   {isDone === false? ( */}
    {/* //   <button className="not-finished-group" onClick = {handleGroupDone2}>This group is done !</button>
    //   ) : (<button className="not-finished-group" >✅</button> )
    //   }
    //   </div>
    //   {inGroup2.map(student=>{ */}
    {/* //     return(
    //       <li>
    //        {student} 
    //       </li>)
    // })}    
    // </div>
    
    
  // </div> */}