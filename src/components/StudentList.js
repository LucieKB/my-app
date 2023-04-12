import React, {useState, useEffect} from "react";
import {Link, Route} from "react-router-dom";
import StudentCard from "./StudentCard"
import "./StudentList.css" 


function StudentList({students, formData}){
  const [lions, setLions] = useState([])
  const [otters, setOtters] = useState([])
  const [pandas, setPandas] = useState([])
  const [foxes, setFoxes] = useState([])
  // const [student, setStudent] = useState ([])
  
//   useEffect(()=>{
//  setStudent(students.map((student)=> student.firstName, student.lastName, student.personalityType))
//   }, [ , formData])

  useEffect(()=>{
  setLions(students.filter(isLion))
  function isLion(student) {
    if (student.personalityType === "L"){
      return student
    }
  }
  console.log(lions)
 
  setOtters(students.filter(isOtter))
  function isOtter(student) {
    if (student.personalityType === "O"){
      return student
    }
  }
  console.log(otters)

  setPandas (students.filter(isPanda));
  function isPanda(student) {
    if (student.personalityType === "P"){
      return student
    }
  }
  console.log(pandas)
 
  setFoxes (students.filter(isFox));
  function isFox(student) {
    if (student.personalityType === "F"){
      return student
    }
  }
  console.log(foxes)

}, [ ,formData])

// let studentCard=()=>{
//   console.log(students)
//   return(
//     <div className="student-card">
//       <h2>My student :</h2>
//     {students.map((student)=>{
//               return(
//                 <StudentCard key={student.id} student={student} formData={formData}/>
              
//   )}
//   )}
//   </div>
  
//   )
// }


return(
    <div className="studentList">

      <div id="lions" className="studentTable">
        <h1>Lions</h1>
        <ul>
        {lions.length>0 && (
          lions.map((lion)=>{
          return(
            <div>
              <Link to={`/studentList/${lion.id}`}>
            <button className = "lion-btn" >
              {lion.firstName} {lion.lastName}
            </button>
              </Link>
            </div>
          )}))}
        </ul>
      
        <li className="student-card">
          <Route path={`/studentList/:lionId`}>
          {students.map((student)=>{
        if (student.personalityType === "L")
        // (student.id === lions.map((lion)=>lion.id))
            return (
                <StudentCard key={student.id} student={student} formData={formData}/> )})}         
       </Route> 
       </li> 
      </div>

      <div id="otters" className="studentTable">
      <h1>Otters</h1>
        <ul>
        {otters.length>0 && (
          otters.map((otter)=>{
          return(
            <div>
            <Link to={`/studentList/${otter.id}`}>
          <button className = "otter-btn" >
            {otter.firstName} {otter.lastName}
          </button>
            </Link>
          </div>
          )}))}
        </ul>
        <li className="student-card">
          <Route path={`/studentList/:otterId`}>
          {students.map((student)=>{
        if (student.personalityType === "O")
            return (
                <StudentCard key={student.id} student={student} formData={formData}/> )})}         
       </Route> 
       </li> 
      </div>

      <div id="pandas" className="studentTable">
      <h1>Pandas</h1>
        <ul>
        {pandas.length>0 && (
          pandas.map((panda)=>{
          return(
            <div>
            <Link to={`/studentList/${panda.id}`}>
          <button className = "panda-btn" >
            {panda.firstName} {panda.lastName}
          </button>
            </Link>
          </div>
          )}))}
        </ul>
        <li className="student-card">
          <Route path={`/studentList/:pandaId`}>
          {students.map((student)=>{
        if (student.personalityType === "P")
            return (
                <StudentCard key={student.id} student={student} formData={formData}/> )})}         
       </Route> 
       </li> 
      </div>

      <div id="fox" className="studentTable">
      <h1>Foxes</h1>
        <ul>
        {foxes.length>0 && (
          foxes.map((fox)=>{
          return(
            <div>
            <Link to={`/studentList/${fox.id}`}>
          <button className = "fox-btn" >
            {fox.firstName} {fox.lastName}
          </button>
            </Link>
          </div>
          )}))}
        </ul>
        <li className="student-card">
          <Route path={`/studentList/:foxId`}>
          {students.map((student)=>{
        if (student.personalityType === "F")
            return (
                <StudentCard key={student.id} student={student} formData={formData}/> )})}         
       </Route> 
       </li> 
      </div>
  
 </div>       
    
);
}

export default StudentList;