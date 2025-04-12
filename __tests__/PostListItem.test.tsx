import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import { PostListItem } from '@/components'; // Adjust the import path
import { Post } from '@/types';
import '@testing-library/jest-dom';

// Mock the Next.js router
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

const mockPush = jest.fn();

beforeEach(() => {
  (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
  mockPush.mockReset();
});

const mockPost: Post = {
  id: '123',
  title: 'Test Post Title',
  summary: 'This is a short summary of the post.',
  content: 'This is dummy content',
  coverImageUrl: 'https://example.com/image.jpg',
  author: { id: 1, name: 'John Doe' },
  createdAt: Date.now().toString(),
  updatedAt: Date.now().toString(),
};

describe('<PostListItem />', () => {
  it('renders post data correctly', () => {
    render(<PostListItem post={mockPost} />);

    expect(screen.getByRole('heading', { name: /test post title/i })).toBeInTheDocument();
    expect(screen.getByText(/this is a short summary/i)).toBeInTheDocument();
    expect(screen.getByText(/by john doe/i)).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', mockPost.coverImageUrl);
  });

  it('navigates to the post detail page on "Read More" click', () => {
    render(<PostListItem post={mockPost} />);

    const button = screen.getByRole('button', { name: /read more/i });
    fireEvent.click(button);

    expect(mockPush).toHaveBeenCalledWith('/posts/123');
  });
});