import express from "express";
import { auth } from "express-oauth2-jwt-bearer";
import { AuthService } from "../../domain/services/AuthService";

const jwtAudience = process.env.AUTH0_AUDIENCE ?? "";
const jwtIssuerBaseUrl = process.env.AUTH0_DOMAIN ?? "";

const jwtCheck: express.Handler = auth({
  audience: jwtAudience,
  issuerBaseURL: jwtIssuerBaseUrl,
  tokenSigningAlg: "RS256",
});

export const createAuthValidationMiddleware = (authService: AuthService) => {
  return async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) => {
    jwtCheck(req, res, async (err) => {
      if (err || !req.auth) {
        req.log.error({ message: "Unauthorized call", err });
        return res.status(401).send("Unauthorized");
      }

      const user = await authService.findOrCreateUserBySubId(
        req.auth.payload.sub as string,
      );

      console.log("the sub is: ", req.auth.payload.sub);
      console.log("the user is: ", user);

      return res.send("OKOKOK");

      next();
    });
  };
};
