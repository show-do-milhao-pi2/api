import { Router } from 'express'
import { adaptExpressRoute as adapt } from '@/main/adapters'
import { auth } from '@/main/middlewares'
import { makeGetAwardsController } from '@/main/factories/application/controllers/awards'

export default (router: Router): void => {
  router.get('/awards', auth, adapt(makeGetAwardsController()))
}
