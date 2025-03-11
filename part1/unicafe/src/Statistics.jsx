import StatisticsLine from "./StatisticsLine"

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
        <>
            <StatisticsLine text="good" value={good}/>
            <StatisticsLine text="neutral" value={neutral}/>
            <StatisticsLine text="bad" value={bad}/>
            <StatisticsLine text="all" value={total}/>
            <StatisticsLine text="average" value={average}/>
            <StatisticsLine text="positive" value={positive + " %"}/>
        </>
    )
}

export default Statistics