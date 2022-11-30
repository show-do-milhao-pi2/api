import { ContentNotFound } from '@/application/errors'
import { InsertGame as Save, Game, LoadQuestions, Question } from '@/domain/contracts/repos'

type Setup = (repo: Save, loadQuestions: LoadQuestions) => InsertGame
type Input = Save.Input
type Output = Game

export type InsertGame = (input: Input) => Promise<Output>

export const setupInsertGame: Setup = (repo, loadQuestions) => async input => {
  const games = await repo.insert(input)
  if (games !== undefined) return games
  throw new ContentNotFound('games')
}
