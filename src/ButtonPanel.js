import Button from "./Button";

function ButtonPanel(props) {
    return (
        <div className="grid grid-cols-4 gap-2 mt-2">
            <Button value="AC" setExpression={props.setExpression} />
            <Button value="+/-" setExpression={props.setExpression} />
            <Button value="%" setExpression={props.setExpression} />
            <Button value="/" setExpression={props.setExpression} />

            <Button value="7" setExpression={props.setExpression} />
            <Button value="8" setExpression={props.setExpression} />
            <Button value="9" setExpression={props.setExpression} />
            <Button value="x" setExpression={props.setExpression} />

            <Button value="4" setExpression={props.setExpression} />
            <Button value="5" setExpression={props.setExpression} />
            <Button value="6" setExpression={props.setExpression} />
            <Button value="-" setExpression={props.setExpression} />

            <Button value="1" setExpression={props.setExpression} />
            <Button value="2" setExpression={props.setExpression} />
            <Button value="3" setExpression={props.setExpression} />
            <Button value="+" setExpression={props.setExpression} />

            <Button value="0" setExpression={props.setExpression} />
            <div className="col-span-2">
                <Button value="." setExpression={props.setExpression} />
            </div>
            <Button value="=" setExpression={props.setExpression} />
        </div>
    )
}

export default ButtonPanel;