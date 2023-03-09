import PropTypes from 'prop-types';
import {FriendsListItemWrapper, Avatar, Name, Status} from 'components/FriendsList/FriendsListItem/FriendsListItem.styled';

export const FriendsListItem = ({avatar, name, isOnline}) => {
  return (
    <FriendsListItemWrapper>
      <Status isOnline={isOnline}/>
      <Avatar src={avatar} alt='User avatar' />
      <Name>{name}</Name>
    </FriendsListItemWrapper>
  )
}

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};