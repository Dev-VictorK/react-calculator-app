import { useEffect, useState } from 'react';
import Display from './Display';
import './index.css';
import InputForm from './InputForm';
{/**Calculator

Basic arithmetic.

Use React state to update the display.
*/}
function App() {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState(0);

  const calcResult = () => {
    let values = /^(\d+) (\+|\-|\*|\/) (\d+)$/.exec(input);
    console.log(values);
    let ans = 0;
    if (values !== null && values.length >= 4) {
      if (values[2] === "+") ans = Number(values[1]) + Number(values[3]);
      if (values[2] === "-") ans = Number(values[1]) - Number(values[3]);
      if (values[2] === "*") ans = Number(values[1]) * Number(values[3]);
      if (values[2] === "/") ans = Number(values[1]) / Number(values[3]);
      setResult(ans);
    }
  }

  useEffect(() => {
    calcResult();
  }, [input])

  return (
    <div className="flex flex-col justify-center items-center border p-2 rounded-md border-gray-800 m-4">
      <h1 className="text-2xl text-bold">Calculator App</h1>
      <Display result={result} />
      <InputForm input={input} setInput={setInput} />
    </div>
  );
}

export default App;
