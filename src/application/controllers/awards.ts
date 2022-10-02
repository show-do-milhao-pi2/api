import { HttpResponse, ok, badRequest } from '@/application/helpers'
import { Controller } from '@/application/controllers'
import { ListAwards } from '@/domain/usecases/awards'
import { Awards } from '@/domain/contracts/repos'

type Model = Error | Awards[]
export class GetAwardsController extends Controller {
  constructor (private readonly listAwards: ListAwards) {
    super()
  }

  async perform (): Promise<HttpResponse<Model>> {
    try {
      const award = await this.listAwards()
      return ok(award)
    } catch (error: any) {
      return badRequest(error)
    }
  }
}
