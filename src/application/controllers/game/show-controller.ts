import { ValidationBuilder as builder, Validator } from '@/application/validation'
import { HttpResponse, ok, contentNotFound } from '@/application/helpers'
import { Controller } from '@/application/controllers'
import { ListGame } from '@/domain/usecases/game'
import { Game } from '@/domain/contracts/repos'

type HttpRequest = { id: string }

type Model = Error | Game
export class ShowGameController extends Controller {
  constructor (private readonly showGame: ListGame) {
    super()
  }

  async perform ({ id }: HttpRequest): Promise<HttpResponse<Model>> {
    try {
      const game = await this.showGame({ id })
      return ok(game)
    } catch {
      return contentNotFound('game')
    }
  }

  override async buildValidators ({ id }: HttpRequest): Promise<Validator[]> {
    return [
      ...builder.of({ value: id, fieldName: 'id' }).required().build()
    ]
  }
}
