import { ContentNotFound } from '@/application/errors'
import { InsertGame as Save, Game } from '@/domain/contracts/repos'

type Setup = (repo: Save) => InsertGame
type Input = Save.Input
type Output = Game

export type InsertGame = (input: Input) => Promise<Output>

export const setupInsertGame: Setup = (repo) => async input => {
  const games = await repo.insert(input)
  if (games !== undefined) return games
  throw new ContentNotFound('games')
}
