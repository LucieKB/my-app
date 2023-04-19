import React, {useState, useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import NewStudentForm from "./NewStudentForm";
import StudentList from "./StudentList"
import Checkbox from "./Checkbox"
import Home from "./Home"

function StudentPage(){
    const [students, setStudents]=useState([])
    const [newGroups, setNewGoups]= useState([])
   
    

    useEffect(()=>{
      fetch ("http://localhost:3001/students")
      .then((r)=>r.json())
      .then((students)=> setStudents(students));
    }, []) 

function handleAddStudent (newStudent){
  console.log("Add student", newStudent)
      setStudents([...students, newStudent])
    }

function handleAddNewGroup (newGroup){
  console.log("Add new Group", newGroup)
  setNewGoups([...newGroups, newGroup])
}

return (
    <main>
       <Switch>
      <Route path = "/newForm">
        <NewStudentForm students={students} setStudents={setStudents} onAddStudent={handleAddStudent}/>
      </Route>
      <Route path = "/studentList">
        <StudentList students={students} setStudents={setStudents} onAddNewGroup={handleAddNewGroup} newGroups={newGroups}/>
      </Route>
      <Route path = "/questions">
        <Checkbox />
      </Route>
      <Route exact path = "/">
        <Home />
      </Route>
    </Switch> 
    </main>
)

}
export default StudentPage;