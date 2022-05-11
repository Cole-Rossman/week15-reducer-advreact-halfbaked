import { useReducer } from 'react';

const pinkRGB = `rgb(236, 72, 153)`
const redRGB = `rgb(239, 68, 68)`
const greenRGB = `rgb(52, 211, 153)`
const initialCount = { count: 0, currentColor: pinkRGB }

function colorSet(count) {
  let color
  if (count === 0) {
    color = pinkRGB
  }

  if (count > 0) {
    color = greenRGB
  }

  if (count < 0) {
    color = redRGB
  }
  return color
}
function countReducer(counter, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: counter.count + 1, currentColor: colorSet(counter.count + 1) }
    case 'DECREMENT':
      return { count: counter.count - 1, currentColor: colorSet(counter.count - 1) }
    case 'RESET':
      return { count: 0, currentColor: colorSet(0) }
    default:
      return counter;
  }
};

export default function Counter() {
  const [state, dispatch] = useReducer(countReducer, initialCount);


  const increment = () => {
    dispatch({ type: 'INCREMENT' })
  }

  const decrement = () => {
    dispatch({ type: 'DECREMENT' })
  }

  const reset = () => {
    dispatch({ type: 'RESET' })
  }

  return (
    <main className="bg-black bg-opacity-90 min-h-screen flex flex-col items-center justify-center text-4xl text-pink-500">
      <h1 className="mb-5" style={{ color: state.currentColor }}>
        {state.count}
      </h1>
      <div className="flex w-1/2 justify-around">
        <button
          className="text-green-400 border-2 border-green-400 p-3"
          type="button"
          onClick={increment}
          aria-label="increment"
        >
          Increment
        </button>
        <button
          className="text-red-500 border-2 border-red-500 p-2"
          type="button"
          onClick={decrement}
          aria-label="decrement"
        >
          Decrement
        </button>
        <button
          className="text-pink-500 border-2 border-pink-500 p-2"
          type="button"
          aria-label="reset"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </main>
  )
}
