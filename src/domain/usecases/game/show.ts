import { ContentNotFound } from '@/application/errors'
import { ShowGame, Game } from '@/domain/contracts/repos'

type Setup = (repo: ShowGame) => ListGame
type Input = { id: string }
type Output = Game

export type ListGame = (input: Input) => Promise<Output>

export const setupShowGame: Setup = (repo) => async input => {
  const games = await repo.show(input)
  if (games !== undefined) return games
  throw new ContentNotFound('games')
}
