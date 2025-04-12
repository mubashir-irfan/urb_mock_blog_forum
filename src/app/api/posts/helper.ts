import { createInMemoryPost, getInMemoryPostDetails, getInMemoryPosts, getInMemoryPostsIDs } from '@/services/InMemoryPosts';
import { Post } from '@/types';

export const getCurrentInMemoryPosts = () => getInMemoryPosts();
export const getCurrentInMemoryPostsIDs = () => getInMemoryPostsIDs();

export const getCurrentInMemoryPostDetails = (id: string) => {
  return getInMemoryPostDetails(id);
};

export const createCurrentInMemoryPost = (post: Post) => createInMemoryPost(post)