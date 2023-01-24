import { type Application, Router } from "express";
import * as controller from "../components";

const listRouter: [string, Router][] = [
    ["users", controller.UserRouter],
    ["songs", controller.SongRouter],
    ["playlist", controller.PlaylistRouter]
];

const routes = (app: Application) => {
    listRouter.forEach(([path, controller]) => {
        app.use(`/api/v1/${path}`, controller)
    });
}

export default routes;