import express from "express";
import { SpotifyAuthService } from "../../domain/services/SpotifyAuthService";
import { SpotifyAuthController } from "../controllers/SpotifyAuthController";

const spotifyAuthService = new SpotifyAuthService();
const spotifyAuthController = new SpotifyAuthController(spotifyAuthService);

const SpotifyAuthRouter = express.Router();

SpotifyAuthRouter.get("/login", spotifyAuthController.login);
SpotifyAuthRouter.get("/redirect", spotifyAuthController.redirect);

export { SpotifyAuthRouter };
