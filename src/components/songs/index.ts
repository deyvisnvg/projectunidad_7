import { Router } from "express";
import { findAll, findById, crear } from "./controller";


const songRouter: Router = Router();

songRouter.post("/", crear);
songRouter.get("/", findAll);
songRouter.get("/:id", findById);

export default songRouter;