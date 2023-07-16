import { Box, Button, InputBase, Paper, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateAvatar } from 'redux/auth/operations';

export const UpdateAvatar = () => {
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = e => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    console.log(555);
    dispatch(updateAvatar(file));
    navigate('/profile');
  };

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
          backgroundColor: 'rgb(242, 236, 236, 0.3)',
        }}
      >
        <InputBase type="file" name="avatar" onChange={handleChange} />
        <Button
          variant="outlined"
          size="sm"
          color="primary"
          sx={{
            outline: 'none',
            fontSize: 16,
            px: 3,
            '&:hover': {
              backgroundColor: 'accent.main',
              border: '1px solid primary.main',
            },
          }}
          onClick={handleUpload}
        >
          Upload
        </Button>
      </Typography>
    </Box>
  );
};
