import { DeleteGame as Delete } from '@/domain/contracts/repos'

type Setup = (repo: Delete) => DeleteGame
type Input = { id: string }

export type DeleteGame = (input: Input) => Promise<void>

export const setupDeleteGame: Setup = (repo) => async input => {
  await repo.delete(input)
}
