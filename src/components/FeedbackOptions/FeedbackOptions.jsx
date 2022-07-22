import PropTypes from 'prop-types';
import { Box } from 'components/Box/Box';
import { Button } from 'components/Button/Button';

export const FeedbackOptions = ({ onGood, onNeutral, onBad }) => {
  return (
    <Box display="flex" mt="4" as="ul">
      <Button type="button" onClick={onGood}>
        good
      </Button>
      <Button type="button" onClick={onNeutral}>
        neutral
      </Button>
      <Button type="button" onClick={onBad}>
        bad
      </Button>
    </Box>
  );
};

FeedbackOptions.propTypes = {
  onGood: PropTypes.func.isRequired,
  onNeutral: PropTypes.func.isRequired,
  onBad: PropTypes.func.isRequired,
};
