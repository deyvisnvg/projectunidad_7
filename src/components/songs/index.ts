import { Router } from "express";
import { findAll, findById, crear } from "./controller";
//import { song_private } from "./controller";

const songRouter: Router = Router();

songRouter.post("/", crear);
songRouter.get("/", findAll);
//songRouter.get("/privadas", song_private);
songRouter.get("/:id", findById);

export default songRouter;