import React from 'react';
import { fetchArticleById } from '@/utils/fetch';
import { useQuery } from '@tanstack/react-query';
import ReactMarkdown from 'react-markdown';
import { convertDate } from '@/utils/convertDate';
import Image from 'next/image';
import Skeleton from 'react-loading-skeleton'; 
import 'react-loading-skeleton/dist/skeleton.css'; 

interface BlogDetailsProps {
  id: string;
}

const BlogDetails: React.FC<BlogDetailsProps> = ({ id }) => {
  const {
    data: article,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['article', id], 
    queryFn: () => fetchArticleById(id),
  });

  const date = convertDate(article?.published_at);

  if (isLoading) {
    return (
      <article className="w-full h-full px-[3%]">
        <Skeleton height={30} width={100} className="mb-4" /> 
        <Skeleton height={40} className="mb-2" /> 
        <Skeleton height={20} width={150} className="mb-4" /> 
        <Skeleton height={300} className="mb-4" /> 
        <Skeleton count={5} />
      </article>
    );
  }

  if (isError) {
    return <div>Error loading article. Please try again later.</div>;
  }

  return (
    <article className="w-full h-full px-[3%]">
      {article?.tag_list && (
        <span
          className={`bg-[rgb(9,27,71)] text-[#b2ffe1] p-3 rounded backdrop-blur-lg font-normal text-[15px] leading-5 capitalize inline-block`}
        >
          {article?.tags[0]}
        </span>
      )}
      <div>
        <h3 className="text-[#151515] font-semibold leading-6 text-[16px]">
          {article?.title}
        </h3>
        <small>{date}</small>
        {article?.cover_image && (
          <Image
            className="w-full h-auto"
            src={article?.cover_image}
            alt="cover image"
            width={100}
            height={100}
            priority
          />
        )}
      </div>
      <div className="my-5 w-full">
        <ReactMarkdown>{article?.body_markdown}</ReactMarkdown>
      </div>
    </article>
  );
};

export default BlogDetails;