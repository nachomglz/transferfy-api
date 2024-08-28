import express from 'express'
import { AuthService } from '../../domain/services/AuthService'
import { AuthController } from '../controllers/AuthController'
import { createAuthValidationMiddleware } from '../middlewares/AuthorizeRequest'
import prisma from '../../../prisma/prismaClient'

const authService = new AuthService(prisma)
const authController = new AuthController(authService)
const authValidation = createAuthValidationMiddleware(authService)

const AuthRouter = express.Router()

AuthRouter.get('/authorize', authValidation, authController.authorize)

export { AuthRouter }
