import React from 'react'
import useCounter from '../hooks/useCounter';


const CounterApp = () => {

  const [counter, increment, reset] = useCounter();

  return (
    <>
      <div>
        <h1 className="text-center mt-20">REACT COUNTER</h1>

        <div className="flex flex-col items-center mt-20 gap-4">
          <div className="flex gap-2 items-center">
            <p>
              CLICKS: {counter}
            </p>
            <button
              className="bg-blue-800 rounded text-white py-1 px-2"
              onClick={increment}
            >
              +
            </button>
          </div>
          <button onClick={reset} className="rounded border-2 py-1 px-2 hover:bg-slate-400">
            Reset
          </button>
        </div>
      </div>
    </>
  )
}

export default CounterApp