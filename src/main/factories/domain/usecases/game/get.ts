import { ListGames, setupListGames } from '@/domain/usecases/game'
import { makeGameRepo } from '@/main/factories/infra/repos'

export const makeGetGame = (): ListGames => {
  return setupListGames(
    makeGameRepo()
  )
}
