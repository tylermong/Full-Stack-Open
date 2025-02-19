import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const handleClick = () => {
    console.log('clicked')
  }

  console.log('rendering...', counter)

  return (
    <>
        <div>{counter}</div>
        {/* <button onClick={handleClick}>plus</button> */}
        <button onClick={() => setCounter(counter + 1)}>
            plus
        </button>
        <button onClick={() => setCounter(0)}>
            zero
        </button>
    </>
  )
}

export default App