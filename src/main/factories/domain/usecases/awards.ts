import { ListAwards, setupListAwards } from '@/domain/usecases/awards'
import { makeAwardsRepo } from '@/main/factories/infra/repos'

export const makeGetAwards = (): ListAwards => {
  return setupListAwards(
    makeAwardsRepo()
  )
}
