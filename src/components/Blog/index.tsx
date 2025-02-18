'use client';
import useArticleStore from '@/store/useArticleStore';
import debounce from 'lodash.debounce';
import { useEffect, useState, useCallback } from 'react';
import { IoChevronDownOutline, IoSearch } from 'react-icons/io5';
import ArticleCard from '../Article/ArticleCard';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Blog = () => {
  const { articles, loading, error, fetchArticles } = useArticleStore();
  const [searchInput, setSearchInput] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('All posts');
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  // Debounced search handler
  const handleSearch = useCallback(
    debounce((input: string) => {
      setSearchInput(input);
    }, 300),
    []
  );

  // Filter and search logic
  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchInput.toLowerCase()) ||
      article.description.toLowerCase().includes(searchInput.toLowerCase());

    const matchesFilter =
      selectedFilter === 'All posts' || article.tag_list.includes(selectedFilter);

    return matchesSearch && matchesFilter;
  });

  // Paginate the filtered articles
  const paginatedArticles = filteredArticles.slice(0, currentPage * articlesPerPage);

  // Reset pagination when search or filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchInput, selectedFilter]);

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className="p-2 w-full my-5">
      <div className="flex items-center justify-center w-full">
        <h2 className="text-primary w-[300px] w-full font-semibold leading-[30px] text-center text-[20px]">
          Stay Updated with the Latest trends in Tobams Group
        </h2>
      </div>

      <div className="flex items-center justify-between gap-5 my-5 max-w-screen-lg mx-auto">
        {/* Search Input */}
        <div className="flex flex-1 gap-3 items-center justify-between p-4 border border-[#1515150F]">
          <input
            type="text"
            className="focus:outline-none border-none text-[#696969] leading-6"
            placeholder="Search"
            defaultValue={searchInput}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <IoSearch size={25} />
        </div>

        {/* Filter Dropdown */}
        <div className="relative">
          <button
            className="border border-[#1515150F] py-4 px-5 flex items-center gap-3"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <span className="hidden md:block">{selectedFilter}</span>
            <IoChevronDownOutline size={25} />
          </button>

          {/* Dropdown Menu */}
          {isFilterOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-[#1515150F] rounded shadow-lg z-10">
              <ul>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSelectedFilter('All posts');
                    setIsFilterOpen(false);
                  }}
                >
                  All posts
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSelectedFilter('portfolio');
                    setIsFilterOpen(false);
                  }}
                >
                  Portfolio
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSelectedFilter('nextjs');
                    setIsFilterOpen(false);
                  }}
                >
                  Next.js
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSelectedFilter('showdev');
                    setIsFilterOpen(false);
                  }}
                >
                  ShowDev
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSelectedFilter('programming');
                    setIsFilterOpen(false);
                  }}
                >
                  Programming
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="my-5 flex items-center gap-5 mx-auto max-w-screen-xl w-full flex-wrap">
        {loading ? (
          // Show skeleton loader while loading
          Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="max-w-[400px] w-full">
              <Skeleton height={200} className="mb-4" />
              <Skeleton height={20} width={100} className="mb-2" />
              <Skeleton height={30} className="mb-2" />
              <Skeleton height={60} className="mb-2" />
              <Skeleton height={20} width={150} className="mb-2" />
            </div>
          ))
        ) : (
          // Show paginated articles when data is loaded
          paginatedArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))
        )}
      </div>

      {!loading && paginatedArticles.length < filteredArticles.length && (
        <div className="flex justify-center my-5">
          <button
            onClick={handleLoadMore}
            className="bg-[#F9F9F9] text-primary border border-primary rounded px-4 py-2 rounded"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default Blog;