import React, {useState, useEffect} from "react";
import StudentCard from "./StudentCard"
import StudentGroups from "./StudentGroups";
import "./StudentList.css" 


function StudentList({students, formData}){
  const [lions, setLions] = useState([])
  const [otters, setOtters] = useState([])
  const [pandas, setPandas] = useState([])
  const [foxes, setFoxes] = useState([])
  

  useEffect(()=>{
  setLions(students.filter(isLion))
  function isLion(student) {
    if (student.personalityType === "L"){
      return student
    }
  }
  console.log(lions)
  let randomIndexL= lions[Math.floor(Math.random()*lions.length)];
  console.log(randomIndexL)
  

  setOtters(students.filter(isOtter))
  function isOtter(student) {
    if (student.personalityType === "O"){
      return student
    }
  }
  console.log(otters)
  let randomIndexO= otters[Math.floor(Math.random()*otters.length)];
  console.log(randomIndexO)
  

  setPandas (students.filter(isPanda));
  function isPanda(student) {
    if (student.personalityType === "P"){
      return student
    }
  }
  console.log(pandas)
  let randomIndexP= pandas[Math.floor(Math.random()*pandas.length)];
  console.log(randomIndexP)
  

  setFoxes (students.filter(isFox));
  function isFox(student) {
    if (student.personalityType === "F"){
      return student
    }
  }
  console.log(foxes)
  let randomIndexF= foxes[Math.floor(Math.random()*foxes.length)];
  console.log(randomIndexF)
  
  // setGroup([randomIndexL, randomIndexP, randomIndexF, randomIndexO])
  
}, [ ,formData])

// function handleClickGroups(){
//   console.log("clicked")
 
//   return (
//     group.map((oneGroup)=>{
//       return(
//           <StudentGroups oneGroup={oneGroup} />)}
          
// ))}
// console.log(group)


// return (
//   group.map((thatGroup, index)=>{
//     return ( 
//     <StudentGroups key={index} name={thatGroup.firstName} lastName={thatGroup.lastName}/>)
//   })

return(
    <div className="studentList">
      <div id="lions" className="studentTable">
        <h1>Lions</h1>
        <ul>
        {lions.length>0 && (
          lions.map((lion)=>{
          return(
            <li key={lion.id}>
              {lion.firstName} {lion.lastName}
            </li>
          )}))}
        </ul>
      </div>
      <div id="otters" className="studentTable">
      <h1>Otters</h1>
        <ul>
        {otters.length>0 && (
          otters.map((otter)=>{
          return(
            <li key={otter.id}>
              {otter.firstName} {otter.lastName}
            </li>
          )}))}
        </ul>
      </div>
      <div id="pandas" className="studentTable">
      <h1>Pandas</h1>
        <ul>
        {pandas.length>0 && (
          pandas.map((panda)=>{
          return(
            <li key={panda.id}>
              {panda.firstName}  {panda.lastName}
            </li>
          )}))}
        </ul>
      </div>
      <div id="fox" className="studentTable">
      <h1>Foxes</h1>
        <ul>
        {foxes.length>0 && (
          foxes.map((fox)=>{
          return(
            <li key={fox.id}>
              {fox.firstName}  {fox.lastName}
            </li>
          )}))}
        </ul></div> 
    </div>
);
}

export default StudentList;

// fName={student.firstName} lName={student.lastName}

{/* <h2> List of Students :</h2>
{students.map((student)=>{
  return(
    <StudentCard key={student.id} student={student} formData={formData}/>
);
} 
)} 

<button onClick={handleClickGroups} > Create my Groups !</button>   */}