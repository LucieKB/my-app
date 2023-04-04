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
            <li className="names">
                  {student.firstName} {student.lastName}
                  <h3> Your Personality type :</h3>
                            <img className="animal-image"
                            src={animalToDisplay.image} alt={animalToDisplay.name}/>
            </li>
        </div>               
            )
}

export default StudentCard;

