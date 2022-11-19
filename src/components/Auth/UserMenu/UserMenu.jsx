import { useDispatch } from 'react-redux';
import { StyledBtn, StyledText, StyledUserMenu } from './UserMenu.styled';
import { logOut } from '../../../redux/auth/operations';
import { useAuth } from '../../../hooks/useAuth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { userName } = useAuth();

  return (
    <StyledUserMenu style={{ display: 'flex' }}>
      <StyledText>
        Welcome, <b>{userName}</b>
      </StyledText>
      <StyledBtn type="button" onClick={() => dispatch(logOut())}>
        Log out
      </StyledBtn>
    </StyledUserMenu>
  );
};

