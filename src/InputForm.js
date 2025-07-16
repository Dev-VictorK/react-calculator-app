import { useEffect, useState } from "react";

function InputForm(props) {
    
    return (
        <>
            <input className="border border-gray-900 rounded-md p-2"
                value={props.input}
                onChange={(e) => props.setInput(e.target.value)}
                placeholder="Enter values" />
        </>
    )
}
export default InputForm;