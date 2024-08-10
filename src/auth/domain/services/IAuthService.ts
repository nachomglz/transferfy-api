import { User } from "@prisma/client";

export interface IAuthService {
  findOrCreateUserBySubId: (subId: string) => Promise<User>;
}
