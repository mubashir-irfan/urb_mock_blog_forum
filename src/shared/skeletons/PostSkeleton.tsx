'use client'
import { Box, Card, CardContent, CardMedia, Container, keyframes, styled } from '@mui/material';
import React from 'react';

const pulse = keyframes`
  0% {
    opacity: 0.7;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.7;
  }
`;

const SkeletonBox = styled(Box)({
  backgroundColor: '#f0f0f0',
  animation: `${pulse} 1.5s ease-in-out infinite`,
});

const PostDetailsSkeleton: React.FC = () => {
  return (
    <Container sx={{ py: 5 }}>
      <Card
        sx={{
          maxWidth: '900px',
          mx: 'auto',
          borderRadius: 3,
          boxShadow: 4,
          overflow: 'hidden',
        }}
      >
        <CardMedia
          component={SkeletonBox} // Use SkeletonBox for the image
          sx={{
            maxHeight: 450,
            width: '100%',
          }}
        />
        <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
          <SkeletonBox width="60%" height={40} sx={{ mb: 2 }} />
          <SkeletonBox width="40%" height={20} sx={{ mb: 3 }} />
          <SkeletonBox width="100%" height={20} sx={{ mb: 1 }} />
          <SkeletonBox width="90%" height={20} sx={{ mb: 1 }} />
          <SkeletonBox width="95%" height={20} sx={{ mb: 4 }} />
          <Box display="flex" justifyContent="flex-start">
            <SkeletonBox width={100} height={30} />
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default PostDetailsSkeleton;