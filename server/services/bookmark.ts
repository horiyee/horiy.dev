import { BookmarkRepository } from "../repositories/bookmark.ts";
import { Bookmark } from "../types/bookmark.ts";

export type BookmarkService = {
  fetchAll: () => Promise<Bookmark[]>;
  create: (bookmark: Omit<Bookmark, "id">) => Promise<string>;
};

export const BookmarkService = (bookmarkRepository: BookmarkRepository) => {
  const fetchAll = async () => {
    const bookmarks = await bookmarkRepository.fetchAll();

    return bookmarks;
  };

  const create = async (bookmark: Omit<Bookmark, "id">) => {
    const id = crypto.randomUUID();

    return await bookmarkRepository.put({ ...bookmark, id }).then(() => id);
  };

  return { fetchAll, create };
};
