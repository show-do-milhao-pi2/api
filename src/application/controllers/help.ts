import { HttpResponse, ok, badRequest } from '@/application/helpers'
import { Controller } from '@/application/controllers'
import { ListHelp } from '@/domain/usecases/help'
import { Help } from '@/domain/contracts/repos'

type Model = Error | Help[]
export class GetHelpController extends Controller {
  constructor (private readonly listHelp: ListHelp) {
    super()
  }

  async perform (): Promise<HttpResponse<Model>> {
    try {
      const helps = await this.listHelp()
      return ok(helps)
    } catch (error: any) {
      return badRequest(error)
    }
  }
}
