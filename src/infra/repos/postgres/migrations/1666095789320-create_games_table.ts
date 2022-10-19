import { MigrationInterface, QueryRunner, Table } from 'typeorm'
import { CreateForeignKey } from '../helpers'

export class createGamesTable1666095789320 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'games',
        columns: [
          {
            name: 'id',
            type: 'serial',
            isPrimary: true
          },
          {
            name: 'user',
            type: 'int',
            isPrimary: true
          },
          {
            name: 'question',
            type: 'int',
            isPrimary: true
          },
          {
            name: 'award',
            type: 'int',
            isNullable: true
          },
          {
            name: 'option',
            type: 'int',
            isNullable: true
          },
          {
            name: 'finished',
            type: 'int',
            isNullable: true
          },
          {
            name: 'help',
            type: 'int',
            isNullable: true
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()'
          }
        ]
      })
    )
    const userForeignKey = new CreateForeignKey('user', 'id', 'users').new()
    const questionForeignKey = new CreateForeignKey('question', 'id', 'questions').new()
    const awardForeignKey = new CreateForeignKey('award', 'id', 'awards').new()
    const optionForeignKey = new CreateForeignKey('option', 'id', 'options').new()
    const finishedForeignKey = new CreateForeignKey('finished', 'id', 'finished').new()
    const helpForeignKey = new CreateForeignKey('help', 'id', 'helps').new()
    await queryRunner.createForeignKeys('games', [userForeignKey, questionForeignKey, awardForeignKey, optionForeignKey, finishedForeignKey, helpForeignKey])
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('games')
    await queryRunner.dropForeignKeys(table!.name, table!.foreignKeys)
    await queryRunner.dropTable(table!.name)
  }
}
