import express, { type Application } from "express";
import cors from "cors";
import routes from "./router/router";

const app: Application = express();

app.use(express.json());
app.use(cors())
routes(app);

export default app;