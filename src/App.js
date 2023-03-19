import user from './database/user.json';
import data from './database/data.json';
// import friends from './database/friends.json';
// import transations from './database/transations.json';

import Profile from 'components/Profile';
import Statistics from 'components/Statistics';

console.log(user);

function App() {
  return (
    <div>
      <h2>1-Profil w sieci społecznościowej</h2>
      <Profile
        {...user}
        // username={user.username}
        // tag={user.tag}
        // location={user.location}
        // avatar={user.avatar}
        // followers={user.stats.followers}
        // views={user.stats.views}
        // likes={user.stats.likes}
      />
      <h2>2- Sekcja "statystyki"</h2>
      <Statistics title="Upload stats" stats={data} />
      <h2>3 - Lista znajomych</h2>
      <h2>4 - Historia transakcji</h2>
    </div>
  );
}

export default App;
