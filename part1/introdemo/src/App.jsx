import { useState } from 'react'
import Display from './Display.jsx'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)

  return (
    <>
        <Display counter={counter} />
        <button onClick={increaseByOne}>
            plus
        </button>
        <button onClick={setToZero}>
            zero
        </button>
    </>
  )
}

export default App