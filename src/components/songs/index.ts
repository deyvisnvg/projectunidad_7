import { Router } from "express";
import { findAll, findById, findAllPublic, crear } from "./controller";
import { checkOwn } from "../../lib/jwt";

const songRouter: Router = Router();

songRouter.post("/add", checkOwn, crear);
songRouter.get("/", checkOwn, findAll);
songRouter.get("/public", findAllPublic);
songRouter.get("/:id", checkOwn, findById);

export default songRouter;