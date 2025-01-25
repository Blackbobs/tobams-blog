import { axiosConfig } from "@/lib/axiosConfig";

export const fetchAllArticles = async () => {
  try {
    const response = await axiosConfig.get("/api/articles");
    const { data } = response;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchArticleById = async (id: string) => {
  try {
    const response = await axiosConfig.get(`/api/articles/${id}`);
    const { data } = response;
    return data;
  } catch (error) {
    console.log(error)
  }
};
