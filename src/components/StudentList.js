import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import Lions from "./Lions";
import Otters from "./Otters";
import Pandas from "./Pandas";
import Foxes from "./Foxes";
import StudentCard from "./StudentCard";
import "./StudentList.css" 



function StudentList({students, setStudents}){
  const [studentClicked, setStudentClicked] = useState()
  const history = useHistory()

  function deleteOneStudent(studentToDelete){
    const upDatedStudents = students.filter((student)=>student.id !== studentToDelete.id)
    setStudents(upDatedStudents)
   }
  
  function handleOnClickDelete(){
    console.log("delete")
    fetch ("http://localhost:3001/students",{
      method:"DELETE",
  })
    .then((r)=> {
      if (!r.ok){
        throw new Error ("Something went wrong");  
      }
      history.push('/');
    })
    .catch((error)=> console.log(error))
  }
 
return(
 
  <div className="titleList">
 <header>   
    <center><h2>You have <b><mark>{students.length}</mark></b> students to group for this activity !</h2></center>
    <article>
    <h3>You can <u>click on each student's name</u> to see their answer to the personnality test, the strengths and weaknesses of their personality type and how they usually work in a group setting.</h3>
    </article>
    
      <ol>
      <li>Get familiar with each personality type.</li>
      <li>You know your students better than anyone, so even though it is adivsed <strong>not to put two of the same personality type together in a group</strong>, you still have the freedom to group them as you wish.</li>
      <li>Now, you can type the number of the group so that your students know who they are working with for this project !</li>
     </ol>
</header>


<div className="studentListBtn"> 
    <Lions students={students} setStudentClicked={setStudentClicked} studentClicked={studentClicked} deleteOneStudent={deleteOneStudent} />
    <Otters students={students} setStudentClicked={setStudentClicked} studentClicked={studentClicked} deleteOneStudent={deleteOneStudent}/>     
    <Pandas students={students} setStudentClicked={setStudentClicked} studentClicked={studentClicked} deleteOneStudent={deleteOneStudent}/>
    <Foxes students={students} setStudentClicked={setStudentClicked} studentClicked={studentClicked} deleteOneStudent={deleteOneStudent}/>         
</div>
<div> 
{students.map((student)=>{
        if (student.id === studentClicked)
            return (
                <StudentCard key={student.id} student={student}/> )})}        
</div> 
<br />
<div className="delete">
  <h3><center> If you are done with your project, click on the Delete button below, and all you student datas for this class will be removed.</center></h3>
  <center><button className="DeleteBtn" 
  onClick={handleOnClickDelete} >
    Delete all students</button></center>
  </div>   
</div>


)
}


export default StudentList
