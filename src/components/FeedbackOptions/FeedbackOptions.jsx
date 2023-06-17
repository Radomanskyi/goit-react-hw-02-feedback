import feedbackCss from '../Feedback/feedback.module.css'

const FeedbackOptions = ({onLeaveGoodFeedback, onLeaveNeutralFeedback,onLeaveBadFeedback }) => (
<div>
<button className={feedbackCss.button1} onClick={onLeaveGoodFeedback}>Good</button>
<button className={feedbackCss.button2} onClick={onLeaveNeutralFeedback}>Neutral</button>
<button className={feedbackCss.button3} onClick={onLeaveBadFeedback}>Bad</button>
</div>
);

export default FeedbackOptions;