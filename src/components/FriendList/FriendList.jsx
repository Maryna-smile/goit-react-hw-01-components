import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({friends}) => {
    return <ul class="friend-list">
   {friends.map(friend => (
    <li class="item" key={friend.id}>
           <FriendListItem friends={ friend}/>
    </li>
   ))}
  </ul>
}

FriendList.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  };
