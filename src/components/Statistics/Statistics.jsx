import feedbackCss from '../Feedback/feedback.module.css'
import StatisticsTitle from './StatisticsTitle'

const Statistics = ({good, neutral, bad, total, positivePercentage}) => (
<div>
    <StatisticsTitle/>
    <p className={feedbackCss.text}>Good: {good}</p>
    <p className={feedbackCss.text}>Neutral: {neutral}</p>
    <p className={feedbackCss.text}>Bad: {bad}</p>
    <p className={feedbackCss.text}>{`Total: ${total}`}</p>
    <p className={feedbackCss.text}>{`Positive feedback: ${positivePercentage.toFixed()} %`}</p>
</div>
);

export default Statistics;