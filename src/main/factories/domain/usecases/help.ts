import { ListHelp, setupListHelp } from '@/domain/usecases/help'
import { makeHelpRepo } from '@/main/factories/infra/repos'

export const makeGetHelp = (): ListHelp => {
  return setupListHelp(
    makeHelpRepo()
  )
}
