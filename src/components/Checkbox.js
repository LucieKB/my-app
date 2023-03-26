import React, {useState} from "react"
import {behavior} from "../utils/behaviorCheckbox.js"

function Checkbox(){
    // const [personality, setPersonality] = useState([])
    const [checked, setChecked]=useState([])
    const [selected, setSelected]=useState(false)

    

   const handleCheck = (e) => {
    let updatedList= [...checked];
    if (e.target.checked){
        updatedList = [...checked, e.target.value];
    }else{updatedList.splice(checked.indexOf(e.target.value), 1);
    }
    setChecked(updatedList)

    if (e.target.checked){
        setSelected(true)
    }

    console.log(updatedList)
    };
   
   
    // function handleChangeChecked(e){
    //     do{
    //     if(isChecked){
    //        const personalityArray= [...personality].push(e.target.value)
    //         setPersonality(personalityArray)
    //     }}
    //     while(personality.length<=3);
    //  console.log(personality)   
    // }

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