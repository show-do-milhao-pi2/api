import { Question } from '@/infra/repos/postgres/entities'
import { DeleteQuestion, LoadQuestions, UpdateQuestion, ShowQuestion, InsertQuestion } from '@/domain/contracts/repos'

import { PgRepository } from '@/infra/repos/postgres/repository'

type GetOutput = LoadQuestions.Output
type ShowInput = ShowQuestion.Input
type ShowOutput = ShowQuestion.Output
type InsertInput = InsertQuestion.Input
type InsertOutput = InsertQuestion.Output
type UpdateInput = UpdateQuestion.Input
type UpdateOutput = UpdateQuestion.Output
type DeleteInput = DeleteQuestion.Input
type DeleteOutput = DeleteQuestion.Output

export class QuestionRepository extends PgRepository implements LoadQuestions, ShowQuestion, UpdateQuestion, DeleteQuestion, InsertQuestion {
  async get (): Promise<GetOutput> {
    return await this.getRepository(Question).find({ order: { statement: 'ASC' }, relations: ['status', 'notifications'] })
  }

  async show ({ id }: ShowInput): Promise<ShowOutput> {
    return await this.getRepository(Question).findOne(id, { relations: ['status', 'notifications'] })
  }

  async insert (input: InsertInput): Promise<InsertOutput> {
    const { id } = await this.getRepository(Question).save(input)
    return this.show({ id: id.toString() })
  }

  async update ({ id, ...data }: UpdateInput): Promise<UpdateOutput> {
    await this.getRepository(Question).save(Object.assign({}, data, { id: parseInt(id) }))
    return this.show({ id })
  }

  async delete ({ id }: DeleteInput): Promise<DeleteOutput> {
    await this.getRepository(Question).delete(id)
  }
}
