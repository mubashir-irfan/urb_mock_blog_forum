'use client';

import { Button } from '@/shared/components';
import { Post } from '@/types';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';

interface PostListItemProps {
  post: Post;
}

const PostListItem: React.FC<PostListItemProps> = ({ post }) => {
  const router = useRouter();

  const handleReadMore = () => {
    router.push(`/posts/${post.id}`);
  };

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        m: 2,
        borderRadius: 3,
        boxShadow: 3,
        transition: 'transform 0.2s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 6,
        },
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: { xs: '100%', sm: 260 },
          height: { xs: 200, sm: 'auto' },
          objectFit: 'cover',
        }}
        image={post.coverImageUrl}
        alt={post.title}
      />
      <CardContent sx={{ flex: 1, p: { xs: 2, sm: 3 } }}>
        <Typography
          variant="h6"
          component="h2"
          gutterBottom
          sx={{ fontWeight: 600, lineHeight: 1.4 }}
        >
          {post.title}
        </Typography>

        {/* Author name */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 1 }}
        >
          By {post.author?.name}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 3, lineHeight: 1.6 }}
        >
          {post.summary}
        </Typography>

        <Box display="flex" justifyContent="flex-end">
          <Button
            size="small"
            onClick={handleReadMore}
            className="text-sm font-semibold text-primary hover:underline"
          >
            Read More
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PostListItem;
