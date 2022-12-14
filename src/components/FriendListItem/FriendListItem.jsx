import PropTypes from 'prop-types';


export const FriendListItem = ({ friends: {avatar, name, isOnline} }) => {
  return <>
  <span className="status">{isOnline}</span>
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <p className="name">{name}</p>
    </>
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

