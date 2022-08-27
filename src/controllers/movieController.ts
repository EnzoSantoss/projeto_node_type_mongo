import { Request, Response } from "express";

//Model

import { MovieModel } from "../models/Movie";

//Logger

import Logger from "../../config/logger";
import { moveCursor } from "readline";

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

  static async findMovieById(req: Request, res: Response) {
    try {
      const id = req.params.id;

      const movie = await MovieModel.findById(id);

      if (movie) {
        res.status(200).json({ movie });
      } else {
        res.status(404).json({ message: "O filme não pode ser encontrado" });
      }
    } catch (e: any) {
      Logger.error(`Erro no sistema: ${e.message}`);
    }
  }

  static async findAllMovie(req: Request, res: Response) {
    try {
      const movie = await MovieModel.find();

      console.log(movie);

      res.status(200).json({ movie });
    } catch (e: any) {
      Logger.error(`Erro no sistema: ${e.message}`);
    }
  }

  static async deleteMovie(req: Request, res: Response) {
    try {
      const id = req.params.id;

      const movie = await MovieModel.deleteOne({ _id: id });

      res.status(200).json({ message: "Objeto excluido do sistema" });
    } catch (e: any) {
      Logger.error(`Erro no sistema: ${e.message}`);
    }
  }

  static async updateMovie(req: Request, res: Response) {
    try {
      const id = req.params.id;

      const data = req.body;

      const movie = await MovieModel.findById(id);

      if (!movie) {
        res.status(404).json({ message: "Filme não existe" });
      }

      await MovieModel.updateOne({ _id: id }, data);

      res.status(200).json(data);
    } catch (e: any) {
      Logger.error(`Erro no sistema: ${e.message}`);
    }
  }
}
