const Total = (props) => {
    return (
        <p>Number of exercises { props.course[0].exercises + props.course[1].exercises + props.course[2].exercises }</p>
    )
}

export default Total