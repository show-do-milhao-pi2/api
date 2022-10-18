import { GetGameController } from '@/application/controllers/game'
import { makeGetGame } from '@/main/factories/domain/usecases/game'

import { makeLogController } from '@/main/factories/application/decorators'
import { Controller } from '@/application/controllers'

export const makeGetGameController = (): Controller => {
  const controller = new GetGameController(makeGetGame())
  return makeLogController(controller)
}
