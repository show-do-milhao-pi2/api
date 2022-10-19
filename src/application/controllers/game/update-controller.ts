import { ValidationBuilder as builder, Validator } from '@/application/validation'
import { HttpResponse, ok, badRequest } from '@/application/helpers'
import { Controller } from '@/application/controllers'
import { UpdateGame } from '@/domain/usecases/game'
import { UpdateGame as Save, Game as IGame } from '@/domain/contracts/repos'

import { Question } from '@/infra/repos/postgres/entities'

type HttpRequest = Save.Input & { passwordConfirmation?: string }

type Model = Error | IGame
export class UpdateGameController extends Controller {
  constructor (private readonly updateGame: UpdateGame) {
    super()
  }

  async perform ({ passwordConfirmation, ...data }: HttpRequest): Promise<HttpResponse<Model>> {
    try {
      const game = await this.updateGame(data)
      return ok(game)
    } catch (error: any) {
      return badRequest(error)
    }
  }

  override async buildValidators ({ user, question }: HttpRequest): Promise<Validator[]> {
    return [
      ...(await builder.of({ value: user, fieldName: 'user' }).sometimes().exists(Question)).build(),
      ...(await builder.of({ value: question, fieldName: 'question' }).sometimes().exists(Question)).build()

    ]
  }
}
