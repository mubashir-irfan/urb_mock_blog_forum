'use client'

import { useGet } from "@/hooks/useAPIHooks";
import { ErrorPage } from "@/shared/components";
import { PostListSkeleton } from "@/shared/skeletons";
import { Post } from "@/types";
import { List, Typography } from '@mui/material';
import PostListItem from "./PostListItem";

export default function Posts() {
  const { data: posts, isLoading, isError } = useGet<Post[]>('posts', 'posts',)

  if (isLoading) {
    return <PostListSkeleton />
  }

  if (isError) {
    return <ErrorPage />
  }

  if (!posts) {
    return <Typography>No posts found yet.</Typography>;
  }

  return (
    <List aria-label="Blog Posts">
      {posts.map((post) => (
        <PostListItem key={post.id} post={post} />
      ))}
    </List>
  );
}