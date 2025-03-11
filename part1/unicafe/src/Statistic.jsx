

const calculateAverage = (props) => {
    return (good + neutral + bad) / 3
}

const Statistics = ({ good, neutral, bad }) => {
    let total = good + neutral + bad
    let average = (good - bad) / total
    let positive = (good / total) * 100

    return ( 
        <div>
            <h1>statistics</h1>
            <div>good {good}</div>
            <div>neutral {neutral}</div>
            <div>bad {bad}</div>
            <div>all {total}</div>
            <div>average {average}</div>
            <div>positive {positive} %</div>
        </div>
    )
}

export default Statistics