import feedbackCss from '../Feedback/feedback.module.css'

const Notification = ({message}) => (
<div className={feedbackCss.text}>
<>{message}</>
</div>
);

export default Notification;