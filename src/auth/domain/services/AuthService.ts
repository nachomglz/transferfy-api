import { PrismaClient } from "@prisma/client";
import { IAuthService } from "./IAuthService";
import { User } from "@prisma/client";

export class AuthService implements IAuthService {
  constructor(private prisma: PrismaClient) {}

  findOrCreateUserBySubId = async (subId: string) => {
    let user;
    user = await this.prisma.user.findUnique({ where: { subId } });

    if (!user) {
      user = await this.prisma.user.create({ data: { subId } });
    }

    return user;
  };
}
