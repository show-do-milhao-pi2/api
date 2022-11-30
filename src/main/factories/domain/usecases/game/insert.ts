import { InsertGame, setupInsertGame } from '@/domain/usecases/game'
import { makeGameRepo, makeQuestionRepo } from '@/main/factories/infra/repos'

export const makeInsertGame = (): InsertGame => {
  return setupInsertGame(
    makeGameRepo(),
    makeQuestionRepo()
  )
}
