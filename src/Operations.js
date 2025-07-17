function Operations(props) {

    const handleClick = (e) => {
        props.setOperation(e.target.value);
    }

    return (
        <div className="flex gap-2">
            <button
            onClick={handleClick} 
            className="text-white bg-gray-800 px-5 py-2 rounded-lg">
                +
            </button>
        </div>
    )
}

export default Operations;