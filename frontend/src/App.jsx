import NumberPresenter from "./components/NumberPresenter";
import NumberModifier from "./components/NumberModifier";
import { useCounter } from "./components/CounterProvider";
import "./App.css";

function App() {
  const { value, plus, minus } = useCounter();

  return (
    <>
      <div className="App">
        <p>Change the value</p>
        <p>Value: {value}</p>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
      </div>
      <NumberPresenter />
      <NumberModifier />
    </>
  );
}

export default App;
