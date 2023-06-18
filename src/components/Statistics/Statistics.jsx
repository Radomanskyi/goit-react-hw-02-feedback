import feedbackCss from '../Feedback/feedback.module.css'
import StatisticsTitle from './StatisticsTitle'
import PropTypes from "prop-types";

const Statistics = ({good, neutral, bad, total, positivePercentage}) => (
<>
    <StatisticsTitle/>
    <p className={feedbackCss.text}>Good: {good}</p>
    <p className={feedbackCss.text}>Neutral: {neutral}</p>
    <p className={feedbackCss.text}>Bad: {bad}</p>
    <p className={feedbackCss.text}>{`Total: ${total}`}</p>
    <p className={feedbackCss.text}>{`Positive feedback: ${positivePercentage.toFixed()} %`}</p>
</>
);

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.any.isRequired,
    positivePercentage: PropTypes.any.isRequired
}

export default Statistics;