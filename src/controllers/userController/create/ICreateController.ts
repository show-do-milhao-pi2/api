import { Request, Response } from "express";

export interface ICreateController {
  handle(req: Request, res: Response): Promise<Response>;
}
