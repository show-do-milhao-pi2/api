import { GetFinishedController } from '@/application/controllers/finished'
import { makeGetFinished } from '@/main/factories/domain/usecases/finished'

import { makeLogController } from '@/main/factories/application/decorators'
import { Controller } from '@/application/controllers'

export const makeGetFinishedController = (): Controller => {
  const controller = new GetFinishedController(makeGetFinished())
  return makeLogController(controller)
}
