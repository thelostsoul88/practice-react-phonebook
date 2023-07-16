import { useAuth } from '../hooks/useAuth';
import { Contacts } from '../components/Contacts/Contacts';

const ContactsPage = () => {
  const { isLoggedIn } = useAuth();
  return (
    <main>
      <title>Your Contacts</title>
      {isLoggedIn && <Contacts />}
    </main>
  );
};

export default ContactsPage;
