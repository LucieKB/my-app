import React, {useState} from "react";
import Header from "./Header"
import NavBar from "./NavBar"
import StudentPage from "./StudentPage";
import StudentGroups from "./StudentGroups";

function App() {
  const [group, setGroup] = useState([])

  return (
    <div>
      <Header />
      <NavBar />
      <StudentPage group={group} setGroup={setGroup}/>
      {/* <h1> Groups </h1> */}
      {/* <StudentGroups/> */}
    </div>
  );
}

export default App;