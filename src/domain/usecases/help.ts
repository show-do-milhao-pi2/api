import { ListHelp as List } from '@/domain/contracts/repos/help'

type Setup = (repo: List) => ListHelp
type Output = List.Output

export type ListHelp = () => Promise<Output>

export const setupListHelp: Setup = (repo) => async () => {
  return await repo.get()
}
