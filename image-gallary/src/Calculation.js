import { useState, useMemo } from "react";

function App() {
  const [numbers, setNumbers] = useState([10, 20, 30, 40]);
  const [count, setCount] = useState(0);

  // useMemo implementation
  const total = useMemo(() => {
    console.log("Calculating sum...");

    return numbers.reduce((acc, num) => {
      return acc + num;
    }, 0);

  }, [numbers]);

  return (
    <div>
      <h2>Sum: {total}</h2>

      <button
        onClick={() =>
          setNumbers([...numbers, Math.floor(Math.random() * 100)])
        }
      >
        Add Number
      </button>

      <br /><br />

      <button onClick={() => setCount(count + 1)}>
        Re-render Count: {count}
      </button>
    </div>
  );
}

export default App;