import express, { type Application } from "express";
import cors from "cors";
import router from "./router/router";

const app: Application = express();

app.use(express.json());
app.use(cors())
router(app);

export default app;