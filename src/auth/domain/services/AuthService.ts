import { PrismaClient } from '@prisma/client'
import { IAuthService } from './IAuthService'

export class AuthService implements IAuthService {
   constructor(private prisma: PrismaClient) {}

   findOrCreateUserBySubId = async (subId: string) => {
      let user
      user = await this.prisma.user.findUnique({
         where: { subId },
         include: {
            SpotifyAuth: true,
         },
      })

      if (!user) {
         user = await this.prisma.user.create({ data: { subId } })
      }

      return user
   }
}
