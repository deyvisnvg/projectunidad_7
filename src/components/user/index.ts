import { Router } from "express";
import * as controller from "./controller"

const userRouter: Router = Router();

userRouter.get("/", controller.findAll)
userRouter.post("/add", controller.addUser)

export default userRouter;