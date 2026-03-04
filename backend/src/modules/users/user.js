import { getDB } from "../../config/db.js";
import { ObjectId } from "mongodb";

export default async function userManagement(fastify) {
  fastify.get(
    "/profile",
    { preHandler: [fastify.authenticate] },
    async (req, reply) => {
      const db = getDB();

      const userId = req.user.userId;

      const user = await db.collection("users").findOne({
        _id: new ObjectId(userId),
      });

      if (!user) {
        return reply.code(404).send({ message: "User not found" });
      }

      return {
        id: user._id,
        username: user.username,
        ownerName: user.ownerName,
        phone: user.phone,
        shopId: user.shopId,
      };
    },
  );

  fastify.post(
    "/updateprofile",
    { preHandler: [fastify.authenticate] },
    async (req, reply) => {
      const db = getDB();
      const userId = req.user.userId;
      const { key, value } = req.body;

      await db
        .collection("users")
        .updateOne({ _id: new ObjectId(userId) }, { $set: { [key]: value } });

      return { success: true };
    },
  );
}
