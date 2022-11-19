import { LoginForm } from 'components/Auth/LoginForm/LoginForm';
import Section from '../../components/Section/Section';
import { StyledConactPage } from 'pages/Contacts/ContactsPage.styled';


export default function Login() {
  return (
    <StyledConactPage>
      <Section>
        <LoginForm />
      </Section>
    </StyledConactPage>
  );
}
