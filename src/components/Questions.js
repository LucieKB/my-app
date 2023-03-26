import React, {useState} from "react"
import {behavior} from "../utils/behaviorCheckbox.js"

function Questions(){
    const [personality, setPersonality] = useState([])
    const [isChecked, setIsChecked]=useState([])

   const handleOnChange = () => {
    setIsChecked(!isChecked)
   }
   
    function handleChangeChecked(e){
        do{
        if(isChecked){
           const personalityArray= [...personality].push(e.target.value)
            setPersonality(personalityArray)
        }}
        while(personality.length<=3);
     console.log(personality)   
    }

// add a limit to only check 10 attributes

    return(
   <div className="checkboxes">
<h3> Hello </h3>
<ul className="behavior-list">
{behavior.map(({label, value}, index)=>{
    return(
        <li key={index}>
            <div>
                <input
                type="checkbox"
                id={index}
                name={label}
                value={value}
                checked={isChecked[index]}
                onChange={()=>handleOnChange(index)}
                />{label}
            </div>
        </li>
    )
})}
</ul>

   </div>
    )
}

export default Questions;