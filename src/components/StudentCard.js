import React, {useState, useEffect} from "react"
import {animals} from "../utils/animals.js"

function StudentCard({student}){
    const [animalToDisplay, setAnimalToDisplay]=useState(animals)
    

  useEffect(()=>{
   switch(student.personalityType){
    case "L": setAnimalToDisplay(animals[0]);
    break;
    case "O": setAnimalToDisplay(animals[1]);
    break;
    case "P": setAnimalToDisplay(animals[2]);
    break;
    case "F": setAnimalToDisplay(animals[3]);
    break;  
    default : console.log("there shouldn't be a default")
}} )
 

   if(!animalToDisplay){
    return <h3>Loading...</h3>
}

let studentAnswers = student.answers;

if(student.answers === undefined){
   return ( 
   <>
   <div className = "student-card">
    
  <div style={{textAlign : "center"}}> <h2><u>{student.firstName} {student.lastName}</u></h2>
 
  </div>
  <h4><u> {student.firstName}'s Personality Type :</u></h4>
             <img className="animal-image"
             src={animalToDisplay.image} alt={animalToDisplay.name}/>   
</div>  
<div className = "student-card1">    
     <h4><u> Description of {student.firstName}'s Personality in a Group : </u></h4> 
     {animalToDisplay.description}      
     <h4><u> {student.firstName}'s strengths :</u></h4>
     {animalToDisplay.strengths}
     <h4><u> {student.firstName}'s weaknesses :</u></h4>
     {animalToDisplay.weaknesses}
<br />
</div> 
</>               
)}


return(
    <>
   <div className= "student-card">
    
                  <h2><u>{student.firstName} {student.lastName}</u></h2>
                 <h4><u> {student.firstName}'s Personality Type is the {animalToDisplay.name}:</u></h4>
                            <img className="animal-image"
                            src={animalToDisplay.image} alt={animalToDisplay.name}/>
    </div>  
    <div className = "student-card1">
                     <h4 ><u> {student.firstName}'s Answers :</u></h4> 
                         {studentAnswers.map(answer => <li key={student.id}>{answer}</li>)}         
                    <h4><u> Description of {student.firstName}'s Personality in a Group : </u></h4> 
                    {animalToDisplay.description}      
                    <h4><u> {student.firstName}'s strengths :</u></h4>
                    {animalToDisplay.strengths}
                    <h4><u> {student.firstName}'s weaknesses :</u></h4>
                    {animalToDisplay.weaknesses}
    </div>         
    </>                 
            )
}

export default StudentCard;

