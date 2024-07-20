import { ISpotifyAuthService } from "./ISpotifyAuthService";

export class SpotifyAuthService implements ISpotifyAuthService {
  getGreeting(name: string): string {
    return `Hi there, ${name}!`;
  }
}
