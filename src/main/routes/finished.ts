import { Router } from 'express'
import { adaptExpressRoute as adapt } from '@/main/adapters'
import { auth } from '@/main/middlewares'
import { makeGetFinishedController } from '@/main/factories/application/controllers/finished'

export default (router: Router): void => {
  router.get('/finished', auth, adapt(makeGetFinishedController()))
}
