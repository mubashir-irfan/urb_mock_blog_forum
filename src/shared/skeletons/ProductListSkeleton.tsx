
'use client'
import { Box, Card, CardContent, CardMedia } from '@mui/material';
import { keyframes, styled } from '@mui/material/styles';
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
  animation: `${pulse} 0.8s ease-in-out infinite`,
});

const PostListItemSkeleton: React.FC = () => {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        m: 2,
        borderRadius: 3,
        boxShadow: 3,
      }}
    >
      <CardMedia
        component={SkeletonBox}
        sx={{
          width: { xs: '100%', sm: 260 },
          height: { xs: 200, sm: 'auto' },
        }}
      />
      <CardContent sx={{ flex: 1, p: { xs: 2, sm: 3 } }}>
        <SkeletonBox width="80%" height={30} sx={{ mb: 1 }} />
        <SkeletonBox width="95%" height={20} sx={{ mb: 1 }} />
        <SkeletonBox width="60%" height={20} sx={{ mb: 3 }} />
        <Box display="flex" justifyContent="flex-end">
          <SkeletonBox width={80} height={30} />
        </Box>
      </CardContent>
    </Card>
  );
};

const PostListSkeleton: React.FC = () => {
  return (
    <Box>
      <PostListItemSkeleton />
      <PostListItemSkeleton />
      <PostListItemSkeleton />
      <PostListItemSkeleton />
    </Box>
  );
};

export default PostListSkeleton;