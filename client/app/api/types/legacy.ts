import { LegacyCategory, LegacyMarkdownPost } from "../../types/legacy";

export type FetchLegacyMarkdownPostsApiResponse = {
  markdownPosts: LegacyMarkdownPost[];
};

export type FetchLegacyCategoriesApiResponse = {
  categories: LegacyCategory[];
};
