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
  onLeaveFeedback = value => {
    this.setState(prevState => ({
      [value]: prevState[value] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, bad } = this.state;
    return (good / (good + bad)) * 100;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className="App">
        <section className="App-section">
          <FeedbackMarkup
            options={['good', 'neutral', 'bad']}
            leaveFeedback={this.onLeaveFeedback}
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
