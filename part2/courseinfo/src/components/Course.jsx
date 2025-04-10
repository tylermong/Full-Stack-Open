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

const Part = ({ id, name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  )
}

const Course = ({ course }) => {
  return (
    <>
      <Header name={course.name} />
      <Content content={course.parts} />
    </>
  )
}

export default Course