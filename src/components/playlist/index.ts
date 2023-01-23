import { Router } from "express";
import {findId, createPlaylist, addSongToPlaylist } from "./controller";
import { checkOwn } from "../../lib/jwt";

const playlistRouter: Router = Router();

playlistRouter.post("/", checkOwn, createPlaylist);
playlistRouter.get("/:id", checkOwn, findId);
playlistRouter.post("/addSong", checkOwn, addSongToPlaylist);

export default playlistRouter;