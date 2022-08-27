import { Router, Request, Response } from "express";
import MovieController from "./controllers/movieController";

// validations
import { validate } from "./middleware/handleValidation";
import { movieCreatValidation } from "./middleware/movieValidation";

const router = Router();

export default router
  .get("/teste", (req: Request, res: Response) => {
    res.status(200).send("teste route is working");
  })
  .post("/movie", movieCreatValidation(), validate, MovieController.createMovie)
  .get("/movie/allMovies", MovieController.findAllMovie)
  .get("/movie/:id", MovieController.findMovieById)
  .delete("/movie/:id", MovieController.deleteMovie)
  .patch(
    "/movie/:id",
    movieCreatValidation(),
    validate,
    MovieController.updateMovie
  );
