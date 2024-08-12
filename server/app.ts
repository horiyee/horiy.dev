import { Application } from "./deps.ts";
import bookmark from "./routes/bookmark.ts";

const app = new Application();

app.use(bookmark.routes());

await app.listen({ port: 8080 });
