import React from 'react';
import { render, screen } from '@testing-library/react';
import ArticleCard from '@/components/Article/ArticleCard';

const mockArticle = {
  id: 1,
  title: 'Test Article',
  description: 'This is a test article.',
  published_at: '2025-01-24T08:18:30Z',
  cover_image: '/test-image.jpg',
  tag_list: ['test'],
};

describe('ArticleCard', () => {
  it('should render the article title and description', () => {
    render(<ArticleCard article={mockArticle} />);
    expect(screen.getByText('Test Article')).toBeInTheDocument();
    expect(screen.getByText('This is a test article.')).toBeInTheDocument();
  });

  it('should render a skeleton loader when article is undefined', () => {
    render(<ArticleCard article={undefined} />);
    expect(screen.getByTestId('skeleton-loader')).toBeInTheDocument();
  });
});