import { ListGame, setupShowGame } from '@/domain/usecases/game'
import { makeGameRepo } from '@/main/factories/infra/repos'

export const makeShowGame = (): ListGame => {
  return setupShowGame(
    makeGameRepo()
  )
}
