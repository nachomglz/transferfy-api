import dotenv from "dotenv";

dotenv.config();

interface SpotifyConfig {
  clientId: string;
  clientSecret: string;
  redirectUri: string;
  apiUrl: string;
}

const spotifyConfig: SpotifyConfig = {
  clientId: process.env.SPOTIFY_CLIENT_ID!,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET!,
  redirectUri: process.env.SPOTIFY_REDIRECT_URI!,
  apiUrl: process.env.SPOTIFY_API_URL!,
};

export default {
  spotify: spotifyConfig,
};
