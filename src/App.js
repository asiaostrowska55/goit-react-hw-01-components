import Profile from './components/Profile';
import { Style } from './components/Style';
import user from '../user.json';

function Welcome(user) {
  return (
    <div>
      <h1>Hello, {user.name}. This is a test! </h1>
      <p> Your age is {user.age}</p>
      <p> Your favourite color is {user.color}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Welcome name="Marcin" age="150" color="black" />
      {/* <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        /> */}
    </div>
  );
}

export default App;
