import React, {useState, useEffect} from "./react"
import {animals} from "../utils/animal.js"

function StudentCard({student}){

    const animalImage= () => {
        const[animal, setAnimal]= useState(null)

    useEffect(()=>{
        fetch ("./images")
        .then(r=>r.json())
        .then(animal => setAnimal(animal.image))
    }, [student])

    if(!animal){
        return <h2>Loading...</h2>
    }
    }

    function whichPersonality(student){
        if (student.personality === )
    }


    return(
    
  <section>
                <div className="names">
                  {student.firstName} {student.lastName}
                </div>
      
                <div className="personnalityType">
                  <h2> Your Personality type :</h2>
                </div>
                  <div className="image">
                    {animal.name}
                  <img className="animalImage"  
                //   src= {ternary with the assigned animal}
                  alt={animal.name} />
                </div>
</section>                  

  
            );
}

export default StudentCard;