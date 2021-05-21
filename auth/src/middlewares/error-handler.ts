import { NextFunction, Request, Response } from "express";

export const errorHandler = (
  { message }: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(`Something went wrong`, message);
  res.status(400).send({ message });
};
