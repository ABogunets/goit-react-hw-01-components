import { Description} from "components/Profile/Description/Description";
import { Stats } from "components/Profile/Stats/Stats";
import { Container} from 'components/Profile/Profile.styled';

export const Profile = ({ userData }) => {
  const { username, tag, location, avatar, stats } = userData;
  return (
    <Container>
      <Description
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <Stats stats={stats}/>
    </Container>

  );
};



