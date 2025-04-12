// components/Header.tsx
'use client';

import React from 'react';
import { AppBar, Toolbar, Typography, styled } from '@mui/material';
import { useRouter } from 'next/navigation';
import { Button } from '@/shared/components';

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#000', // Changed to black
  color: 'white',
});

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Header: React.FC = () => {
  const router = useRouter();

  const handleCreatePost = () => {
    router.push('/posts/create');
  };

  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <Typography variant="h6" component="div">
          My Blog
        </Typography>
        <Button onClick={handleCreatePost}>
          Create Post
        </Button>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;