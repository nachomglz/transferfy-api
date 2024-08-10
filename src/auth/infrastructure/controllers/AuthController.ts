import express from "express";
import { AuthService } from "../../domain/services/AuthService";

export class AuthController {
  private authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  /**
   * This method returns wether a token is or not authorized
   *
   */
  authorize = (req: express.Request, res: express.Response) => {
    if (req.auth) {
      req.log.info({ message: "Authorized request", auth: req.auth });
      return res.send("Authorized");
    }
    return res.status(401).send("Unaurhorized request");
  };
}
