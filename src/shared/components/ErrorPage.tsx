import React from 'react';
import { Box, Typography, Button, Container, useMediaQuery, useTheme } from '@mui/material';
import { useRouter } from 'next/navigation';

interface ErrorPageProps {
  message?: string;
  onRetry?: () => void;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ message, onRetry }) => {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleGoHome = () => {
    router.push('/');
  };

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '80vh',
        textAlign: 'center',
        padding: isMobile ? '2rem' : '4rem',
      }}
    >
      <Box
        sx={{
          maxWidth: 600,
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Oops! Something went wrong.
        </Typography>
        <Typography variant="body1" paragraph>
          {message || 'We encountered an unexpected error. Please try again later.'}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginTop: '2rem',
          }}
        >
          {onRetry && (
            <Button variant="contained" color="primary" onClick={onRetry}>
              Retry
            </Button>
          )}
          <Button variant="outlined" onClick={handleGoHome}>
            Go Home
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ErrorPage;