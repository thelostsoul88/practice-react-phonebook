import { Box, Paper, Typography } from '@mui/material';

export const Hello = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20vh',
      }}
    >
      <Typography
        component={Paper}
        sx={{
          fontSize: 36,
          fontWeight: 500,
          color: 'colors.dark',
          textAlign: 'center',
          padding: 2,
          maxWidth: 500,
          backgroundColor: 'rgb(242, 236, 236, 0.3)'
        }}
      >
        To start working with the{' '}
        <Typography
          sx={{
            fontSize: 40,
            fontWeight: 600,
            color: 'colors.grey',
          }}
        >
          MY CONTACTS APP
        </Typography>{' '}
        please login or register.
      </Typography>
    </Box>
  );
};
