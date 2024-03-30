
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';


function FriendListItem({avatar, name, isOnline}) {
    return (
  <li className={styles.item}>
  <span className={isOnline ? 'status online' : 'status offline'}></span>
  <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
  <p className={styles.name}>{name}</p>
</li>
    );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
};

function FriendList({friends}) {
    return (
     <ul class="friend-list">
            {friends.map(friend => (
                <FriendListItem
                    key={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                />
            ))}
</ul>
    );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
  })).isRequired
};



export default FriendList;