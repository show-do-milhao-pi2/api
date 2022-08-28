import { Request, Response } from "express";
import { param, validationResult } from "express-validator";
import { Fail } from "../../../entities/Error";

import { DeleteService } from "../../../services/userServices/delete/DeleteService";
import { IDeleteUserController } from "./IDeleteUserController";

class DeleteUserController implements IDeleteUserController {
  async handle(req: Request, res: Response) {
    param("id").isUUID();

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: false,
        errors: errors.array(),
      });
    }

    const { id } = req.params;
    const deleteUserService = new DeleteService();

    const response = await deleteUserService.execute(id);

    if (!response) throw new Fail(404, `Couldn't find an User with id '${id}'`);

    return res.status(200).json({
      status: true,
      data: response,
    });
  }
}

export { DeleteUserController };
