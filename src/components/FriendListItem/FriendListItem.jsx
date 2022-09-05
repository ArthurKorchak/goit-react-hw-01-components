import PropTypes from 'prop-types';

function FriendListItem({ avatar, name, isOnline}) {
    return (
        <li class="item">
            <span class={isOnline ? 'status-online': 'status-offline'}></span>
            <img class="avatar" src={avatar} alt="User avatar" width="48" />
            <p class="name">{name}</p>
        </li>
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
};

export default FriendListItem;