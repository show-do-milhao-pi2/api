import { FinishedRepository } from '@/infra/repos/postgres/finished'

export const makeFinishedRepo = (): FinishedRepository => {
  return new FinishedRepository()
}
