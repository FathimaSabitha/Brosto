import dotenv from "dotenv";
dotenv.config();

import fastify from "fastify";
import jwt from "@fastify/jwt";
import cors from "@fastify/cors";

const app = fastify();
  console.log("JWT_SECRET:", process.env.JWT_SECRET);

app.register(jwt, {
  secret: process.env.JWT_SECRET,
});

app.register(cors, {
  origin: true,
});

app.decorate("authenticate", async function (req, reply) {
  try {
    await req.jwtVerify();
  } catch (err) {
    reply.code(401).send({ message: "Unauthorized" });
  }
});

export default app;