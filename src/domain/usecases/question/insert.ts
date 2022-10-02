import { ContentNotFound } from '@/application/errors'
import { InsertQuestion as Save, Question } from '@/domain/contracts/repos'

type Setup = (repo: Save) => InsertQuestion
type Input = Save.Input
type Output = Question

export type InsertQuestion = (input: Input) => Promise<Output>

export const setupInsertQuestion: Setup = (repo) => async input => {
  const question = await repo.insert(input)
  if (question !== undefined) return question
  throw new ContentNotFound('question')
}
