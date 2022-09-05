import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';

function FriendList({friends}) {
    return (
        <ul class="friend-list">
            {friends.map(friend => (
                <FriendListItem
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                    key={friend.id}
                />
            ))}
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.array,
};

export default FriendList;