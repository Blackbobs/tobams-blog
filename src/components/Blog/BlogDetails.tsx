import React from 'react';
import { fetchArticleById } from '@/utils/fetch';
import { useQuery } from '@tanstack/react-query';
import ReactMarkdown from 'react-markdown';
import { convertDate } from '@/utils/convertDate';
import Image from 'next/image';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import useArticleStore from '@/store/useArticleStore'; // Import your article store
import Link from 'next/link'; // For the "Explore More" button
import ArticleCard from '../Article/ArticleCard';

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

  // Fetch all articles from the store
  const { articles } = useArticleStore();

  // Filter out the current article and select 3 random articles
  const getRandomArticles = () => {
    if (!article || !articles.length) return [];
    const otherArticles = articles.filter((a) => a.id !== article.id); // Exclude current article
    const shuffled = otherArticles.sort(() => 0.5 - Math.random()); // Shuffle the array
    return shuffled.slice(0, 3); // Get the first 3 random articles
  };

  const randomArticles = getRandomArticles();

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

      {/* Display 3 Random Articles */}
      <div className="mt-10">
        <h4 className="text-primary text-center font-semibold text-[20px] mb-5">
          More articles
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {randomArticles.map((randomArticle) => (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {randomArticles.map((randomArticle) => (
              <ArticleCard key={randomArticle.id} article={randomArticle} />
            ))}
          </div>
          ))}
        </div>
      </div>

      {/* Explore More Button */}
      <div className="flex justify-center mt-10">
        <Link
          href="/" // Link to your blog listing page
          className="bg-[#F9F9F9] text-primary border border-primary rounded px-4 py-2 rounded"
        >
          Explore More
        </Link>
      </div>
    </article>
  );
};

export default BlogDetails;