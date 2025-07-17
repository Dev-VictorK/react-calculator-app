function Button(props) {
    return (
        <button
            className="text-white w-full bg-gray-700 px-4 py-2 rounded-lg"
            onClick={(e) => props.setExpression(e.target.value)}
            value={props.value}>
            {props.value}
        </button>
    )
}
export default Button;