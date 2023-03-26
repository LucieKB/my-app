import React, {useState, useEffect} from "./react"

function StudentCard(){

    function animalImage(){
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




    return(
    
            <Card>
              <div>
                <div className="names">{student.firstName} {student.lastName}</div>
                </div>
                <div className="personnalityType">
                  <span>
                  <div className="image">
                    {animal.name}
                  <img className="animalImage"  
                //   src= {ternary with the assigned animal}
                  alt={animal.name} />
                </div>
                  </span>
                </div>
            </Card>
            );
}

export default StudentCard;