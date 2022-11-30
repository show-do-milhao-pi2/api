import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm'

export class addDenunciationAndQuestionsToGamesTable1669800634440 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns('games', [
      new TableColumn({
        name: 'questions',
        type: 'int'
      })])
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('games', 'questions')
  }
}
