import { InsertQuestion, setupInsertQuestion } from '@/domain/usecases/question'
import { makeQuestionRepo } from '@/main/factories/infra/repos'

export const makeInsertQuestion = (): InsertQuestion => {
  return setupInsertQuestion(
    makeQuestionRepo()
  )
}
