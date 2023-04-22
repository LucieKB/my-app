import React, {useEffect} from "react";



function DeleteButton({student, deleteOneStudent}){

  // useEffect(()=> {
  //   const timer = setTimeout(()=>{
  //   alert("This student will be permanently erased!")
  //   }, 500);
  //   return (clearTimeout(timer));
  //   },[]);


function handleOnClickDeleteOneStudent(){
        fetch (`http://localhost:3001/students/${student.id}`,{
          method:"DELETE",
      })
        .then(r=>r.json())
        .then (()=>deleteOneStudent(student));
      }

   return(
    <button id={student.id} onClick={handleOnClickDeleteOneStudent}>x</button>
   )
}
export default DeleteButton;