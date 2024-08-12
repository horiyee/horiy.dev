import { BookmarkRepository } from "../repositories/bookmark.ts";
import { Bookmark } from "../types/bookmark.ts";
import { NotFoundError } from "../types/index.ts";

export type BookmarkService = {
  fetchAll: () => Promise<Bookmark[]>;
  create: (bookmark: Omit<Bookmark, "id">) => Promise<string>;
  update: (bookmark: Bookmark) => Promise<void>;
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

  const update = async (bookmark: Bookmark) => {
    const current = await bookmarkRepository.fetch(bookmark.id);

    if (current === null) {
      throw new NotFoundError(`Bookmark not found. id = ${bookmark.id}`);
    }

    await bookmarkRepository.put(bookmark);
  };

  return { fetchAll, create, update };
};
