import { Status } from "jsr:@oak/commons@0.11/status";
import { RouterContext } from "../deps.ts";
import { BookmarkService } from "../services/bookmark.ts";

export const BookmarkController = (bookmarkService: BookmarkService) => {
  const index = async (ctx: RouterContext<"/bookmarks">) => {
    const bookmarks = await bookmarkService.fetchAll();

    ctx.response.status = Status.OK;

    ctx.response.body = {
      bookmarks: bookmarks.map((bookmark) => ({
        ...bookmark,
        createdAt: bookmark.createdAt.toISOString(),
        updatedAt: bookmark.updatedAt.toISOString(),
      })),
    };
  };

  const create = async (ctx: RouterContext<"/bookmarks">) => {
    const json: {
      url: string;
      createdAt: string;
      updatedAt: string;
    } = await ctx.request.body.json().catch((err) => {
      console.error(`Failed to parse json body: ${err}`);

      ctx.response.status = Status.BadRequest;
      ctx.response.type = "json";

      ctx.response.body = { error: "Invalid request body" };
    });

    const { url } = json;
    const createdAt = new Date(json.createdAt);
    const updatedAt = new Date(json.updatedAt);

    const id = await bookmarkService.create({ url, createdAt, updatedAt });

    ctx.response.status = Status.Created;
    ctx.response.type = "json";

    ctx.response.body = { id };
  };

  return { index, create };
};
