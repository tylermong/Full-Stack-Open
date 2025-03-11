const Statistics = ({ good, neutral, bad }) => {
    let total = good + neutral + bad

    if (total === 0) {
        return (
            <div>No feedback given</div>
        )
    }
    
    let average = (good - bad) / total
    let positive = (good / total) * 100

    return ( 
        <div>
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