import { Router } from 'express'
import { adaptExpressRoute as adapt } from '@/main/adapters'
import { auth } from '@/main/middlewares'
import {
  makeUpdateGameController,
  makeDeleteGameController,
  makeGetGameController,
  makeShowGameController,
  makeInsertGameController
} from '@/main/factories/application/controllers/game'

export default (router: Router): void => {
  router.get('/games', auth, adapt(makeGetGameController()))
  router.get('/games/:id', auth, adapt(makeShowGameController()))
  router.post('/games', auth, adapt(makeInsertGameController()))
  router.put('/games/:id', auth, adapt(makeUpdateGameController()))
  router.delete('/games/:id', auth, adapt(makeDeleteGameController()))
}
