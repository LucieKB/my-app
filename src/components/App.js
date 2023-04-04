import React, {useState, useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header"
import NavBar from "./NavBar"
import NewStudentForm from "./NewStudentForm"
import StudentList from "./StudentList"
import StudentGroups from "./StudentGroups"
import Checkbox from "./Checkbox"
import StudentPage from "./StudentPage";

function App() {


  return (
    <div>
      <Header />
      <NavBar />
      <StudentPage />
    </div>
  );
}

export default App;