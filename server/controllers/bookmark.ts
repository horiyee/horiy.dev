import { Status } from "jsr:@oak/commons@0.11/status";
import { RouterContext } from "../deps.ts";
import { Bookmark } from "../types/bookmark.ts";

export const BookmarkController = () => {
  const index = async (ctx: RouterContext<"/bookmarks">) => {
    const kv = await Deno.openKv();

    const entries = kv.list<Omit<Bookmark, "uuid">>({ prefix: ["bookmarks"] });

    const body: {
      bookmarks: {
        uuid: string;
        url: string;
        createdAt: string;
        updatedAt: string;
      }[];
    } = { bookmarks: [] };

    for await (const entry of entries) {
      try {
        const { key, value } = entry;

        const bookmark = {
          uuid: key[1].toString(),
          ...value,
          createdAt: value.createdAt.toISOString(),
          updatedAt: value.updatedAt.toISOString(),
        };

        body.bookmarks = [...body.bookmarks, bookmark];
      } catch (err) {
        console.error(err);
      }
    }

    ctx.response.status = Status.OK;
    ctx.response.type = "json";

    ctx.response.body = body;
  };

  return { index };
};
