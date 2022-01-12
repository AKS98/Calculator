import React from "react";
import './index.css'

const CalculatorButton=(props)=>{
    return(
        <td colSpan="4"><input type="text" id="display" value={props.value} placeholder="0"/></td>
    )
}
export default CalculatorButton;