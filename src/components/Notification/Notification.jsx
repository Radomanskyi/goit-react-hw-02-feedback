import feedbackCss from '../Feedback/feedback.module.css'
import PropTypes from "prop-types";

const Notification = ({message}) => (
<div className={feedbackCss.text}>
<>{message}</>
</div>
);

Notification.propTypes={
    message: PropTypes.string,
};

export default Notification;