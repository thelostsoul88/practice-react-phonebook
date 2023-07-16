import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { logIn } from 'redux/auth/operations';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from '@mui/material';
import { BasicModal } from 'components/BasicModal';

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const handleSubmitForm = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  const handleClickShowPassword = () => setShowPassword(show => !show);

  return (
    <BasicModal 
    >
      <Box component="form" onSubmit={handleSubmitForm} sx={{ width: '100%' }}>
        <Box
          component="div"
          sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
        >
          <TextField
            autoFocus
            autoComplete="off"
            required
            name="email"
            type="email"
            label="Email"
            placeholder="johnwick@mail.com"
            variant="outlined"
            fullWidth
            margin="normal"
            sx={{
              backgroundColor: 'colors.accent',
            }}
          />
          <FormControl
            defaultValue=""
            fullWidth
            variant="outlined"
            required
            name="password"
            sx={{
              backgroundColor: 'colors.accent',
            }}
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              name="password"
              label="Password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <Box
            component="div"
            sx={{
              display: 'flex',
              gap: 3,
              justifyContent: 'center',
            }}
          >
            <Button
              type="submit"
              color="inherit"
              variant="outlined"
              sx={{
                color: 'colors.grey',
                outline: 'none',
                fontSize: 16,
                px: 3,
                flex: 0.5,
                '&:hover': {
                  backgroundColor: 'colors.grey',
                  color: 'colors.aqua',
                  border: '1px solid transparent',
                },
              }}
            >
              Log in
            </Button>

            <Link to="/">
              <Button
                color="inherit"
                variant="outlined"
                sx={{
                  color: 'colors.grey',
                  outline: 'none',
                  fontSize: 16,
                  px: 3,
                  '&:hover': {
                    backgroundColor: 'colors.grey',
                    color: 'colors.aqua',
                    border: '1px solid transparent',
                  },
                }}
              >
                Exit
              </Button>
            </Link>
          </Box>
        </Box>

        <Box
          component="div"
          sx={{
            mt: 2,
          }}
        >
          <Typography
            variant="h6"
            component="p"
            sx={{
              fontSize: 18,
              textAlign: 'center',
              color: 'colors.grey',
            }}
          >
            Don't have an account?
            <Link to="/register">{''} Register.</Link>
          </Typography>
        </Box>
      </Box>
    </BasicModal>
  );
};
