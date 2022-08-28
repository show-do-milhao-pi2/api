import { Request, Response } from "express";

export interface IGetByNicknameUserController {
    handle(req, res): Promise<Response>;
}