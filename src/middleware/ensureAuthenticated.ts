import { Request, Response, NextFunction, request } from "express";
import { verify } from "jsonwebtoken";

interface IPayLoad {
  sub: string;
}

export function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).end();
  }

  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(token, process.env.SECRET) as IPayLoad;

    req.body.userId = sub;

    return next();
  } catch (error) {
    return res.status(401).end();
  }
}
