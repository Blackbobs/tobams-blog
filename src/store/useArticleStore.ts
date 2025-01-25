import { axiosConfig } from "@/lib/axiosConfig";
import { Article } from "@/types/Articles";
import { create } from "zustand";

interface ArticleStore {
  articles: Article[];
  loading: boolean;
  error: string | null;
  lastFetched: number | null; // Timestamp of the last fetch
  fetchArticles: () => Promise<void>;
}

const useArticleStore = create<ArticleStore>((set, get) => ({
  articles: [], // Initial state
  loading: false, // Loading state
  error: null, // Error state
  lastFetched: null, // Timestamp of the last fetch

  // Action to fetch articles
  fetchArticles: async () => {
    const { lastFetched } = get();

    // Avoid re-fetching if data was fetched recently (e.g., within the last 5 minutes)
    if (lastFetched && Date.now() - lastFetched < 5 * 60 * 1000) {
      return; // Exit if data is still fresh
    }

    set({ loading: true, error: null }); // Set loading state

    try {
      const response = await axiosConfig.get("/api/articles");
      set({
        articles: response.data,
        loading: false,
        lastFetched: Date.now(), // Update the last fetch timestamp
      });
    } catch (error) {
      set({ error: "Failed to fetch articles", loading: false }); // Set error state
      console.error("Error fetching articles:", error);
    }
  },
}));

export default useArticleStore;
