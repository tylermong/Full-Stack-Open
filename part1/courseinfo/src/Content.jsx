import Part from './Part'

const Content = (props) => {
    return (
        <>
            <Part part={props.parts[0].part} exercise={props.parts[0].exercises} />
            <Part part={props.parts[1].part} exercise={props.parts[1].exercises} />
            <Part part={props.parts[2].part} exercise={props.parts[2].exercises} />
        </>
    )
}

export default Content