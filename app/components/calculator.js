"use client"
import React, { useState } from 'react';
import { FaDeleteLeft, FaTrashCan } from "react-icons/fa6";
const Calculator = () => {
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(result).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setResult('');
    } else {
      setResult(result + value);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900 text-white">
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold mb-4">Calculator</h1>
      <div className="mb-4">
        <input
          type="text"
          className="w-full p-2 border-gray-600 border-2 rounded-md text-gray-800 bg-gray-300"
          value={result}
          readOnly
        />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {['7', '8', '9'].map((item) => (
          <button
            key={item}
            className="bg-blue-500 text-white p-2 rounded-md"
            onClick={() => handleClick(item)}
          >
            {item}
          </button>
        ))}
        {['4', '5', '6'].map((item) => (
          <button
            key={item}
            className="bg-blue-500 text-white p-2 rounded-md"
            onClick={() => handleClick(item)}
          >
            {item}
          </button>
        ))}
        {['1', '2', '3'].map((item) => (
          <button
            key={item}
            className="bg-blue-500 text-white p-2 rounded-md"
            onClick={() => handleClick(item)}
          >
            {item}
          </button>
        ))}
        {['0'].map((item) => (
          <button
            key={item}
            className="bg-blue-500 text-white p-2 rounded-md"
            onClick={() => handleClick(item)}
          >
            {item}
          </button>
        ))}
                        <button
          className="bg-blue-500 text-white p-2 rounded-md"
          onClick={() => handleClick('/')}
        >
          /
        </button>
                <button
          className="bg-blue-500 text-white p-2 rounded-md"
          onClick={() => handleClick('*')}
        >
          *
        </button>
                <button
          className="bg-blue-500 text-white p-2 rounded-md"
          onClick={() => handleClick('-')}
        >
          -
        </button>
        <button
          className="bg-blue-500 text-white p-2 rounded-md"
          onClick={() => handleClick('.')}
        >
          .
        </button>
        <button
          className="bg-blue-500 text-white p-2 rounded-md"
          onClick={() => handleClick('+')}
        >
          +
        </button>
        <button
          className="bg-gray-600 text-white p-2 rounded-md flex justify-center items-center"
          onClick={() => setResult(result.slice(0, -1))}
        >
          <FaDeleteLeft />
        </button>
        <button
          className="col-span-2 bg-red-500 text-white p-2 rounded-md flex justify-center items-center"
          onClick={() => handleClick('C')}
        >
          <FaTrashCan />
        </button>
        <button
          className="col-span-2 bg-yellow-500 text-white p-2 rounded-md"
          onClick={() => handleClick('=')}
        >
          =
        </button>
      </div>
      <p className='p-2 flex justify-center items-center text-gray-600'>developed by thrasher</p>
    </div>
  </div>
  
  );
};

export default Calculator;
