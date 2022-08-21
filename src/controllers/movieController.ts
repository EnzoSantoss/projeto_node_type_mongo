import { Request, Response } from "express";

//Model

import { MovieModel } from "../models/Movie";

//Logger

import Logger from "../../config/logger";

export default class MovieController {
  static async createMovie(req: Request, res: Response) {
    try {
      const data = req.body;
      const movie = await MovieModel.create(data);
      res.status(201).json(movie);
    } catch (e: any) {
      Logger.error(`Erro no sistema: ${e.message}`);
    }
  }
}
