import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import css from "./FriendList.module.css";

export const FriendList = ({friends}) => {
    return <ul className={css.friendList}>
   {friends.map(friend => (
    <li className={css.item} key={friend.id}>
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


  