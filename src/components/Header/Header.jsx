import { useAuth } from '../../hooks/useAuth';

import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from '../AuthNav/AuthNav';
import { UserMenu } from '../UserMenu/UserMenu';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBar
      sx={{
        position: 'sticky',
        top: 0,
        left: 0,
        zIndex: 1,
        backgroundColor: 'colors.accent',
      }}
    >
      <Toolbar
        sx={{
          flex: 1,
          justifyContent: 'space-around',
        }}
      >
        <Navigation />

        <Typography
          variant="h6"
          component="p"
          sx={{
            textTransform: 'uppercase',
            fontSize: 28,
            fontWeight: 600,
            textAlign: 'center',
          }}
        >
          My contacts APP
        </Typography>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </AppBar>
  );
};
