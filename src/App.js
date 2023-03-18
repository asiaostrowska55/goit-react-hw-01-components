import user from './user.json';
import Profile from 'components/Profile';

console.log(user);

function App() {
  return (
    <div>
      <h2>1-Profil w sieci społecznościowej</h2>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <h2>2- Sekcja "statystyki"</h2>
      <h2>3 - Lista znajomych</h2>
      <h2>4 - Historia transakcji</h2>
    </div>
  );
}

export default App;
