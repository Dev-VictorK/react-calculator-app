import Display from './Display';
import './index.css';
import ButtonPanel from './ButtonPanel';
import { useEffect, useState } from 'react';
{/**Calculator

Basic arithmetic.

Use React state to update the display.

{
  number: 0,
  op: +,
  next: { 
          number: 2
          op: null
          next: false
        }
}
*/}
function App() {
  const [input, setInput] = useState("");
  const [seqOps, setSeqOps] = useState({});
  const [result, setResult] = useState(0);

  const buildOps = (op) => {
    if (Object.keys(seqOps).length === 0) {
      let obj = { number: input, operation: op, next: null };
      setSeqOps(obj);
      setInput("");
    } else {
      setSeqOps(buildList(seqOps, op));
      setInput("");
    }
  }

  const buildList = (obj, op) => {
    let newObj = {
      ...obj,
      next: obj.next !== null
        ? buildList(obj.next, op)
        : { number: input, operation: op, next: null }
    };
    return newObj;
  }

  const calcResult = () => {
    if(Object.keys(seqOps).length > 0){
      //recursively pick number and check to see if next is !null
      if(seqOps.next === null) {
        setResult(Number(seqOps.number));
      }else{
        //recursively add
      }
    }
  }

  return (
    <div className="flex flex-col justify-center items-center border p-2 rounded-md border-gray-800 m-4">
      <h1 className="text-2xl text-bold">Calculator App</h1>
      <Display result={result}/>
      <ButtonPanel input={input} setInput={setInput}
        buildOps={buildOps} calcResult={calcResult} />
    </div>
  );
}

export default App;
