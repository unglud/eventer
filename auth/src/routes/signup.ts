import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";

const router = express.Router();

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("Email should be valid"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 12 })
      .withMessage("Password must be between 4 and 12 characters."),
  ],
  (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw new Error("Invalid email or password");
    }
    const { email, password } = req.body;

    console.log(`Creating a User`, { email, password });
    throw new Error("Error connecting to DB");

    res.send({});
  }
);

export { router as signUpRouter };
