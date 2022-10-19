import { InsertGameController } from '@/application/controllers/game'
import { makeInsertGame } from '@/main/factories/domain/usecases/game'

import { makeLogController } from '@/main/factories/application/decorators'
import { Controller } from '@/application/controllers'

export const makeInsertGameController = (): Controller => {
  const controller = new InsertGameController(makeInsertGame())
  return makeLogController(controller)
}
