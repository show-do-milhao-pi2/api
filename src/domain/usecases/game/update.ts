import { ContentNotFound } from '@/application/errors'
import { UpdateGame as Save, Game } from '@/domain/contracts/repos'

type Setup = (repo: Save) => UpdateGame
type Input = Save.Input
type Output = Game

export type UpdateGame = (input: Input) => Promise<Output>

export const setupUpdateGame: Setup = (repo) => async input => {
  const games = await repo.update(input)
  if (games !== undefined) return games
  throw new ContentNotFound('games')
}
