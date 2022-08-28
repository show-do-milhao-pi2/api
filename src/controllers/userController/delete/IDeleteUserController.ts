import { Request, Response } from "express";

export interface IDeleteUserController {
    handle(req, res): Promise<Response>;
}