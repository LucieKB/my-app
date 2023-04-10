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


    
   return (
    
   <div>
    
//             <p className="names">
//                   {student.firstName} {student.lastName}
//                   <h3> Student Personality type :</h3>
//                             <img className="animal-image"
                            src={animalToDisplay.image} alt={animalToDisplay.name}/>
                    <h3> Description of that personality type in a group : </h3> 
                    {animalToDisplay.description}      
                    <h3> Student strengths :</h3>
                    {animalToDisplay.strengths}
                    <h3> Student weaknesses :</h3>
                    {animalToDisplay.weaknesses}
            </p>
        </div>               
            )
}

export default StudentCard;

