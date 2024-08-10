import { AuthService } from './AuthService'
import { PrismaClient } from '@prisma/client'

const prismaClientMock = {
   user: {
      findUnique: jest.fn(),
      create: jest.fn(),
   },
}

describe('AuthService', () => {
   let authService: AuthService

   beforeEach(() => {
      authService = new AuthService(prismaClientMock as unknown as PrismaClient)
   })

   describe('findOrCreateUserBySubId', () => {
      const mockUser = { id: 1, subId: '000|0000' }

      it('returns the user if it already exists', async () => {
         prismaClientMock.user.findUnique.mockResolvedValue(mockUser)

         await authService.findOrCreateUserBySubId(mockUser.subId)

         expect(prismaClientMock.user.create).not.toHaveBeenCalled()
      })

      it("creates and returns the user if it doesn't exist", async () => {
         prismaClientMock.user.findUnique.mockResolvedValue(null)
         prismaClientMock.user.create.mockResolvedValue(mockUser)

         const user = await authService.findOrCreateUserBySubId(mockUser.subId)

         expect(prismaClientMock.user.create).toHaveBeenCalled()
         expect(user).toBe(mockUser)
      })
   })
})
