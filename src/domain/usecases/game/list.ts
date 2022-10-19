import { LoadGames } from '@/domain/contracts/repos'

type Setup = (repo: LoadGames) => ListGames
type Output = LoadGames.Output

export type ListGames = () => Promise<Output>

export const setupListGames: Setup = (repo) => async () => {
  return await repo.get()
}
