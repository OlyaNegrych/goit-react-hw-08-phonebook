import { useDispatch } from 'react-redux';
import { StyledBtn } from './UserMenu.styled';
import { logOut } from '../../../redux/auth/operations';
import { useAuth } from '../../../hooks/useAuth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { userName } = useAuth();

  return (
    <div style={{ display: 'flex' }}>
      <p>
        Welcome, <b>{userName}</b>
      </p>
      <StyledBtn type="button" onClick={() => dispatch(logOut())}>
        Log out
      </StyledBtn>
    </div>
  );
};

