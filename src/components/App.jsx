import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './SectionTitle/Section';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (state, setState) => {
    setState(state + 1);
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const positiveFeedback = (100 / countTotalFeedback()) * good;
    return Number.parseInt(positiveFeedback);
  };

  const total = countTotalFeedback();

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          onGood={() => onLeaveFeedback(good, setGood)}
          onNeutral={() => onLeaveFeedback(neutral, setNeutral)}
          onBad={() => onLeaveFeedback(bad, setBad)}
        />
      </Section>

      {total > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Section>
          <Notification text="There is no feedback" />
        </Section>
      )}
    </div>
  );
};
