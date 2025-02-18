import Header from './Header'
import Content from './Content'
import Total from './Total'

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      part: 'Fundamentals of React',
      exercises: 10
    },
    {
      part: 'Using props to pass data',
      exercises: 7
    },
    {
      part: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total value1={parts[0].exercises} value2={parts[1].exercises} value3={parts[2].exercises} />
    </div>
  )
}

export default App