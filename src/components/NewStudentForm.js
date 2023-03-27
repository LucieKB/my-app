import React, {useState} from "react";
import Checkbox from "./Checkbox";
import StudentCard from "./StudentCard"


function NewStudentForm(){
const [formData, setFormData] = useState({});
const [arrayLetters, setArrayLetters]=useState([])

function handleChange(event) {
  setFormData({
    ...formData,
    [event.target.name]: event.target.value,
  });

    console.log(formData)
}

function handleSubmit(e){
  e.preventDefault()
  console.log(arrayLetters)
  const counts = {};
  arrayLetters.forEach(function(x) {counts[x] = (counts[x] || 0) + 1})
  console.log (counts)
  const dominantLetter = Object.keys(counts).reduce(function(a,b){return counts[a]>counts[b]? a:b});
  formData.personality=dominantLetter;
  setFormData({...formData 
  })
  console.log(formData)

  fetch ("http://localhost:3001/students",{
    method:"POST",
    headers:{
      "Content-Type": "application/json" 
    },
    body: JSON.stringify({
      firstName : formData.firstName,
      lastName : formData.lastName,
      personalityType : formData.personality
  })
})
setFormData({
  firstName : "",
  lastName : "",
  personalityType : ""
})
}
 
  
// setFormData([...formData.push(dominantLetter)]) 

// console.log(formData)}

// function getDominantLetter(e){ 
//   for (let i=2; i<26; i++){
//    let currentCheckBox = e.target[i];
//   //  if (currentCheckBox.id === i)
  
//     console.log(currentCheckBox)
//     // arrayLetters.push(value.target[i].input.defaultValue)
//    }
//   }


  

    

  return (
    <section>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        placeholder= "First Name ..."
        onChange={handleChange}
        
      />
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        placeholder= "Last Name ..."
        onChange={handleChange}
        
      />
      <div>
        <br />
      <Checkbox arrayLetters={arrayLetters} setArrayLetters={setArrayLetters}/>
      </div>
      <br />
      <button type="submit">Submit my info</button>

      {/* <StudentCard formData={formData}/> */}
    </form>
    </section>
  );
}
// }

export default NewStudentForm;