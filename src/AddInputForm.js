import { useEffect, useState } from "react";
import InputForm from "./InputForm";

function AddInputForm(props) {
    const [inputs, setInputs] = useState([]);

    const pushInput = () => {
        setInputs([...inputs, <InputForm key={Number(Math.random() * 10)} />]);
    }
    useEffect(() => {
        pushInput();
        console.log("AddInput called");
    }, [props.operation])

    console.log([inputs]);
    return (
        <div className="flex">
            {inputs}
        </div>
    )
}
export default AddInputForm;