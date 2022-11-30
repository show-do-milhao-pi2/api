import { ValidationBuilder as builder, Validator } from '@/application/validation'
import { HttpResponse, badRequest, created } from '@/application/helpers'
import { Controller } from '@/application/controllers'
import { InsertGame } from '@/domain/usecases/game'

import { InsertGame as Save, Game as IGame } from '@/domain/contracts/repos'

type HttpRequest = Save.Input

type Model = Error | IGame
export class InsertGameController extends Controller {
  constructor (private readonly insertGame: InsertGame) {
    super()
  }

  async perform (httpRequest: Save.Input): Promise<HttpResponse<Model>> {
    try {
      const game = await this.insertGame(httpRequest)
      return created(game)
    } catch (error: any) {
      return badRequest(new Error(error.message))
    }
  }

  override async buildValidators ({ user }: HttpRequest): Promise<Validator[]> {
    return [
      ...builder.of({ value: user, fieldName: 'user' }).required().build()
    ]
  }
}
