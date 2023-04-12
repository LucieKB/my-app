import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import Checkbox from "./Checkbox";



function NewStudentForm({formData, setFormData}){
const [arrayLetters, setArrayLetters]=useState([])
const [answers, setAnswers]=useState([])
const [trigger, setTrigger]=useState(0);
const history = useHistory();

function handleChange(event) {
  setFormData({
    ...formData,
    [event.target.name]: event.target.value,
  });

    console.log(formData)
}

function resetHistory()
{history.push(`/studentList/`)}

function handleSubmit(e){
  e.preventDefault()
  const counts = {};
  arrayLetters.forEach(function(x) {counts[x] = (counts[x] || 0) + 1})
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
  .then (data => resetHistory(data))

setFormData({
  firstName : "",
  lastName : "",
  personalityType : ""
})

setTrigger((trigger) => trigger+1)
}

  return (
    <section>
      <br></br>
      <h4> Write your first and last name in the boxes below:</h4>
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
      <Checkbox arrayLetters={arrayLetters} setArrayLetters={setArrayLetters} trigger={trigger} answers={answers} setAnswers={setAnswers}/>
      </div>
  
      <h4>Finally, click on the button below to find out which animal you are !</h4>
      <button type="submit">Submit my info</button>

     
    </form>
    </section>
  );
}
// }

export default NewStudentForm;