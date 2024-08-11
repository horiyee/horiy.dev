import { Application } from "./deps.ts";
import healthCheck from "./routes/healthCheck.ts";
import bookmark from "./routes/bookmark.ts";

const app = new Application();

app.use(healthCheck.routes());

app.use(bookmark.routes());

await app.listen({ port: 8080 });
