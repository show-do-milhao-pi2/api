import { GameRepository } from '@/infra/repos/postgres/game'

export const makeGameRepo = (): GameRepository => {
  return new GameRepository()
}
