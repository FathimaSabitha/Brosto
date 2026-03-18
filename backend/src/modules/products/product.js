import { ObjectId } from "mongodb";
import { getDB } from "../../config/db.js";

export default async function productRoutes(fastify) {
  fastify.post(
    "/add",
    { preHandler: [fastify.authenticate] },
    async (req, reply) => {
      const db = getDB();
      const { name, price, description } = req.body;

      if (!name || !price) {
        return reply.code(400).send({ message: "Name and price required" });
      }

      const shopId = new ObjectId(req.user.shopId);
      if (!shopId) {
        return reply.code(400).send({ message: "ShopId required" });
      }

      const result = await db.collection("products").insertOne({
        name,
        price,
        description: description || "",
        shopId,
        createdAt: new Date(),
      });

      return { success: true, productId: result.insertedId };
    },
  );

  fastify.get(
    "/my-products",
    { preHandler: [fastify.authenticate] },
    async (req, reply) => {
      const db = getDB();
      const shopId = new ObjectId(req.user.shopId);

      const products = await db
        .collection("products")
        .find({ shopId })
        .toArray();

      return products;
    },
  );

  fastify.put(
    "/:id",
    { preHandler: [fastify.authenticate] },
    async (req, reply) => {
      const db = getDB();
      const { id } = req.params;
      const { name, price, description } = req.body;

      const shopId = new ObjectId(req.user.shopId);

      const result = await db.collection("products").updateOne(
        {
          _id: new ObjectId(id),
          shopId,
        },
        {
          $set: { name, price, description },
        },
      );

      if (!result.matchedCount) {
        return reply.code(404).send({ message: "Product not found" });
      }

      return { success: true };
    },
  );

  fastify.delete(
  "/:id",
  { preHandler: [fastify.authenticate] },
  async (req, reply) => {

   const db = getDB()
   const { id } = req.params;

   const shopId = new ObjectId(req.user.shopId);

   const result = await db.collection("products").deleteOne({
    _id: new ObjectId(id),
    shopId
   })
   if(!result.deletedCount) {
    return reply.code(404).send({message: "Product not found" })
   }

    return { success: true };
  }
);

  fastify.get("/shop/:slug", async (req, reply) => {
    const db = getDB();
    const { slug } = req.params;

    const shop = await db.collection("shops").findOne({ slug });

    if (!shop) {
      return reply.code(404).send({ message: "Shop not found" });
    }

    const products = await db
      .collection("products")
      .find({ shopId: shop._id })
      .toArray();

    return {
      shopName: shop.name,

      //or shop.businessName
      products,
    };
  });
}
