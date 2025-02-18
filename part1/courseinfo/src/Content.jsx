import Part from './Part'

const Content = (props) => {
    return (
        <>
            <Part part={props.part.name} exercise={props.part.exercises} />
        </>
    )
}

export default Content