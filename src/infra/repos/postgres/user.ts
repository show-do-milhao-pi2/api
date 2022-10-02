import { User } from '@/infra/repos/postgres/entities'
import { DeleteUser, LoadUsers, UpdateUser, ShowUser, InsertUser, ShowUserByNickName } from '@/domain/contracts/repos'

import { PgRepository } from '@/infra/repos/postgres/repository'

type GetOutput = LoadUsers.Output
type ShowNickNameInput = ShowUserByNickName.Input
type ShowNickNameOutput = ShowUserByNickName.Output
type ShowInput = ShowUser.Input
type ShowOutput = ShowUser.Output
type InsertInput = InsertUser.Input
type InsertOutput = InsertUser.Output
type UpdateInput = UpdateUser.Input
type UpdateOutput = UpdateUser.Output
type DeleteInput = DeleteUser.Input
type DeleteOutput = DeleteUser.Output

export class UserRepository extends PgRepository implements LoadUsers, ShowUser, UpdateUser, DeleteUser, InsertUser, ShowUserByNickName {
  async get (): Promise<GetOutput> {
    return await this.getRepository(User).find({ order: { name: 'ASC' }, select: ['id', 'name', 'nickname'], relations: ['questions'] })
  }

  async show ({ id }: ShowInput): Promise<ShowOutput> {
    return await this.getRepository(User).findOne(id, { select: ['id', 'name', 'nickname'], relations: ['questions'] })
  }

  async showByNickName ({ nickname }: ShowNickNameInput): Promise<ShowNickNameOutput> {
    return await this.getRepository(User).findOne({ where: { nickname } })
  }

  async insert (input: InsertInput): Promise<InsertOutput> {
    const { id } = await this.getRepository(User).save(input)
    return this.show({ id: id.toString() })
  }

  async update ({ id, ...data }: UpdateInput): Promise<UpdateOutput> {
    await this.getRepository(User).save(Object.assign({}, data, { id: parseInt(id) }))
    return this.show({ id })
  }

  async delete ({ id }: DeleteInput): Promise<DeleteOutput> {
    await this.getRepository(User).delete(id)
  }
}
