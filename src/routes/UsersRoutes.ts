import { Router } from "express";
import { controllers } from "../controllers/userController";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";

const router = Router();

router.post("/signIn", controllers.signInController);

router.post("/", controllers.createController);

router.get("/:nickname", ensureAuthenticated, controllers.getNicknameController);

router.get("/", ensureAuthenticated, controllers.filterController);

router.patch("/", ensureAuthenticated, controllers.updateController);

router.delete("/:id", ensureAuthenticated, controllers.deleteController);

export { router as UsersRoutes };
