function Button(props) {
    const handleClick = (e) => {
        let value = e.target.value;
        if (value !== "AC" && value !== "=") {
            if(value === "%"){
                props.setExpression((prev) => prev += "% of ");
            } else if(isOperator(value)) {
                let str = " " + value + " ";
                props.setExpression((prev) => prev += str);
            } else {
                props.setExpression((prev) => prev += value);
            }
            
        }
        if (!isOperator(value) && value !== "AC" && value !== "+/-") {
            props.setInput((prev) => prev += value);
        }
        if (isOperator(value)) {
            props.buildOps(value);
        }
        if (value === "=") {
            props.setCalc(true);
        }
        if (value === "AC") {
            props.setCalc(false);
            props.setSeqOps({});
            props.setExpression("");
        }
    }

    const isOperator = (value) => {
        if (value === "+" || value === "-" || value === "x"
            || value === "/" || value === "=" || value === "%") {
            return true;
        }
    }
    return (
        <button
            className="text-white w-full bg-gray-700 px-4 py-2 rounded-lg"
            onClick={handleClick}
            value={props.value}>
            {props.value}
        </button>
    )
}
export default Button;