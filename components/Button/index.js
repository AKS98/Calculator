import React from "react";
import './index.css'

const CalculatorButton=(props)=>{
    return(
        <td><input type="button" className="but" value={props.value} onClick={()=>props.calculate(props.value)}/></td>
    )
}
export default CalculatorButton;