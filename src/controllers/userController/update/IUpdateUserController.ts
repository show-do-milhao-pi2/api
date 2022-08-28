import { Request, Response } from "express";

export interface IUpdateUserController {
    handle(req, res): Promise<Response>;
}