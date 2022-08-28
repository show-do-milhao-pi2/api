import { Request, Response } from "express";

import { SignInUserService } from "../../../services/userServices/signIn/SignInUserService";
import { ISignInUserController } from "./ISignInUserController";
import { BcryptHandler } from "../../../utils/encrypter/encrypter";
import { JwtTokenHandler } from "../../../utils/token/jwt-token-handler";

class SignInUserController implements ISignInUserController {
  async handle(req: Request, res: Response) {
    const { nickname, password } = req.body;
    const encrypter = new BcryptHandler(8)
    const tokenGenerator = new JwtTokenHandler(process.env.SECRET)
    const signInUserService = new SignInUserService();
    const token = await signInUserService.execute({ nickname, password, encrypter, tokenGenerator });

    return res.status(200).json({
      code: 200,
      data: token,
    });
  }
}

export { SignInUserController };
