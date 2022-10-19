import { HttpResponse, ok, badRequest } from '@/application/helpers'
import { Controller } from '@/application/controllers'
import { ListFinished } from '@/domain/usecases/finished'
import { Finished } from '@/domain/contracts/repos'

type Model = Error | Finished[]
export class GetFinishedController extends Controller {
  constructor (private readonly listFinished: ListFinished) {
    super()
  }

  async perform (): Promise<HttpResponse<Model>> {
    try {
      const finished = await this.listFinished()
      return ok(finished)
    } catch (error: any) {
      return badRequest(error)
    }
  }
}
