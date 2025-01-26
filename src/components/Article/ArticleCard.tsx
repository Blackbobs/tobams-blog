import { Article } from "@/types/Articles";
import { convertDate } from "@/utils/convertDate";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const date = convertDate(article?.published_at)
  if (!article) {
    return (
      <article className="flex flex-col items-center my-5 relative px-3 max-w-[400px]">
        <div className="relative">
          <div data-testid="skeleton-loader">
            <Skeleton height={200} width={400} />
            <Skeleton
              height={30}
              width={100}
              className="absolute top-2 left-2"
            />
          </div>
        </div>
        <div className="my-5 w-full">
          <Skeleton height={30} className="mb-2" />
          <Skeleton height={60} className="mb-2" />
          <Skeleton height={20} width={150} className="mb-2" />
        </div>
      </article>
    );
  }

  return (
    <article className="flex flex-col items-center my-5 relative px-3 max-w-[400px]">
      <div className="relative">
        <Image
          className="w-[400px] h-auto"
          src={article.cover_image || "/article.jpeg"}
          alt="article image"
          width={100}
          height={100}
          priority
        />
        {article?.tag_list && (
          <h4
            className={`bg-[#091b47] text-[#b2ffe1] absolute top-2 left-2 p-3 rounded backdrop-blur-lg z-10 font-normal text-[15px] leading-5`}
          >
            {article?.tag_list[0]}
          </h4>
        )}
      </div>
      <div className="my-5">
        <h3 className="text-[#151515] font-semibold leading-6 text-[16px]">
          {article?.title}
        </h3>
        <p className="text-[#696969] text-[14px] leading-[21px] my-5">
          {article?.description}
        </p>
        <div className="flex itcen justify-between w-full">
          <span className="text-[#6C757D] text-[16px] font-normal leading-[30px] flex items-center gap-1">
            {date}{" "}
            <span className="hidden md:block">| 3 mins read</span>
          </span>
          <Link
            className=" text-primary text-[16px] leading-[30px] border-b border-primary pb-1"
            href={{
              pathname: `/blog/${article.slug}`,
              query: { id: article.id },
            }}
          >
            View Post
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
