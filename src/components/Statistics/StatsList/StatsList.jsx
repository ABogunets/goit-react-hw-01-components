import PropTypes from 'prop-types';
import {StatsListWrapper} from 'components/Statistics/StatsList/StatsList.styled';
import { StatsItem } from 'components/Statistics/StatsItem/StatsItem'

import { getRandomHexColor } from 'utils/getColor';

export const StatsList = ({ stats }) => {
  return (
    <StatsListWrapper>
      {stats.map(({ id, label, percentage }) => (
        <StatsItem
          key={id}
          label={label}
          percentage={percentage}
          statsItemColor={getRandomHexColor()}
          />
      ))}
    </StatsListWrapper>
  )
}

StatsList.propTypes = {
  statsData: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      }),
    ),
};
