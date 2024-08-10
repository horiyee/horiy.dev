import { legacyApiRoutes } from "../../config/apiRoutes";
import { getLegacyApiEndpoint } from "../legacy";
import {
  FetchLegacyBookmarksApiResponse,
  FetchLegacyCategoriesApiResponse,
  FetchLegacyMarkdownPostsApiResponse,
} from "../types/legacy";

export const fetchLegacyMarkdownPostsApiClient = async () => {
  const url = getLegacyApiEndpoint(legacyApiRoutes.markdownPosts);

  const res = await fetch(url);
  const json: FetchLegacyMarkdownPostsApiResponse = await res.json();

  return json.markdownPosts.map((markdownPost) => ({
    createdAt: new Date(markdownPost.createdAt),
    updatedAt: new Date(markdownPost.updatedAt),
    ...markdownPost,
  }));
};

export const fetchLegacyCategoriesApiClient = async () => {
  const url = getLegacyApiEndpoint(legacyApiRoutes.categories);

  const res = await fetch(url);
  const json: FetchLegacyCategoriesApiResponse = await res.json();

  return json.categories.map((category) => ({
    createdAt: new Date(category.createdAt),
    updatedAt: new Date(category.updatedAt),
    ...category,
  }));
};

export const fetchLegacyBookmarksApiClient = async () => {
  const url = getLegacyApiEndpoint(legacyApiRoutes.bookmarks);

  const res = await fetch(url);
  const json: FetchLegacyBookmarksApiResponse = await res.json();

  return json.bookmarks.map((bookmark) => ({
    createdAt: new Date(bookmark.createdAt),
    updatedAt: new Date(bookmark.updatedAt),
    ...bookmark,
  }));
};
