import { Game } from '@/infra/repos/postgres/entities'
import { DeleteGame, LoadGames, UpdateGame, ShowGame, InsertGame } from '@/domain/contracts/repos'

import { PgRepository } from '@/infra/repos/postgres/repository'

type GetOutput = LoadGames.Output
type ShowInput = ShowGame.Input
type ShowOutput = ShowGame.Output
type InsertInput = InsertGame.Input
type InsertOutput = InsertGame.Output
type UpdateInput = UpdateGame.Input
type UpdateOutput = UpdateGame.Output
type DeleteInput = DeleteGame.Input
type DeleteOutput = DeleteGame.Output

export class GameRepository extends PgRepository implements LoadGames, ShowGame, UpdateGame, DeleteGame, InsertGame {
  async get (): Promise<GetOutput> {
    return await this.getRepository(Game).find({ order: { id: 'ASC' }, relations: ['question', 'award', 'help', 'finished', 'user', 'option'] })
  }

  async show ({ id }: ShowInput): Promise<ShowOutput> {
    return await this.getRepository(Game).findOne(id, { relations: ['question', 'award', 'help', 'finished', 'user', 'option'] })
  }

  async insert (input: InsertInput): Promise<InsertOutput> {
    const { id } = await this.getRepository(Game).save(input)
    return this.show({ id: id.toString() })
  }

  async update ({ id, ...data }: UpdateInput): Promise<UpdateOutput> {
    await this.getRepository(Game).save(Object.assign({}, data, { id: parseInt(id) }))
    return this.show({ id })
  }

  async delete ({ id }: DeleteInput): Promise<DeleteOutput> {
    await this.getRepository(Game).delete(id)
  }
}
