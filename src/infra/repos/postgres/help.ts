import { Help } from '@/infra/repos/postgres/entities'
import { ListHelp } from '@/domain/contracts/repos'

import { PgRepository } from '@/infra/repos/postgres/repository'

type GetOutput = ListHelp.Output

export class HelpRepository extends PgRepository implements ListHelp {
  async get (): Promise<GetOutput> {
    return await this.getRepository(Help).find({ order: { id: 'ASC' } })
  }
}
