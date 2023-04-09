import React, {useState} from "react";
import Header from "./Header"
import NavBar from "./NavBar"
import StudentPage from "./StudentPage";

function App() {
  const [group, setGroup] = useState([])

  return (
    <div>
      <Header />
      <NavBar />
      <StudentPage group={group} setGroup={setGroup}/>
    </div>
  );
}

export default App;