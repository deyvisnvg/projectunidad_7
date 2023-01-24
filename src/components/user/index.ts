import { Router } from "express";
import * as controller from "./controller";
import { checkOwn } from "../../lib/jwt";

const userRouter: Router = Router();

userRouter.get("/", checkOwn, controller.findAll);
userRouter.get("/:id", checkOwn, controller.findId);
userRouter.post("/add", controller.addUser);
userRouter.post("/login", controller.login);

export default userRouter;