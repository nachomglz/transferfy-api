import express from "express";
import { SpotifyAuthService } from "../../domain/services/SpotifyAuthService";
import config from "../../../config/config";
import queryString from "querystring";

export class SpotifyAuthController {
  private spotifyAuthService: SpotifyAuthService;

  constructor(spotifyAuthService: SpotifyAuthService) {
    this.spotifyAuthService = spotifyAuthService;
  }

  login = (req: express.Request, res: express.Response) => {
    const scope = "user-read-private user-read-email";
    const requestUrl = `${config.spotify.apiUrl}/authorize?${queryString.stringify(
      {
        response_type: "code",
        client_id: config.spotify.clientId,
        scope: scope,
        redirect_uri: config.spotify.redirectUri,
      },
    )}`;

    res.redirect(requestUrl);
  };

  redirect = (req: express.Request, res: express.Response) => {
    const data = req.query;
    req.log.info({ message: `data: ${JSON.stringify(data)}` });
    res.redirect("/");
  };
}
