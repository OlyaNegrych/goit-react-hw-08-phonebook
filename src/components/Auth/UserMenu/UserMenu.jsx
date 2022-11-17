// import { useDispatch } from 'react-redux';
// import { logOut } from '../../../redux/auth/operations';
// import { useAuth } from '../../../hooks/useAuth';
// import { useSelector } from 'react-redux';
// import { selectUser } from '../../../redux/auth/selectors';


export const UserMenu = () => {
  // const dispatch = useDispatch();
  // const { user } = useAuth();
  //  const user = useSelector(selectUser);

  return (
    <div style={{ display: 'flex' }}>
      <p>Welcome, {}</p>
      <button type="button">
 {/* <button type="button" onClick={() => dispatch(logOut())}> */}
        Log out
      </button>
    </div>
  );
};

