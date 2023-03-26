import React, {useState} from "react"
import {behavior} from "../utils/behaviorCheckbox.js"

function Questions({isChecked}){
    const [personality, setPersonality] = useState([])
    

   
   
    function handleOnChange(e){
        do{
        if(isChecked){
           const personalityArray= [...personality].push(e.target.value)
            setPersonality(personalityArray)
        }}
    //     while(personality.length<=3);
    //  console.log(personality)   
    

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
                onChange={()=>handleOnChange}
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