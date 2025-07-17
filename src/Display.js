function Display({
    result = "",
    expression =""
}){
    return(
        <div className="mt-2 p-2 w-auto h-auto border border-black px-[60px] rounded-md">
           Expression = {expression}
           <div>
            <h3>Result = {result}</h3>
           </div>
        </div>
    )
}
export default Display;