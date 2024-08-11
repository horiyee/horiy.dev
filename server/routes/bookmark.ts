import { BookmarkController } from "../controllers/bookmark.ts";
import { Router } from "../deps.ts";

const router = new Router();
const bookmarkController = BookmarkController();

router.get("/bookmarks", bookmarkController.index);

export default router;
