import React, {useState, useEffect} from "react"
import {behavior} from "../utils/behaviorCheckbox.js"

function Checkbox({arrayLetters, setArrayLetters, trigger, answers, setAnswers}){
    const [checked, setChecked]=useState([])
    const [selected, setSelected]=useState(false)
    const [isDisabled, setIsDisabled]=useState(false)
    

useEffect(()=>{
    let resetArray=[]
    if (trigger){
        setChecked(resetArray)
        setSelected(false)
        console.log ("triggered")
    }
}, [trigger])

   const handleCheck = (e) => {
    
    let arrayLetters= [...checked];
    if (e.target.checked){
        arrayLetters = [...checked, e.target.value];
    }else{arrayLetters.splice(checked.indexOf(e.target.value), 1);
    }
    setChecked(arrayLetters)

    if (e.target.checked){
        setSelected(true)
    }
    setArrayLetters(arrayLetters)

    let myanswers=[...answers, e.target.name];
    setAnswers(myanswers)
    console.log (e.target.name)
    };

useEffect(()=>{

    if (arrayLetters.length > 6){
        setIsDisabled(!isDisabled)
    }
}, [arrayLetters])
   

    return(
   <div className="checkboxes">
<h4> Read through all those personality traits, and check <u> seven </u> that you think describe you best : </h4>
<ul className="behavior-list">
{behavior.map(({label, value,}, index)=>{
    return(
        <li key={index}>
            <div>
                <input
                type="checkbox"
                id={index}
                name={label}
                value={value}
                checked={selected[index]}
                disabled = {isDisabled}
                onChange={handleCheck}
                />{label}
            </div>
        </li>
    )
})}
</ul>

   </div>
    )
}

export default Checkbox;