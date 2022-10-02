import { ContentNotFound } from '@/application/errors'
import { UpdateQuestion as Save, Question } from '@/domain/contracts/repos'

type Setup = (repo: Save) => UpdateQuestion
type Input = Save.Input
type Output = Question

export type UpdateQuestion = (input: Input) => Promise<Output>

export const setupUpdateQuestion: Setup = (repo) => async input => {
  const question = await repo.update(input)
  if (question !== undefined) return question
  throw new ContentNotFound('question')
}
