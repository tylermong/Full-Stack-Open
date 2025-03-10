import Header from './Header'
import Content from './Content'
import Total from './Total'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamental of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header courseTitle={course} />
      <Content course={part1} />
      <Content course={part2} />
      <Content course={part3} />
      <Total course={[part1, part2, part3]} />
    </div>
  )
}

export default App