import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header"
import NavBar from "./NavBar"
import NewStudentForm from "./NewStudentForm"
import StudentList from "./StudentList"
import StudentGroups from "./Groups"
import Checkbox from "./Checkbox"

function App() {
const [students, setStudents]=useState([])

  useEffect(()=>{
    fetch ("http://localhost:3001/students")
    .then((r)=>r.json())
    .then((students)=> setStudents(students));
  }, []) 

  return (
    <div>
      <Header />
      <NavBar />
    <Switch>
      <Route path = "/newForm">
        <NewStudentForm />
      </Route>
      <Route path = "/studentList">
        <StudentList students={students}/>
      </Route>
      <Route path = "/studentgroups">
        <StudentGroups />
      </Route>
      <Route path = "/questions">
        <Checkbox />
      </Route>
      <Route exact path = "/">
        <h1> TBD Picture and theory</h1>  <h3>(has to be in a Home component)</h3>
      </Route>
    </Switch>
    </div>
  );
}

export default App;