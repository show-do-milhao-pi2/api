import { UpdateGameController } from '@/application/controllers/game'
import { makeUpdateGame } from '@/main/factories/domain/usecases/game'

import { makeLogController } from '@/main/factories/application/decorators'
import { Controller } from '@/application/controllers'

export const makeUpdateGameController = (): Controller => {
  const controller = new UpdateGameController(makeUpdateGame())
  return makeLogController(controller)
}
