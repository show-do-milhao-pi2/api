import { Finished } from '@/infra/repos/postgres/entities'
import { ListFinished } from '@/domain/contracts/repos'

import { PgRepository } from '@/infra/repos/postgres/repository'

type GetOutput = ListFinished.Output

export class FinishedRepository extends PgRepository implements ListFinished {
  async get (): Promise<GetOutput> {
    return await this.getRepository(Finished).find({ order: { id: 'ASC' } })
  }
}
