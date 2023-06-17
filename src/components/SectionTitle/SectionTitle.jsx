import feedbackCss from '../Feedback/feedback.module.css'

const Section = ({title, children}) => (
<div>
<h1 className={feedbackCss.title}>{title}</h1>
{children}
</div>
);

export default Section;