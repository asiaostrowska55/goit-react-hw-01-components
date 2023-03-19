import css from '../components/Profile/Profile.module.css';
import PropTypes from 'prop-types';

const Profile = props => {
  const {
    username,
    tag,
    location,
    avatar,
    stats = { followers: 0, views: 0, likes: 0 },
  } = props;
  return (
    <div className={css.profile}>
      <div className={css.user}>
        <img className={css.avatar} src={avatar} alt={avatar} width="120" />
        <p className={css.name}>{username}</p>
        <p className={css.descr}>@{tag}</p>
        <p className={css.descr}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.item}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{stats.followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{stats.views}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};
export default Profile;
