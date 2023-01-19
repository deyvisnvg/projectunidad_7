import express, { type Application } from "express";
import router from "./router/router";

const app: Application = express();

app.use(express.json());
router(app)


export default app;