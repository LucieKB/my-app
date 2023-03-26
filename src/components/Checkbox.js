import React, {useState} from "react";

const Checkbox = ({ label}) => {
    const [isChecked, setIsChecked]=useState(false)
    return (
      <div className="checkbox-wrapper">
        <label>
          <input 
          type="checkbox" 
          onChange={() => setIsChecked(!isChecked)}
          />
          <span>{label}</span>
        </label>
        <p>{isChecked?"Selected":"Unchecked"}</p>
      </div>
    );
  };
  export default Checkbox;

      // <div>
    //     <form className="checkBoxes" 
    //     onChange={handleChangeChecked}
        // onSubmit={onAddPersonnality}
        // >
            {/* <input type="checkbox" name="G2" value="G" checked={isChecked} onChange={console.log("checked")}/>
            Calm, even-keel
            <br />
            <input type="checkbox" name="B6" value="B" checked={isChecked} onChange={handleOnChange}/>
            A perfectionist
            <br />
            <input type="checkbox" name="L1" value="L" checked={isChecked} onChange={handleOnChange}/>
            Determined
            <br /> 
            <input type="checkbox" name="G3" value="G" checked={isChecked} onChange={handleOnChange}/>
            Someone who enjoys routine
            <br />
            <input type="checkbox" name="O2" value="O"/>
            A risk-taker
            <br /> <input type="checkbox" name="O3" value="O"/>
            Someone who likes to talk
            <br />  */}
            {/* <input type="checkbox" name="B2" value="B"/>
            Accurate and precise
            <br />
            <input type="checkbox" name="B1" value="B"/>
            Someone who likes instructions
            <br />
            <input type="checkbox" name="L2" value="L"/>
            Competitive
            <br /> 
            <input type="checkbox" name="L3" value="L"/>
            A good problem-solver
            <br /> 
            <input type="checkbox" name="G6" value="G"/>
            A peace-maker
            <br />
            <input type="checkbox" name="O6" value="O"/>
            Spontaneous
            <br /> 
            <input type="checkbox" name="O4" value="O"/>
            Enjoying being popular
            <br /> 
            <input type="checkbox" name="B3" value="B"/>
            Predictable
            <br />
            <input type="checkbox" name="L4" value="L"/>
            Bold
            <br /> 
            <input type="checkbox" name="L5" value="L"/>
            A decision-maker
            <br /> 
            <input type="checkbox" name="G4" value="G"/>
            Someone who likes giving to others
            <br />
            <input type="checkbox" name="B4" value="B"/>
            Practical
            <br />
            <input type="checkbox" name="O5" value="O"/>
            Liking variety and change
            <br /> 
            <input type="checkbox" name="L6" value="L"/>
            Persistent
            <br /> 
            <input type="checkbox" name="O1" value="O"/>
            Enthusiastic
            <br /> 
            <input type="checkbox" name="B5" value="B"/>
            Conscientious
            <br />
            <input type="checkbox" name="G1" value="G"/>
            Loyal
            <br /> 
            <input type="checkbox" name="G5" value="G"/>
            Someone who avoids confrontation
            <br />
            <button>Submit</button> */}
    //     </form>
    //  </div>
//     )
// }
