import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUserName,
  selectUserEmail,
} from '../redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    userName,
    userEmail,
  };
};
