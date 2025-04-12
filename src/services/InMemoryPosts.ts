import { Post } from "@/types";

let inMemoryPosts: Post[] = [];
let inMemoryPostIDs: string[] = [];

// InMemory Posts because mockapi free tier does not offer POST

export const createInMemoryPost = async (post: Post) => {
  inMemoryPosts = [post, ...inMemoryPosts];
  inMemoryPostIDs = [post.id, ...inMemoryPostIDs];
};

export const getInMemoryPosts = () => inMemoryPosts;

export const getInMemoryPostsIDs = () => inMemoryPostIDs;

export const getInMemoryPostDetails = (id: string) => {
  if (inMemoryPostIDs.includes(id)) return inMemoryPosts.find((post) => post.id === id);
  return null;
};