import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import Checkbox from "./Checkbox";


function NewStudentForm({onAddStudent}){
const [arrayLetters, setArrayLetters]=useState([])
const [answers, setAnswers]=useState([])
const history = useHistory();
const [checked, setChecked]=useState([])
const [selected, setSelected]=useState(false)
const [formData, setFormData] = useState({
  firstName:"",
  lastName:"",
  personalityType:"",
  answers:[]
});

function handleChange(event) {
  setFormData({
    ...formData,
    [event.target.name]: event.target.value,
  });
    console.log(formData)
}

function resetHistory()
{history.push(`/studentList`)}

function handleSubmit(e){
  e.preventDefault()
  formData.answers=answers;
  const counts = {};
  arrayLetters.forEach(function(x) {counts[x] = (counts[x] || 0) + 1})
  const dominantLetter = Object.keys(counts).reduce(function(a,b){return counts[a]>counts[b]? a:b});
  formData.personalityType=dominantLetter;
  setFormData({...formData 
  })


  fetch ("http://localhost:3001/students",{
    method:"POST",
    headers:{
      "Content-Type": "application/json" 
    },
    body: JSON.stringify(formData)
})
  .then(r=>r.json())
  .then (newStudent=>onAddStudent(newStudent));

let resetArray=[]
setChecked(resetArray)
setSelected(false)
  
setFormData({
  firstName : "",
  lastName : "",
  personalityType : "",
  answers: []
});

resetHistory(); 

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
      <Checkbox arrayLetters={arrayLetters} setArrayLetters={setArrayLetters} answers={answers} setAnswers={setAnswers} checked={checked} setChecked={setChecked} selected={selected} setSelected={setSelected} />
      </div>
  
      <h4>Finally, click on the button below to find out which animal you are !</h4>
      <button type="submit">Submit my info</button>

     
    </form>
    </section>
  );
}
// }

export default NewStudentForm;