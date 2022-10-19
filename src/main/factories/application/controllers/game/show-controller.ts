import { ShowGameController } from '@/application/controllers/game'
import { makeShowGame } from '@/main/factories/domain/usecases/game'

import { makeLogController } from '@/main/factories/application/decorators'
import { Controller } from '@/application/controllers'

export const makeShowGameController = (): Controller => {
  const controller = new ShowGameController(makeShowGame())
  return makeLogController(controller)
}
