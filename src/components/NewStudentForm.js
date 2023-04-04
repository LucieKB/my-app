import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import Checkbox from "./Checkbox";



function NewStudentForm({formData, setFormData}){
const [arrayLetters, setArrayLetters]=useState([])
const [trigger, setTrigger]=useState(0);
const history = useHistory();

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
  .then(r=>r.json())
  .then (data => {history.push(`/studentList/`)
})

setFormData({
  firstName : "",
  lastName : "",
  personalityType : ""
})

setTrigger((trigger) => trigger+1)
}

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
      <Checkbox arrayLetters={arrayLetters} setArrayLetters={setArrayLetters} trigger={trigger}/>
      </div>
      <br />
      <button type="submit">Submit my info</button>

     
    </form>
    </section>
  );
}
// }

export default NewStudentForm;