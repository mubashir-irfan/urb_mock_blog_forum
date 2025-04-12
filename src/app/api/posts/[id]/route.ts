import { ServerAPI } from '@/services';
import { NextRequest } from 'next/server';
import { getCurrentInMemoryPostDetails, getCurrentInMemoryPosts } from '../helper';

export async function GET(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    const inMemoryPost = getCurrentInMemoryPostDetails(id);
    console.log('get post by id inmem check', { post: inMemoryPost, all: getCurrentInMemoryPosts() })
    if (inMemoryPost) return new Response(JSON.stringify(inMemoryPost), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

    const post = await ServerAPI.get(`posts/${id}`)

    return new Response(JSON.stringify(post), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching from Mockend:', error);
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}