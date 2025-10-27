import { useCounterStore } from "./store/useCounterStore";

function App(){
  const { count, increment, decrement} = useCounterStore();

  return (
    <div className="2rem sans-serif">
      <h1>Counter: {count}</h1>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  );
}

export default App;