import {
  Box,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from '@mui/material';
import { useAuth } from '../../hooks/useAuth';
import { NavLink } from 'react-router-dom';

export const Profile = () => {
  const { user } = useAuth();

  const avatar = user.avatar.includes('gravatar')
    ? user.avatar
    : `http://localhost:8000/${user.avatar}`;
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '10vh',
        marginBottom: '10vh',
      }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image={avatar}
            alt={user.name}
          />
          <CardContent>
            <Typography variant="h6" color="colors.grey" component="div">
              Name:
            </Typography>
            <Typography variant="h5" color="colors.dark">
              {user.name}
            </Typography>
            <Typography variant="h6" color="colors.grey" component="div">
              Email:
            </Typography>
            <Typography variant="h5" color="colors.dark">
              {user.email}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <NavLink to="update">
            <Button
              color="inherit"
              variant="outlined"
              sx={{
                color: 'colors.dark',
                outline: 'none',
                fontSize: 16,
                px: 3,
                '&:hover': {
                  backgroundColor: 'colors.grey',
                  color: 'colors.aqua',
                  border: '1px solid transparent',
                },
                '&.active': {
                  backgroundColor: 'colors.grey',
                  color: 'colors.aqua',
                  border: '1px solid transparent',
                },
              }}
            >
              Update avatar
            </Button>
          </NavLink>
        </CardActions>
      </Card>
    </Box>
  );
};
