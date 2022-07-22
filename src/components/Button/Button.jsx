import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';

export const Button = ({ type = 'button', children, onClick }) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
};
