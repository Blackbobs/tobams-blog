import { axiosConfig } from "@/lib/axiosConfig";
import { Article } from "@/types/Articles";
import { create } from "zustand";

interface ArticleStore {
  articles: Article[];
  loading: boolean;
  error: string | null;
  lastFetched: number | null; 
  fetchArticles: () => Promise<void>;
}

const useArticleStore = create<ArticleStore>((set, get) => ({
  articles: [], 
  loading: false, 
  error: null, 
  lastFetched: null,

  // Action to fetch articles
  fetchArticles: async () => {
    const { lastFetched } = get();

    // Avoid re-fetching if data was fetched recently (e.g., within the last 5 minutes)
    if (lastFetched && Date.now() - lastFetched < 5 * 60 * 1000) {
      return; // Exit if data is still fresh
    }

    set({ loading: true, error: null }); 

    try {
      const response = await axiosConfig.get("/api/articles");
      set({
        articles: response.data,
        loading: false,
        lastFetched: Date.now(), 
      });
    } catch (error) {
      set({ error: "Failed to fetch articles", loading: false }); 
      console.error("Error fetching articles:", error);
    }
  },
}));

export default useArticleStore;
