import express from 'express'
import { AuthService } from '../../domain/services/AuthService'
import { AuthController } from './AuthController'

let mockedExpressReq: express.Request
let mockedExpressRes: express.Response

describe('AuthController', () => {
   let authController: AuthController
   let mockAuthService: jest.Mocked<AuthService>

   describe('authorize', () => {
      beforeEach(() => {
         mockAuthService = {} as jest.Mocked<AuthService>
         authController = new AuthController(mockAuthService)

         mockedExpressReq = {
            log: {
               info: jest.fn(),
            },
         } as unknown as express.Request
         mockedExpressRes = {
            send: jest.fn(),
            status: jest.fn(),
         } as unknown as express.Response
      })

      it('returns "Authorized" when req.auth is present', () => {
         mockedExpressReq.auth = { token: '', header: {}, payload: {} }

         authController.authorize(mockedExpressReq, mockedExpressRes)

         expect(mockedExpressRes.send).toHaveBeenCalledWith('Authorized')
      })
      it('returns "Authorized" when req.auth is present', () => {
         mockedExpressReq.auth = { token: '', header: {}, payload: {} }

         authController.authorize(mockedExpressReq, mockedExpressRes)

         expect(mockedExpressRes.send).toHaveBeenCalledWith('Authorized')
      })
   })
})
