import { Router, Request, Response } from "express";
import MovieController from "./controllers/movieController";

const router = Router();

export default router
  .get("/teste", (req: Request, res: Response) => {
    res.status(200).send("teste route is working");
  })
  .post("/movie", MovieController.createMovie);
