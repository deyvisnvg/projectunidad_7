import userRouter from "../components/user";
import songRouter from "../components/songs";

export default (app: any) => {
    app.use("/api/v1/users", userRouter);
    app.use("/api/v1/songs", songRouter);
}