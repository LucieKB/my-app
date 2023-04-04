import React, {useState, useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import NewStudentForm from "./NewStudentForm";
import StudentList from "./StudentList"
import StudentGroups from "./StudentGroups"
import Checkbox from "./Checkbox"

function StudentPage(){
    const [students, setStudents]=useState([])
    const [formData, setFormData] = useState({});

    useEffect(()=>{
      fetch ("http://localhost:3001/students")
      .then((r)=>r.json())
      .then((students)=> setStudents(students));
    },[]) 

//     function studentList(){
//     const [filteredStudents, setFilteredStudents]=useState(students)
//    return (
//       <li className = "student-card">
//         {filteredStudents.map(student)=>{
//     <StudentCard 
//           const { name, experience, department, id } = employee
//           return (
//             <li key={id}>
//               <div>
//                 Name: <strong>{name}</strong>
//               </div>
//               <div>Experience: {experience} year(s)</div>
//               <div>Department: {department}</div>
//             </li>
//           )
//         })}
//       </ul>
//     </div>

//    )

// }

return (
    <main>
       <Switch>
      <Route path = "/newForm">
        <NewStudentForm students={students} setStudents={setStudents} formData={formData} setFormData={setFormData}/>
      </Route>
      <Route path = "/studentList">
        <StudentList students={students} setStudents={setStudents} formData={formData} setFormData={setFormData}/>
      </Route>
      <Route path = "/studentgroups">
        <StudentGroups students={students} setStudents={setStudents}/>
      </Route>
      <Route path = "/questions">
        <Checkbox />
      </Route>
      <Route exact path = "/">
        <h1> TBD Picture and theory</h1>  <h3>(has to be in a Home component)</h3>
      </Route>
    </Switch> 
    </main>
)

}
export default StudentPage;