import Display from './Display';
import './index.css';
import ButtonPanel from './ButtonPanel';
import { useState } from 'react';
{/**Calculator

Basic arithmetic.

Use React state to update the display.
*/}
function App() {
  const [expression, setExpression] = useState("hgf");
  
  return (
    <div className="flex flex-col justify-center items-center border p-2 rounded-md border-gray-800 m-4">
      <h1 className="text-2xl text-bold">Calculator App</h1>
      <Display expression={expression} />
      <ButtonPanel setExpression={setExpression} />
    </div>
  );
}

export default App;
