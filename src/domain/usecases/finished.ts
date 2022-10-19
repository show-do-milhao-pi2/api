import { ListFinished as List } from '@/domain/contracts/repos/finished'

type Setup = (repo: List) => ListFinished
type Output = List.Output

export type ListFinished = () => Promise<Output>

export const setupListFinished: Setup = (repo) => async () => {
  return await repo.get()
}
