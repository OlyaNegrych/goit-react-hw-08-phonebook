import Navigation from '../Navigation/Navigation';
import { UserMenu } from '../Auth/UserMenu/UserMenu';
import { AuthNav } from '../Auth/AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { Header } from './AppBar.styled';

export const AppBar = () => {
    const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      <hr />
    </Header>
  );
};
