import { Router } from "express";
import {findId, createPlaylist, addSongToPlaylist } from "./controller";


const playlistRouter: Router = Router();

playlistRouter.post("/", createPlaylist);
playlistRouter.get("/:id", findId);
playlistRouter.post("/addSong", addSongToPlaylist);



export default playlistRouter;