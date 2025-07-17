import { useEffect, useState } from 'react';
import Display from './Display';
import './index.css';
import InputForm from './InputForm';
import Operations from './Operations';
{/**Calculator

Basic arithmetic.

Use React state to update the display.
*/}
function App() {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState("");
  const [operation, setOperation] = useState(null);

  const calcResult = () => {
    if (input !== "" && input.includes("+")) {
      let opIndex = input.indexOf("+");
      let firstNum = Number(input.slice(0, opIndex));
      if (input.length > opIndex) {
        let secondNum = Number(input.slice(opIndex + 1));
        if (!Number.isNaN(firstNum) && !Number.isNaN(secondNum)) {
          let ans = firstNum + secondNum;
          setResult(ans);
        }
      }
    }
  }

  useEffect(() => {
    calcResult();
  }, [input])

  return (
    <div className="flex flex-col justify-center items-center border p-2 rounded-md border-gray-800 m-4">
      <h1 className="text-2xl text-bold">Calculator App</h1>
      <p>Works on two numbers</p>
      <InputForm input={input} setInput={setInput} />
      <Operations setOperation={setOperation} />
      <Display result={result} />
    </div>
  );
}

export default App;
