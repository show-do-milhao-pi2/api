import { ContentNotFound } from '@/application/errors'
import { UpdateQuestion as Save, ShowQuestion as Show, Question } from '@/domain/contracts/repos'

type Setup = (repo: Save & Show) => UpdateQuestion
type Input = Save.Input
type Output = Question

export type UpdateQuestion = (input: Input) => Promise<Output>

export const setupUpdateQuestion: Setup = (repo) => async input => {
  if (input.statement === undefined && input.status === undefined && input.user === undefined) {
    const question = await repo.show({ id: input.id })
    const notificationAnswerers = question?.notifications?.map(notification => {
      if (notification.answered === true) {
        return notification
      }
      return undefined
    })
    console.log(notificationAnswerers)
    if (notificationAnswerers !== undefined && notificationAnswerers?.length === 5) {
      let approved = true
      notificationAnswerers.map(async notificationAnswered => {
        if (notificationAnswered?.evaluation === false) approved = false
      })
      const questionSet = await repo.update(Object.assign({}, input, { status: { id: approved ? 2 : 3 } }))
      if (questionSet !== undefined) return questionSet
      throw new ContentNotFound('question')
    }
  }
  const question = await repo.update(input)
  if (question !== undefined) return question
  throw new ContentNotFound('question')
}
