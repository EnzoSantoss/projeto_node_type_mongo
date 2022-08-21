require("dotenv").config();
import express from "express";
import config from "config";
import router from "./router";

const app = express();

const port = config.get<number>("port");

//READING JSON

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Importing db
import db from "../config/db";

//Logger
import Logger from "../config/logger";

//Middlewares
import morganMiddleware from "./middleware/morganMiddleware";

app.use(morganMiddleware);
app.use("/api", router);

app.listen(3000, async () => {
  await db();
  Logger.info("aplication is running on port: " + port);
});
