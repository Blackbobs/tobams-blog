'use client';
import BlogDetails from '@/components/Blog/BlogDetails';
import { useSearchParams } from 'next/navigation';
import React from 'react';

const Page = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  if (!id) {
    return <div>Article not found.</div>;
  }

  return (
    <section>
      <BlogDetails id={id} />
    </section>
  );
};

export default Page;