function Display(props){
    return(
        <div className="mt-2 p-2 w-[250px] h-[40px] border border-black px-[60px] rounded-md">
           {props.expression}
        </div>
    )
}
export default Display;