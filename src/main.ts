import express from "express";
import pino from "pino-http";
import config from "./config/config";
import { SpotifyAuthRouter } from "./spotify/infrastructure/http/SpotifyAuthRouter";

const app = express();

// Logger
app.use(pino());

// Request parsers
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Health route
app.get("/health", (_req, res) => res.status(200).send());
app.get("/", (_req, res) => res.send("login worked"));

// spotify auth router
app.use("/spotify/auth", SpotifyAuthRouter);

app.listen(3000, function () {
  console.log("Server running on port 3000");
});
