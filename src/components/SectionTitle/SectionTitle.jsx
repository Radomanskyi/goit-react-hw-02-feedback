import feedbackCss from '../Feedback/feedback.module.css'
import PropTypes from "prop-types";

const Section = ({title, children}) => (
<>
<h1 className={feedbackCss.title}>{title}</h1>
{children}
</>
);

Section.propTypes ={
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
};

export default Section;