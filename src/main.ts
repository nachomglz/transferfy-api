import express from "express";
import pino from "pino-http";
import dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const app = express();

app.use(pino());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Health route
app.get("/health", (_req, res) => res.status(200).send());

app.listen(3000, function () {
  console.log("Server running on port 3000");
});
