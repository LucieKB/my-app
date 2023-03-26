import React, {useState} from "react";
import Questions from "./Questions";


function NewStudentForm(){
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
function getDominantLetter(e){ 
  for (let i=2; i<38; i++){
   let currentCheckBox = e.target[i];
   if (current )
  }

}
  
function handleSubmit(e){
    getDominantLetter(e)
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
      <Questions />
      </div>
      <br />
      <button type="submit">Submit my info</button>
    </form>
    </section>
  );
}
// }

export default NewStudentForm;