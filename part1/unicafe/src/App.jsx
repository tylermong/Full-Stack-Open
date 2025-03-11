import { useState } from 'react'
import Button from './Button.jsx'
import Statistics from './Statistics.jsx'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addReview = (rating) => {
    if (rating === "good") {
      setGood(good + 1)
    }
  
    if (rating === "neutral") {
      setNeutral(neutral + 1)
    }
  
    if (rating === "bad") {
      setBad(bad + 1)
    }
  }

  return (
    <>
      <h1>give feedback</h1>
      <Button onClick={() => addReview("good")} text="good" />
      <Button onClick={() => addReview("neutral")} text="neutral" />
      <Button onClick={() => addReview("bad")} text="bad" />

      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  )
}
export default App