import { RegisterForm } from 'components/Auth/RegisterForm/RegisterForm';
import Section from '../../components/Section/Section';
import { StyledConactPage } from 'pages/Contacts/ContactsPage.styled';

export default function Register() {
  return (
    <StyledConactPage>
      <Section>
        <RegisterForm />
      </Section>
    </StyledConactPage>
  );
}
