import { MigrationInterface, QueryRunner, Table } from 'typeorm'
import { CreateForeignKey } from '../helpers'

export class createQuestionsTable1663186866923 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'questions',
        columns: [
          {
            name: 'id',
            type: 'serial',
            isPrimary: true
          },
          {
            name: 'statement',
            type: 'varchar'
          },
          {
            name: 'id_user_creator',
            type: 'int',
            isNullable: true
          },
          {
            name: 'id_status',
            type: 'int',
            default: 1
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

    const statusForeignKey = new CreateForeignKey('id_status', 'id', 'status').new()
    const userForeignKey = new CreateForeignKey('id_user_creator', 'id', 'users').new()
    await queryRunner.createForeignKeys('questions', [statusForeignKey, userForeignKey])
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('questions')
    await queryRunner.dropForeignKeys(table!.name, table!.foreignKeys)
    await queryRunner.dropTable(table!.name)
  }
}
