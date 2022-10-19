import { ListFinished, setupListFinished } from '@/domain/usecases/finished'
import { makeFinishedRepo } from '@/main/factories/infra/repos'

export const makeGetFinished = (): ListFinished => {
  return setupListFinished(
    makeFinishedRepo()
  )
}
