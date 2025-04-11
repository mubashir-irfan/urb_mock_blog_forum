import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

interface FullPageLoaderProps {
  message?: string;
}

const FullPageLoader: React.FC<FullPageLoaderProps> = ({ message }) => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
        zIndex: 1000, // Ensure it's on top of other content
      }}
    >
      <CircularProgress size={60} />
      {message && (
        <Typography variant="body1" sx={{ marginTop: '1rem' }}>
          {message}
        </Typography>
      )}
    </Box>
  );
};

export default FullPageLoader;