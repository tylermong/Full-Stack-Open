const Header = ({ name }) => {
  return (
    <h1>{name}</h1>
  )
}

const Content = ({ content }) => {
  return (
    <>
      {content.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
    </>
  )
}

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  )
}

const Total = ({ exercises }) => {
    const totalExercises = exercises.reduce((total, currentPart) => total + currentPart.exercises, 0)

    return (
        <p><strong>total of {totalExercises} exercises</strong></p>
    )
}

const Course = ({ course }) => {
  return (
    <>
      <Header name={course.name} />
      <Content content={course.parts} />
      <Total exercises={course.parts} />
    </>
  )
}

export default Course