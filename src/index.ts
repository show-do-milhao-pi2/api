import "reflect-metadata";
import { app } from "./app";
import { createServer } from "http";

const Application = createServer(app);

Application.listen(process.env.PORT || 3333, () => {
  console.log(`Server Listening port ${process.env.PORT || 3333}`);
});

export { Application };
