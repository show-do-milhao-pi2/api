import { AwardsRepository } from '@/infra/repos/postgres/awards'

export const makeAwardsRepo = (): AwardsRepository => {
  return new AwardsRepository()
}
