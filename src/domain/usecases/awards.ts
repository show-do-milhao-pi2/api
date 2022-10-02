import { ListAwards as List } from '@/domain/contracts/repos/awards'

type Setup = (repo: List) => ListAwards
type Output = List.Output

export type ListAwards = () => Promise<Output>

export const setupListAwards: Setup = (repo) => async () => {
  return await repo.get()
}
