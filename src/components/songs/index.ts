import { Router } from "express";
import { findAll, crear } from "./controller";

const songRouter: Router = Router();

songRouter.get("/", findAll);
songRouter.post("/", crear);

export default songRouter;