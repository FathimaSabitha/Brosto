import dotenv from "dotenv";
dotenv.config();

import Fastify from "fastify";

const app = Fastify({ logger: true });

app.get("/health", async () => {
  return { status: "ok", app: "brosto" };
});

app.listen({ port: process.env.PORT }, err => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  console.log("🔥 Brosto backend running on port", process.env.PORT);
});
