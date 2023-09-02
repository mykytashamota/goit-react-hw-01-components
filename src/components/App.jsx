import user from 'path/to/user.json';
import ProfileUser from './profile/profile';

export const App = () => {
  return (
    <div>
      <ProfileUser
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
    </div>
  );
};
