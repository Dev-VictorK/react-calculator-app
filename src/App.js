import { useEffect, useState } from 'react';
import Arithmetics from './Arithmetics';
import Display from './Display';
import './index.css';
import InputForm from './InputForm';
import AddInputForm from './AddInputForm';
{/**Calculator

Basic arithmetic.

Use React state to update the display.

*****************************************
user enters input which updates state in App
display reads the value entered and shows result

**********************
App
  State: input, operation
    InputForm
      setInput
    Display
        calcResult
        displayCalculation
    Arithmetics
      setOperation
*/}
function App() {
  const [operation, setOperation] = useState(null);
  const [result, setResult] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center border p-2 rounded-md border-gray-800 m-4">
      <h1 className="text-2xl text-bold">Calculator App</h1>
      <Display result={result}/>
      <AddInputForm operation={operation}/>
      <Arithmetics setOperation={setOperation} />
    </div>
  );
}

export default App;
