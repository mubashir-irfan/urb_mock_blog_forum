'use client';

import { useGet } from '@/hooks/useAPIHooks';
import { Button, ErrorPage } from '@/shared/components';
import { PostSkeleton } from '@/shared/skeletons';
import { Post } from '@/types';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography
} from '@mui/material';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

const PostDetails = () => {
  const { id } = useParams();
  const router = useRouter();

  const { data: post, isLoading, isError } = useGet<Post>(`/api/posts/${id}`, `client/posts/${id}`)

  if (isLoading) {
    return <PostSkeleton />
  }

  if (isError) {
    return <ErrorPage message='Free Backend Tier does not allow creating data :)' />
  }

  if (!post) {
    return <ErrorPage />
  }

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
          component="img"
          image={post.coverImageUrl}
          alt={post.title}
          sx={{
            maxHeight: 450,
            objectFit: 'cover',
            width: '100%',
          }}
        />
        <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 700, mb: 2 }}
          >
            {post.title}
          </Typography>

          <Typography
            variant="subtitle2"
            color="text.secondary"
            sx={{ mb: 3, fontStyle: 'italic' }}
          >
            By <Link href={`/authors/${post.author.id}`}>{post.author.name}</Link> · {new Date(post.createdAt).toLocaleDateString()}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.8,
              fontSize: '1rem',
              color: 'text.primary',
              mb: 4,
              whiteSpace: 'pre-wrap',
            }}
          >
            {post.content}
          </Typography>

          <Box display="flex" justifyContent="flex-start">
            <Button
              variantType="secondary"
              onClick={() => router.back()}
              className="text-sm font-medium text-primary hover:underline"
            >
              Go Back
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default PostDetails;