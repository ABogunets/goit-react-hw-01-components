import PropTypes from 'prop-types';
import {Title} from 'components/Statistics/StatsTitle/StatsTitle.styled';

export const StatsTitle = ({ title }) => {
  return (
    title && (<Title>{title}</Title >)
  )
}

StatsTitle.propTypes = {
  title: PropTypes.string,
}