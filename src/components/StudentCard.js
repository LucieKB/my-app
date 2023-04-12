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
    
            <p className="names">
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
            </p>
        </div>               
            )
}

export default StudentCard;

