import feedbackCss from '../Feedback/feedback.module.css'
import PropTypes from "prop-types";

const FeedbackOptions = ({onLeaveGoodFeedback, onLeaveNeutralFeedback,onLeaveBadFeedback }) => (
<div>
<button className={feedbackCss.button1} onClick={onLeaveGoodFeedback}>Good</button>
<button className={feedbackCss.button2} onClick={onLeaveNeutralFeedback}>Neutral</button>
<button className={feedbackCss.button3} onClick={onLeaveBadFeedback}>Bad</button>
</div>
);

FeedbackOptions.propTypes = {
    onLeaveGoodFeedback: PropTypes.any.isRequired,
    onLeaveNeutralFeedback: PropTypes.any.isRequired,
    onLeaveBadFeedback: PropTypes.any.isRequired
  };

export default FeedbackOptions;