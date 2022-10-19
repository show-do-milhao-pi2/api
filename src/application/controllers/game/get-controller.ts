import { HttpResponse, ok, badRequest } from '@/application/helpers'
import { Controller } from '@/application/controllers'
import { ListGames } from '@/domain/usecases/game'
import { Game } from '@/domain/contracts/repos'

type Model = Error | Game[]
export class GetGameController extends Controller {
  constructor (private readonly listGames: ListGames) {
    super()
  }

  async perform (): Promise<HttpResponse<Model>> {
    try {
      const games = await this.listGames()
      return ok(games)
    } catch (error: any) {
      return badRequest(error)
    }
  }
}
