function Display({
    result = 0,
    expression = ""
}){
    return(
        <div className="mt-2 p-2 w-auto h-auto border border-black px-[60px] rounded-md">
           <div>
            <h3>Eqn: {expression}</h3>
           </div>
           <div>
            <h3>Result = {result}</h3>
           </div>
        </div>
    )
}
export default Display;