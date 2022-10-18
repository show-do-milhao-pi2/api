import { DeleteGameController } from '@/application/controllers/game'
import { makeDeleteGame } from '@/main/factories/domain/usecases/game'

import { makeLogController } from '@/main/factories/application/decorators'
import { Controller } from '@/application/controllers'

export const makeDeleteGameController = (): Controller => {
  const controller = new DeleteGameController(makeDeleteGame())
  return makeLogController(controller)
}
