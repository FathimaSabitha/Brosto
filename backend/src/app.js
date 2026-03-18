import fastify from "fastify";
import jwt from "@fastify/jwt";

const app = fastify();

app.register(jwt, {
  secret: process.env.JWT_SECRET
});

app.decorate("authenticate", async function (req, reply) {
  try {
    await req.jwtVerify();
  } catch (err) {
    reply.code(401).send({ message: "Unauthorized" });
  }
});

export default app;