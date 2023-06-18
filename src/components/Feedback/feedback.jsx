import { Component } from 'react'
import feedbackCss from './feedback.module.css'
import Statistics from '../Statistics/Statistics'
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions'
import Section from 'components/SectionTitle/SectionTitle'
import Notification from '../Notification/Notification'
import StatisticsTitle from '../Statistics/StatisticsTitle'
import PropTypes from "prop-types";

class Feedback extends Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    handleClickGood = (e) => {
        this.setState((prevState) => ({good: prevState.good + 1}))}

    handleClickNeutral = (e) => {
        this.setState((prevState) => ({neutral: prevState.neutral + 1}))}

    handleClickBad = (e) => {
        this.setState((prevState) => ({bad: prevState.bad + 1}))}

    countTotalFeedback = () => { return this.state.good + this.state.neutral + this.state.bad }

    countPositiveFeedbackPercentage = () => {
        const result = this.state.good * 100 / this.countTotalFeedback()
        return result > 0 ? result : 0
    }
    render () {
        const {good, neutral, bad} = this.state
        return (
            <div>
                {this.countTotalFeedback() <= 0 ?
                (<Section className={feedbackCss.container}
                    title="Please leave feedback"
                    children={<><FeedbackOptions onLeaveNeutralFeedback={this.handleClickNeutral} onLeaveGoodFeedback={this.handleClickGood} onLeaveBadFeedback={this.handleClickBad}></FeedbackOptions>
                    <StatisticsTitle/>
                    <Notification message="There is no feedback"></Notification></>}>
             </Section>): (<Section className={feedbackCss.container}
                title="Please leave feedback"
                children={<><FeedbackOptions onLeaveNeutralFeedback={this.handleClickNeutral} onLeaveGoodFeedback={this.handleClickGood} onLeaveBadFeedback={this.handleClickBad}></FeedbackOptions><Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} /></>}>
        </Section>)}
        </div>
        )
    }
}

Feedback.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad:PropTypes.number
  };

export default Feedback