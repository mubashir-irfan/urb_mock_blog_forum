'use client';

import { usePost } from '@/hooks/useAPIHooks';
import { Button, TextArea, TextInput } from '@/shared/components';
import { alphanumeric } from '@/utils/validators';
import {
  Box,
  CircularProgress,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Paper,
  Typography,
  styled,
} from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[5],
  backgroundColor: theme.palette.background.paper,
}));

const StyledForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
}));

const CreatePostPage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [titleError, setTitleError] = useState<string | undefined>(undefined);
  const [summaryError, setSummaryError] = useState<string | undefined>(undefined);
  const [contentError, setContentError] = useState<string | undefined>(undefined);
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate: createPost, isPending } = usePost('/api/posts', () => {
    console.log('Post created with success')
    queryClient.invalidateQueries({
      queryKey: ['posts']
    })
    router.push('/')
  }, () => {
    console.log('Failed to create post')
  })

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Validate fields
    const titleErrorMsg = alphanumeric(title);
    const summaryErrorMsg = alphanumeric(summary);
    const contentErrorMsg = !content.trim() ? 'Content is required.' : undefined;

    setTitleError(titleErrorMsg);
    setSummaryError(summaryErrorMsg);
    setContentError(contentErrorMsg);

    // If no errors, submit the form
    if (!titleErrorMsg && !summaryErrorMsg && !contentErrorMsg) {
      console.log({ title, summary, content });
      createPost({
        title,
        summary,
        content
      })
    }
  };

  return (
    <Container sx={{ py: 6 }}>
      <StyledPaper>
        <Typography variant="h4" component="h1" gutterBottom>
          Create New Post
        </Typography>
        <Divider sx={{ mb: 4 }} />
        <StyledForm onSubmit={handleSubmit}>
          <FormControl error={!!titleError}>
            <FormLabel htmlFor="title">Title</FormLabel>
            <TextInput
              value={title}
              onChange={(e) => {
                setTitle(e.target.value)
                setTitleError('');
              }}
              errorMessage={titleError}
            />
          </FormControl>

          <FormControl error={!!summaryError}>
            <FormLabel htmlFor="summary">Summary</FormLabel>
            <TextInput
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              errorMessage={summaryError}
            />
          </FormControl>

          <FormControl error={!!contentError}>
            <FormLabel htmlFor="content">Content</FormLabel>
            <TextArea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              errorMessage={contentError}
            />
          </FormControl>

          <Box display="flex" justifyContent="flex-end">
            {
              !isPending ? <Button type="submit">Create Post</Button> : <CircularProgress />
            }
          </Box>
        </StyledForm>
      </StyledPaper>
    </Container>
  );
};

export default CreatePostPage;