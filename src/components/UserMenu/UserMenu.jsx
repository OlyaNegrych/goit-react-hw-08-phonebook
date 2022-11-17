// import { useDispatch } from 'react-redux';
// import { logOut } from 'redux/auth/operations';
// import { useAuth } from 'hooks';

export const UserMenu = () => {
  // const dispatch = useDispatch();
  // const { user } = useAuth();

  return (
    <div style={{display: 'flex'}}>
      <p>Welcome</p>
      <button type="button">
        Logout
      </button>
    </div>
  );
};

