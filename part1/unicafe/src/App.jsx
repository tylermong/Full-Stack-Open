import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const addReview = (rating) => {
  if (rating === good) {
    setGood(good + 1)
  }

  if (rating == neutral) {
    setNeutral(neutral + 1)
  }

  if (rating == bad) {
    setBad(bad + 1)
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => addReview(good)} text="good" />
      <Button onClick={() => addReview(neutral)} text="neutral" />
      <Button onClick={() => addReview(bad)} text="bad" />
      
      <h1>statistics</h1>
      <div>good {good}</div>
      <div>netural {good}</div>
      <div>bad {good}</div>
    </div>
  )
}
export default App