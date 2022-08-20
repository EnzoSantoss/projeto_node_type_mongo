require("dotenv").config();
import express from "express";
import config from "config";
import router from "./router";

const app = express();

const port = config.get<number>("port");

//READING JSON

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Importin db
import db from "../config/db";

app.use("/api", router);

app.listen(3000, async () => {
  await db();
  console.log("aplication is running on port: " + port);
});
