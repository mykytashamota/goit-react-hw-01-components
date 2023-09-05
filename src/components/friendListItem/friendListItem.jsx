import PropTypes from 'prop-types';
import css from 'components/friendListItem/friendListItem.module.css';

const FriendListItem = ({ isOnline, avatar, name }) => {
  const className = [css.status, isOnline ? css.green : css.red];
  return (
    <>
      {' '}
      <li className={css.item}>
        <span className={className.join(' ')}></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
      </li>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
