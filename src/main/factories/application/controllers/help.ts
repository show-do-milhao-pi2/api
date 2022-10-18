import { GetHelpController } from '@/application/controllers/help'
import { makeGetHelp } from '@/main/factories/domain/usecases/help'

import { makeLogController } from '@/main/factories/application/decorators'
import { Controller } from '@/application/controllers'

export const makeGetHelpController = (): Controller => {
  const controller = new GetHelpController(makeGetHelp())
  return makeLogController(controller)
}
