import { DeleteGame, setupDeleteGame } from '@/domain/usecases/game'
import { makeGameRepo } from '@/main/factories/infra/repos'

export const makeDeleteGame = (): DeleteGame => {
  return setupDeleteGame(
    makeGameRepo()
  )
}
