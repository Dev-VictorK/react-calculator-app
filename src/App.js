import Display from './Display';
import './index.css';
import ButtonPanel from './ButtonPanel';
import { useEffect, useState, useCallback } from 'react';

function App() {
  const [input, setInput] = useState("");
  const [seqOps, setSeqOps] = useState({});
  const [result, setResult] = useState(0);
  const [calc, setCalc] = useState(false);
  const [expression, setExpression] = useState("");

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

  const calcRecursively = useCallback((obj, sValue) => {
    let cNum = Number(sValue);
    if (obj.next !== null) {
      let op = obj.operation;
      let nNum = Number(obj.next.number);
      if (op === "+") cNum = cNum + nNum;
      if (op === "-") cNum = cNum - nNum;
      if (op === "x") cNum = cNum * nNum;
      if (op === "/") cNum = cNum / nNum;
      if (op === "%") cNum = (cNum * nNum) / 100;
      calcRecursively(obj.next, cNum); // safe since it's the same memoized version
    } else {
      setResult(cNum);
    }
  }, []);


  const calcResult = useCallback(() => {
    if (Object.keys(seqOps).length > 0) {
      calcRecursively(seqOps, seqOps.number);
    }
  }, [seqOps, calcRecursively]);

  useEffect(() => {
    setResult(0);
    if (calc) calcResult();
  }, [seqOps, calc, calcResult]);

  return (
    <div className="flex flex-col justify-center items-center border p-2 rounded-md border-gray-800 m-4">
      <h1 className="text-2xl text-bold">Calculator App</h1>
      <Display result={result} expression={expression} />
      <ButtonPanel input={input} setInput={setInput}
        buildOps={buildOps} setExpression={setExpression}
        calcResult={calcResult} setCalc={setCalc}
        setResult={setResult} setSeqOps={setSeqOps} />
    </div>
  );
}

export default App;
