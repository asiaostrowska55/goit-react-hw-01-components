import user from './database/user.json';
import data from './database/data.json';
import friends from './database/friends.json';
import transactions from './database/transactions.json';

import Profile from 'components/Profile';
import Statistics from 'components/Statistics';
import FriendList from 'components/FriendList';
import TransactionHistory from 'components/TransactionHistory';

function App() {
  return (
    <div>
      <h2>1-Profil w sieci społecznościowej</h2>
      <Profile {...user} />
      <h2>2- Sekcja "statystyki"</h2>
      <Statistics title="Upload stats" stats={data} />
      <h2>3 - Lista znajomych</h2>
      <FriendList friends={friends} />
      <h2>4 - Historia transakcji</h2>
      <TransactionHistory items={transactions} />;
    </div>
  );
}

export default App;
