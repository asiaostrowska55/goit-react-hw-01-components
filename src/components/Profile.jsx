import css from '../components/styles/Profile.module.css';

const Profile = props => {
  const { username, tag, location, avatar, followers, views, likes } = props;
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
          <span className={css.quantity}>{followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{views}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
