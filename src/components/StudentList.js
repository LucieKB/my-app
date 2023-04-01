import React, {useState, useEffect} from "react";
import StudentCard from "./StudentCard"


function StudentList({students}){

console.log(students)





return(
    <li className="studentList">
       <h2> List of Students :</h2>
        {students.map((student)=>{
          return(
            <StudentCard key={student.id} student={student}/>
        );
        }  
        )}   
    </li>
);
}

export default StudentList;