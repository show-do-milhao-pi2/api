import { Request, Response } from "express";
import { validationResult } from "express-validator";

import { ResetPassword } from "../../../services/userServices/resetPassword/ResetPassword";
import { IResetPasswordController } from "./IResetPasswordController";

export class ResetPasswordController implements IResetPasswordController {
  async handle(req: Request, res: Response) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: false,
        errors: errors.array(),
      });
    }

    const { email, confirmationCode, newPassword } = req.body;
    const confirmAccountService = new ResetPassword();

    await confirmAccountService.execute(email, confirmationCode, newPassword);

    return res.status(200).json({
      status: true,
      data: "password reseated",
    });
  }
}
