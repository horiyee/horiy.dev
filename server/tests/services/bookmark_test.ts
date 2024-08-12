import { assert, assertEquals } from "../../deps.ts";
import { BookmarkRepository } from "../../repositories/bookmark.ts";
import { BookmarkService } from "../../services/bookmark.ts";
import { Bookmark } from "../../types/bookmark.ts";
import { testKv } from "../index.ts";

const bookmarkRepository = BookmarkRepository(testKv);
const bookmarkService = BookmarkService(bookmarkRepository);

const bookmarks: Bookmark[] = [
  {
    id: "",
    url: "https://example.com",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

Deno.test(
  "BookmarkService.create() はbookmarkをDeno KVに保存してuuidを返す",
  async () => {
    const id = await bookmarkService.create(bookmarks[0]);

    assert(typeof id === "string");
    bookmarks[0].id = id;
  },
);

Deno.test(
  "BookmarkService.fetchAll() はbookmarkをDeno KVから全取得して返す",
  async () => {
    const results = await bookmarkService.fetchAll();
    assert(results.length > 0);

    const bookmark = results.find((result) => result.id === bookmarks[0].id);
    assertEquals(bookmark, bookmarks[0]);
  },
);
