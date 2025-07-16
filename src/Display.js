function Display(props){
    return(
        <div className="mt-2 p-2 border border-black px-[60px] rounded-md">
            <div>
                Result = {Number(props.result)}
            </div>
        </div>
    )
}
export default Display;