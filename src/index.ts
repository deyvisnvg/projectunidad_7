import app from "./app";
import env from "./config/env";

const PORT = env.PORT;

app.listen(PORT, () => console.log(`Listening on port at http://localhost:${PORT}`));
