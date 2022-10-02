import { GetAwardsController } from '@/application/controllers/awards'
import { makeGetAwards } from '@/main/factories/domain/usecases/awards'

import { makeLogController } from '@/main/factories/application/decorators'
import { Controller } from '@/application/controllers'

export const makeGetAwardsController = (): Controller => {
  const controller = new GetAwardsController(makeGetAwards())
  return makeLogController(controller)
}
