import {
  BookmarkAdminController,
  BookmarkController,
} from "../controllers/bookmark.ts";
import { Router } from "../deps.ts";
import { BookmarkRepository } from "../repositories/bookmark.ts";
import { BookmarkService } from "../services/bookmark.ts";

export const BookmarkRoutes = (router: Router, kv: Deno.Kv) => {
  const bookmarkRepository = BookmarkRepository(kv);
  const bookmarkService = BookmarkService(bookmarkRepository);
  const bookmarkController = BookmarkController(bookmarkService);

  const v1r = router.prefix("/v1");

  v1r.get("/bookmarks", bookmarkController.index);

  return v1r;
};

export const BookmarkAdminRoutes = (router: Router, kv: Deno.Kv) => {
  const bookmarkRepository = BookmarkRepository(kv);
  const bookmarkService = BookmarkService(bookmarkRepository);
  const bookmarkAdminController = BookmarkAdminController(bookmarkService);

  router.post("/bookmarks", bookmarkAdminController.create);
  router.put("/bookmarks/:id", bookmarkAdminController.update);

  return router;
};
