import { BookmarkController } from "../controllers/bookmark.ts";
import { Router } from "../deps.ts";
import { BookmarkRepository } from "../repositories/bookmark.ts";
import { BookmarkService } from "../services/bookmark.ts";

const router = new Router();

const kv = await Deno.openKv();
const bookmarkRepository = BookmarkRepository(kv);
const bookmarkService = BookmarkService(bookmarkRepository);

const bookmarkController = BookmarkController(bookmarkService);

const v1r = router.prefix("/v1");

v1r.get("/bookmarks", bookmarkController.index);
v1r.post("/bookmarks", bookmarkController.create);

export default router;
