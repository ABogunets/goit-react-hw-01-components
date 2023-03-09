import data from 'backendData/data.json';
import { Container} from 'components/Statistics/Statistics.styled';
import { StatsTitle } from 'components/Statistics/StatsTitle/StatsTitle'
import { StatsList } from 'components/Statistics/StatsList/StatsList'

export const Statistics = () => {
  return (
    <Container>
      <StatsTitle title='Upload stats' />
      <StatsList stats={data} />
    </Container>
  );
};