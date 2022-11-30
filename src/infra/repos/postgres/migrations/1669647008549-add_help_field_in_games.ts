import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm'

export class addHelpFieldInGames1669647008549 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns('games', [
      new TableColumn({
        name: 'help',
        type: 'boolean'
      }),
      new TableColumn({
        name: 'award',
        type: 'int'
      })])
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('games', 'help')
    await queryRunner.dropColumn('games', 'award')
  }
}
