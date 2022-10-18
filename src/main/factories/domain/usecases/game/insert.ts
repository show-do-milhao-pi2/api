import { InsertGame, setupInsertGame } from '@/domain/usecases/game'
import { makeGameRepo } from '@/main/factories/infra/repos'

export const makeInsertGame = (): InsertGame => {
  return setupInsertGame(
    makeGameRepo()
  )
}
