import React, { useState, useCallback } from "react";
import Child from "./Child";

const App = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  // Memoized function with useCallback
  const handleClick = useCallback(() => {
    console.log(`Count is ${count}`);
  }, [count]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">useCallback Practical Example</h1>
      <p className="mb-4">Count: {count}</p>
      <button
        className="mr-2 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setCount(count + 1)}
      >
        Increment Count
      </button>
      <button
        className="px-4 py-2 bg-gray-500 text-white rounded"
        onClick={() => setOtherState(!otherState)}
      >
        Toggle Other State
      </button>

      {/* Pass handleClick to Child */}
      <Child onClick={handleClick} />
    </div>
  );
};

export default App;
