import { useState } from "react";

function InputForm(props) {
    const [input, setInput] = useState(0);
    return (
        <div className="">
            Input<br/>
            <input className="w-1/4 border border-gray-900 rounded-md p-2" 
            value={input} 
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter values" />
        </div>
    )
}
export default InputForm;