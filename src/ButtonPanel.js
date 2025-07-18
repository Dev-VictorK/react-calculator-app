import Button from "./Button";

function ButtonPanel(props) {
    return (
        <div className="grid grid-cols-4 gap-2 mt-2">
            <Button value="AC" input={props.input} buildOps={props.buildOps} calcResult={props.calcResult} setCalc={props.setCalc} setExpression={props.setExpression} setResult={props.setResult} setSeqOps={props.setSeqOps} setInput={props.setInput} />
            <Button value="+/-" input={props.input} buildOps={props.buildOps} calcResult={props.calcResult} setCalc={props.setCalc} setExpression={props.setExpression} setResult={props.setResult} setSeqOps={props.setSeqOps} setInput={props.setInput} />
            <Button value="%" input={props.input} buildOps={props.buildOps} calcResult={props.calcResult} setCalc={props.setCalc} setExpression={props.setExpression} setResult={props.setResult} setSeqOps={props.setSeqOps} setInput={props.setInput}/>
            <Button value="/" input={props.input} buildOps={props.buildOps} calcResult={props.calcResult} setCalc={props.setCalc} setExpression={props.setExpression} setResult={props.setResult} setSeqOps={props.setSeqOps} setInput={props.setInput}/>

            <Button value="7" input={props.input} buildOps={props.buildOps} calcResult={props.calcResult} setCalc={props.setCalc} setExpression={props.setExpression} setResult={props.setResult} setSeqOps={props.setSeqOps} setInput={props.setInput}/>
            <Button value="8" input={props.input} buildOps={props.buildOps} calcResult={props.calcResult} setCalc={props.setCalc} setExpression={props.setExpression} setResult={props.setResult} setSeqOps={props.setSeqOps} setInput={props.setInput}/>
            <Button value="9" input={props.input} buildOps={props.buildOps} calcResult={props.calcResult} setCalc={props.setCalc} setExpression={props.setExpression} setResult={props.setResult} setSeqOps={props.setSeqOps} setInput={props.setInput}/>
            <Button value="x" input={props.input} buildOps={props.buildOps} calcResult={props.calcResult} setCalc={props.setCalc} setExpression={props.setExpression} setResult={props.setResult} setSeqOps={props.setSeqOps} setInput={props.setInput}/>

            <Button value="4" input={props.input} buildOps={props.buildOps} calcResult={props.calcResult} setCalc={props.setCalc} setExpression={props.setExpression} setResult={props.setResult} setSeqOps={props.setSeqOps} setInput={props.setInput}/>
            <Button value="5" input={props.input} buildOps={props.buildOps} calcResult={props.calcResult} setCalc={props.setCalc} setExpression={props.setExpression} setResult={props.setResult} setSeqOps={props.setSeqOps} setInput={props.setInput}/>
            <Button value="6" input={props.input} buildOps={props.buildOps} calcResult={props.calcResult} setCalc={props.setCalc} setExpression={props.setExpression} setResult={props.setResult} setSeqOps={props.setSeqOps} setInput={props.setInput}/>
            <Button value="-" input={props.input} buildOps={props.buildOps} calcResult={props.calcResult} setCalc={props.setCalc} setExpression={props.setExpression} setResult={props.setResult} setSeqOps={props.setSeqOps} setInput={props.setInput}/>

            <Button value="1" input={props.input} buildOps={props.buildOps} calcResult={props.calcResult} setCalc={props.setCalc} setExpression={props.setExpression} setResult={props.setResult} setSeqOps={props.setSeqOps} setInput={props.setInput}/>
            <Button value="2" input={props.input} buildOps={props.buildOps} calcResult={props.calcResult} setCalc={props.setCalc} setExpression={props.setExpression} setResult={props.setResult} setSeqOps={props.setSeqOps} setInput={props.setInput}/>
            <Button value="3" input={props.input} buildOps={props.buildOps} calcResult={props.calcResult} setCalc={props.setCalc} setExpression={props.setExpression} setResult={props.setResult} setSeqOps={props.setSeqOps} setInput={props.setInput}/>
            <Button value="+" input={props.input} buildOps={props.buildOps} calcResult={props.calcResult} setCalc={props.setCalc} setExpression={props.setExpression} setResult={props.setResult} setSeqOps={props.setSeqOps} setInput={props.setInput}/>

            <Button value="0" input={props.input} buildOps={props.buildOps} calcResult={props.calcResult} setCalc={props.setCalc} setExpression={props.setExpression} setResult={props.setResult} setSeqOps={props.setSeqOps} setInput={props.setInput}/>
            <div className="col-span-2">
                <Button value="." input={props.input} buildOps={props.buildOps} calcResult={props.calcResult} setCalc={props.setCalc} setExpression={props.setExpression} setResult={props.setResult} setSeqOps={props.setSeqOps} setInput={props.setInput}/>
            </div>
            <Button value="=" input={props.input} buildOps={props.buildOps} calcResult={props.calcResult} setCalc={props.setCalc} setExpression={props.setExpression} setResult={props.setResult} setSeqOps={props.setSeqOps} setInput={props.setInput}/>
        </div>
    )
}

export default ButtonPanel;