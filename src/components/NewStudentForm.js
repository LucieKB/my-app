import React, {useState} from "react";
import Checkbox from "./Checkbox";


function NewStudentForm({updatedList}){
const [formData, setFormData] = useState({
    student:{
    id:"" ,
    firstName: "",
    lastName: "",
    dominantLetter:"",
  }
});
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
    }

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
    </form>
    </section>
  );
}
// }

export default NewStudentForm;