import { Bookmark } from "../types/bookmark.ts";

export type BookmarkRepository = {
  fetch: (id: string) => Promise<Bookmark | null>;
  fetchAll: () => Promise<Bookmark[]>;
  put: (bookmark: Bookmark) => Promise<void>;
};

export const BookmarkRepository = (kv: Deno.Kv) => {
  const fetch = async (id: string) => {
    const bookmark = await kv.get<Omit<Bookmark, "id">>(["bookmarks", id]);

    if (bookmark.versionstamp !== null) {
      return {
        id,
        ...bookmark.value,
      };
    } else {
      return null;
    }
  };

  const fetchAll = async () => {
    const entries = kv.list<Omit<Bookmark, "id">>({ prefix: ["bookmarks"] });

    const results: { bookmarks: Bookmark[] } = { bookmarks: [] };

    for await (const entry of entries) {
      try {
        const { key, value } = entry;

        const bookmark = {
          id: key[1].toString(),
          ...value,
        };

        results.bookmarks = [...results.bookmarks, bookmark];
      } catch (err) {
        console.error(`Failed to fetch bookmark: ${err}`);
      }
    }

    return results.bookmarks;
  };

  const put = async (bookmark: Bookmark) => {
    const { id, ...rest } = bookmark;

    await kv
      .set(["bookmarks", id], rest)
      .then(() => {
        console.log(`Bookmark updated. id = ${id}`);
      })
      .catch((err) => {
        console.error(`Failed to update bookmark: ${err}`);
      });
  };

  return { fetch, fetchAll, put };
};
