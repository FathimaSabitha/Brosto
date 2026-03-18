import fastify from "fastify";
import jwt from "@fastify/jwt";
import cors from "@fastify/cors";

const app = fastify();

app.register(jwt, cors, {
  secret: process.env.JWT_SECRET,
  origin: true
});

app.decorate("authenticate", async function (req, reply) {
  try {
    await req.jwtVerify();
  } catch (err) {
    reply.code(401).send({ message: "Unauthorized" });
  }
});

export default app;