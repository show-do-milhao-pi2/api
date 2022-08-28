import { Request, Response } from "express";

export interface ISignInUserController {
  handle(req: Request, res: Response): Promise<Response>;
}
