import { Application, Router } from "./deps.ts";
import { authMiddleware } from "./middlewares/auth.ts";
import { BookmarkAdminRoutes, BookmarkRoutes } from "./routes/bookmark.ts";

const app = new Application();

const router = new Router();
const adminRouter = router.prefix("/admin").use(authMiddleware);

const kv = await Deno.openKv();

const bookmark = BookmarkRoutes(router, kv);
const bookmarkAdmin = BookmarkAdminRoutes(adminRouter, kv);

app.use(bookmark.routes());
app.use(bookmarkAdmin.routes());

await app.listen({ port: 8080 });
