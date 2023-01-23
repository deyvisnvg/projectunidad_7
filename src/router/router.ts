import { type Application } from "express";
import userRouter from "../components/user";
import songRouter from "../components/songs";
import playlistRouter from "../components/playlist";

export default (app: Application) => {
    app.use("/api/v1/users", userRouter);
    app.use("/api/v1/songs", songRouter);
    app.use("/api/v1/playlist", playlistRouter);
    
}