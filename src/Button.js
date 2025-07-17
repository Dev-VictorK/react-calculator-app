function Button(props) {
    const handleClick = (e) => {
        let value = e.target.value;
        if (value !== "+") {
            props.setInput((prev) => prev += value);
        }
        if(value === "+" || value === "-" || value === "*" || value === "*"){
            props.buildOps(value);
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