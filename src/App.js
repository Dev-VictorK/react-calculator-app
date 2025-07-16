import Arithmetics from './Arithmetics';
import Display from './Display';
import './index.css';
import InputForm from './InputForm';
{/**Calculator

Basic arithmetic.

Use React state to update the display. */}
function App() {
  return (
    <div className="App">
      Calculator App
      <Display/>
      <InputForm/>
      <Arithmetics/>
    </div>
  );
}

export default App;
