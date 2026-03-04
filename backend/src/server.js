import app from "./app.js";
import { connectDB } from "./config/db.js";
import registerRoute from "./modules/auth/register.js";
import productRoutes from "./modules/products/product.js";
import userManagement from "./modules/users/user.js";


const start = async () => {
  try {
    await connectDB();
    app.register(registerRoute, { prefix: "/auth" })
    app.register(userManagement, { prefix: "/users" })
    app.register(productRoutes, { prefix: "/products"})


    await app.listen({
      port: 5001,
      host: "0.0.0.0",
    });

    console.log("🚀 Server running on 5000");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
