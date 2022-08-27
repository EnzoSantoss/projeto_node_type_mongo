import { body } from "express-validator";

export const movieCreatValidation = () => {
  return [
    body("title").isString().withMessage("O titulo é obrigatorio"),
    body("rating")
      .isNumeric()
      .withMessage("A nota precisa ser um numero ")
      .custom((value: number) => {
        if (value < 0 || value > 10) {
          throw new Error("A nota precisa estar entre 0 e 10!");
        }
        return true;
      }),
    body("description")
      .isString()
      .withMessage("Descrição é obrigatoria")
      .isLength({ min: 10 })
      .withMessage("Descrição precisa ter no minimo 10 caracteres!"),
  ];
};
