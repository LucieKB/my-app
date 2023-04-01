import React, {useState, useEffect} from "react"
import {behavior} from "../utils/behaviorCheckbox.js"

function Checkbox({arrayLetters, setArrayLetters, trigger}){
    const [checked, setChecked]=useState([])
    const [selected, setSelected]=useState(false)


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
    };
   
   

// add a limit to only check 10 attributes

    return(
   <div className="checkboxes">
<h3> Hello </h3>
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