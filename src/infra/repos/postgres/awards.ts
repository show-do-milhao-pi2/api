import { Awards } from '@/infra/repos/postgres/entities'
import { ListAwards } from '@/domain/contracts/repos'

import { PgRepository } from '@/infra/repos/postgres/repository'

type GetOutput = ListAwards.Output

export class AwardsRepository extends PgRepository implements ListAwards {
  async get (): Promise<GetOutput> {
    return await this.getRepository(Awards).find({ order: { id: 'ASC' } })
  }
}
