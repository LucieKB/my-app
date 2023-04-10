import React, {useState, useEffect} from "react";
import StudentCard from "./StudentCard"
import StudentGroups from "./StudentGroups";
import "./StudentList.css" 


function StudentList({students, formData}){
  const [lions, setLions] = useState([])
  const [otters, setOtters] = useState([])
  const [pandas, setPandas] = useState([])
  const [foxes, setFoxes] = useState([])
  const [listOfGroups, setListOfGroups] = useState([])
  const [checked, setChecked] = useState(false)
  const [isDisabled, setIsDisabled]=useState(false)
  const [selected, setSelected]=useState(false)

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

const onChange = () => {
  setChecked(!checked);
}

 // let myGroup = [...checked];
  //   if (e.target.checked){
  //       myGroup = [...checked, e.target.value];
  //   }else{myGroup.splice(checked.indexOf(e.target.value), 1);
  //   }
  //   setChecked(myGroup)

  //   if (e.target.checked){
  //       setSelected(true)
  //   }
  //   setListOfGroups(myGroup)



// useEffect((value)=>{

//   if (listOfGroups.includes(value)){
//       setIsDisabled(!isDisabled)
//   }
// }, [listOfGroups])

return(
    <div className="studentList">
      <div id="lions" className="studentTable">
        <h1>Lions</h1>
        <ul>
        {lions.length>0 && (
          lions.map((lion, index)=>{
          return(
            <div key={lion.id}>
                <input
                type="checkbox"
                id={lion.id}
                value={lion.firstName}
                checked={selected[index]}
                disabled = {isDisabled}
                onChange={onChange}
                />{lion.firstName} {lion.lastName}
            </div>
  
            // <li key={lion.id}>
            //   {lion.firstName}
            // </li>
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
              {otter.firstName}
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
              {panda.firstName}
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
              {fox.firstName}
            </li>
          )}))}
        </ul></div> 
    </div>
);
}

export default StudentList;

