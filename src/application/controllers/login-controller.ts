import { ValidationBuilder as builder, Validator } from '@/application/validation'
import { HttpResponse, unauthorized, ok } from '@/application/helpers'
import { Controller } from '@/application/controllers'
import { AuthenticateUser } from '@/domain/usecases'

type HttpRequest = { nickname: string, password: string}

type Model = Error | { accessToken: string }
export class LoginController extends Controller {
  constructor (private readonly authenticateUser: AuthenticateUser) {
    super()
  }

  async perform ({ nickname, password }: HttpRequest): Promise<HttpResponse<Model>> {
    try {
      const accessToken = await this.authenticateUser({ nickname, password })
      return ok(accessToken)
    } catch {
      return unauthorized()
    }
  }

  override async buildValidators ({ nickname, password }: HttpRequest): Promise<Validator[]> {
    return [
      ...builder.of({ value: nickname, fieldName: 'nickname' }).required().build(),
      ...builder.of({ value: password, fieldName: 'password' }).required().build()
    ]
  }
}
