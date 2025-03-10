import Part from './Part'

const Content = (props) => {
    return (
        <>
            <Part name={props.course.name} exercises={props.course.exercises} />
        </>
    )
}

export default Content