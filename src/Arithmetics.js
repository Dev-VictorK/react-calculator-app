function Arithmetics(props){
    const handleClick = (e) => {
        props.setOperation(e.target.value);
    }
    return(
        <div className="flex gap-2">
            <button className="border border-blue-500 text-white text-md bg-gray-700 p-2 px-8 items-center rounded-lg"
            value="+"
            onClick={handleClick}>+</button>
            <button 
            value="-"
            onClick={handleClick}
            className="border border-blue-500 text-white text-md bg-gray-700 p-2 px-8 items-center rounded-lg">-</button>
            <button 
            value="/"
            onClick={handleClick}
            className="border border-blue-500 text-white text-md bg-gray-700 p-2 px-8 items-center rounded-lg">/</button>
            <button 
            value="*"
            onClick={handleClick}
            className="border border-blue-500 text-white text-md bg-gray-700 p-2 px-8 items-center rounded-lg">*</button>
        </div>
    )
}
export default Arithmetics;