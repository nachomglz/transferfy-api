import express from 'express'
import { auth } from 'express-oauth2-jwt-bearer'
import { AuthService } from '../../domain/services/AuthService'
import { User } from '@prisma/client'

const jwtAudience = process.env.AUTH0_AUDIENCE ?? ''
const jwtIssuerBaseUrl = process.env.AUTH0_DOMAIN ?? ''

export type AuthenticatedRequest = express.Request & {
   user?: User
}

const jwtCheck: express.Handler = auth({
   audience: jwtAudience,
   issuerBaseURL: jwtIssuerBaseUrl,
   tokenSigningAlg: 'RS256',
})

export const createAuthValidationMiddleware = (authService: AuthService) => {
   return async (
      req: AuthenticatedRequest,
      res: express.Response,
      next: express.NextFunction
   ) => {
      jwtCheck(req, res, async (err) => {
         if (err || !req.auth) {
            req.log.error({ message: 'Unauthorized call', err })
            return res.status(401).json({ message: 'Unauthorized' })
         }

         const user = await authService.findOrCreateUserBySubId(
            req.auth.payload.sub as string
         )

         req.user = user

         next()
      })
   }
}
