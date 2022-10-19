import { UpdateGame, setupUpdateGame } from '@/domain/usecases/game'
import { makeGameRepo } from '@/main/factories/infra/repos'

export const makeUpdateGame = (): UpdateGame => {
  return setupUpdateGame(
    makeGameRepo()
  )
}
