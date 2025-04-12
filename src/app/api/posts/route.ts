import { ServerAPI } from '@/services';

import { Post } from '@/types';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    const posts: Post[] = await ServerAPI.get('posts')
    return new Response(JSON.stringify(posts), {
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

export async function POST(req: NextRequest) {
  try {
    const { title, summary, content } = await req.json();

    if (!title || !summary || !content) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const newPostID = Date.now().toString();
    const newPost: Post = {
      id: newPostID,
      title,
      summary,
      content,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      author: {
        id: 29,
        name: 'Session User'
      },
      coverImageUrl: 'https://picsum.photos/id/1043/800/400'
    }

    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
