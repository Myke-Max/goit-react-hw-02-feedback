import { Component } from 'react';
import FeedbackMarkup from '../feedbackMarkup';
import StatisticsMarkup from '../statisticMarkup';
import Notification from '../notification';
// import PropTypes from 'prop-types';

class Feedback extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static propTypes = {};

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  onPositiveFeedbackClick = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  onNeutralFeedbackClick = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  onNegativeFeedbackClick = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return (this.state.good / (this.state.good + this.state.bad)) * 100;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className="App">
        <section className="App-section">
          <FeedbackMarkup
            onPositiveFeedbackClick={this.onPositiveFeedbackClick}
            onNeutralFeedbackClick={this.onNeutralFeedbackClick}
            onNegativeFeedbackClick={this.onNegativeFeedbackClick}
          />
          {this.countTotalFeedback() > 0 ? (
            <StatisticsMarkup
              positiveFeedbackValue={good}
              neutralFeedbackValue={neutral}
              badFeedbackValue={bad}
              totalFeedback={this.countTotalFeedback()}
              positiveFeedbackPercentage={this.countPositiveFeedbackPercentage().toFixed(2)}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </section>
      </div>
    );
  }
}

export default Feedback;
