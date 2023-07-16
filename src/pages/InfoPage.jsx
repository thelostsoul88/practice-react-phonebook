import { useAuth } from '../hooks/useAuth';
import { InfoText } from '../components/InfoText/InfoText';

const InfoPage = () => {
  const { isLoggedIn } = useAuth();

  return (
    <main>
      <title>Your Contacts</title>
      {isLoggedIn && <InfoText />}
    </main>
  );
};

export default InfoPage;
