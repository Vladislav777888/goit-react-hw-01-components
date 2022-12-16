import { Profile } from 'components/Profile/Profile';

import user from '../user.json';

export const App = () => {
  const { username, tag, location, stats, avatar } = user;

  return (
    <>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
    </>
  );
};
