import express, { type Application } from "express";

const app: Application = express();

app.use(express.json());


export default  app;