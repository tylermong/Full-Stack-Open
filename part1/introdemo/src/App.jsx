import { useState } from 'react'
import Display from './Display.jsx'
import Button from './Button.jsx'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <>
        <Display counter={counter} />
        <Button
          onClick={increaseByOne}
          text='plus'
        />
        <Button
          onClick={setToZero}
          text='zero'
        />
        <Button
          onClick={decreaseByOne}
          text='minus'
        />
    </>
  )
}

export default App