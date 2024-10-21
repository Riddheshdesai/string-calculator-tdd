import { useState } from "react";
import { add } from "../utils/stringCalculator";

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    setError("");
    try {
      const output = add(input);
      setResult(output);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center mb-4">
          String Calculator
        </h1>
        <p className="text-gray-700 text-center mb-4">
          A simple calculator built using TDD principles.
        </p>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter numbers..."
        />
        <button
          onClick={handleCalculate}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Calculate
        </button>
        {error && <div className="mt-4 text-red-500 text-center">{error}</div>}
        {result !== null && (
          <div className="mt-4 text-green-500 text-center">
            Result: {result}
          </div>
        )}
      </div>
    </div>
  );
}

export default Calculator;
