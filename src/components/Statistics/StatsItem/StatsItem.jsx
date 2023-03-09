import PropTypes from 'prop-types';
import {StatsItemWrapper, Label, Percentage} from 'components/Statistics/StatsItem/StatsItem.styled';

export const StatsItem = ({ label, percentage, statsItemColor}) => {
  return (
    <StatsItemWrapper itemColor={statsItemColor}>
        <Label>{label}</Label>
        <Percentage>{percentage}%</Percentage>
    </StatsItemWrapper>
  )
}


StatsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  statsItemColor: PropTypes.string.isRequired,
};