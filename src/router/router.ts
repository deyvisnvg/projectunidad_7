import userRouter from "../components/user";

export default (app: any) => {
    app.use("/api/v1/users", userRouter);
}