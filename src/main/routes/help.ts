import { Router } from 'express'
import { adaptExpressRoute as adapt } from '@/main/adapters'
import { auth } from '@/main/middlewares'
import { makeGetHelpController } from '@/main/factories/application/controllers/help'

export default (router: Router): void => {
  router.get('/helps', auth, adapt(makeGetHelpController()))
}
