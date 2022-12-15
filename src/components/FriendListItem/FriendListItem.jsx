import PropTypes from 'prop-types';
import css from './FriendListItem.module.css'


export const FriendListItem = ({ friends: {avatar, name, isOnline} }) => {
  return <>
  <span className={isOnline ? css.status : css.offLineStatus}></span>
    <img className={css.avatar}src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
    </>
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

