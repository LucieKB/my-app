import React, {useState, useEffect} from "react"
import {animals} from "../utils/animals.js"

function StudentCard({student, formData}){
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
}}, [formData] )
 

   if(!animalToDisplay){
    return <h3>Loading...</h3>
}

let studentAnswers = student.answers;

if(student.answers === undefined){
   return ( <div className="names">
    
        
   <h4><u>{student.firstName} {student.lastName}</u></h4>
  <h5><u> {student.firstName}'s Personality Type :</u></h5>
             <img className="animal-image"
             src={animalToDisplay.image} alt={animalToDisplay.name}/>       
     <h5><u> Description of {student.firstName}'s Personality in a Group : </u></h5> 
     {animalToDisplay.description}      
     <h5><u> {student.firstName}'s strengths :</u></h5>
     {animalToDisplay.strengths}
     <h5><u> {student.firstName}'s weaknesses :</u></h5>
     {animalToDisplay.weaknesses}

</div>               ) 
}
console.log(studentAnswers)

return(
   <div className="names">
    
        
                  <h4><u>{student.firstName} {student.lastName}</u></h4>
                 <h5><u> {student.firstName}'s Personality Type :</u></h5>
                            <img className="animal-image"
                            src={animalToDisplay.image} alt={animalToDisplay.name}/>
                     <h5><u> {student.firstName}'s Answers :</u></h5> 
                         {studentAnswers.map(answer => <li key={student.id}>{answer}</li>)};         
                    <h5><u> Description of {student.firstName}'s Personality in a Group : </u></h5> 
                    {animalToDisplay.description}      
                    <h5><u> {student.firstName}'s strengths :</u></h5>
                    {animalToDisplay.strengths}
                    <h5><u> {student.firstName}'s weaknesses :</u></h5>
                    {animalToDisplay.weaknesses}
            
        </div>               
            )
}

export default StudentCard;

