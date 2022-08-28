import { Router } from "express";
import { routes } from "./routes/index";

const router = Router();

router.use("/users", routes.UsersRoutes);

export { router };
