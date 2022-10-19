import { CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { User, Question, Help, Awards, Option, Finished } from '.'

@Entity({ name: 'games' })
export class Game {
  @PrimaryGeneratedColumn()
  id!: number

  @CreateDateColumn({ name: 'created_at', nullable: true })
  createdAt?: Date

  @UpdateDateColumn({ name: 'updated_at', nullable: true })
  updatedAt?: Date

  @ManyToOne(() => User, user => user.games, { cascade: false })
  @JoinColumn({ name: 'user', referencedColumnName: 'id' })
  user?: User

  @ManyToOne(() => Question, question => question.games, { cascade: false })
  @JoinColumn({ name: 'question', referencedColumnName: 'id' })
  question?: Question

  @ManyToOne(() => Help, help => help.games, { cascade: false })
  @JoinColumn({ name: 'help', referencedColumnName: 'id' })
  help?: Help

  @ManyToOne(() => Awards, award => award.games, { cascade: false })
  @JoinColumn({ name: 'award', referencedColumnName: 'id' })
  award?: Awards

  @ManyToOne(() => Option, option => option.games, { cascade: false })
  @JoinColumn({ name: 'option', referencedColumnName: 'id' })
  option?: Option

  @ManyToOne(() => Finished, finished => finished.games, { cascade: false })
  @JoinColumn({ name: 'finished', referencedColumnName: 'id' })
  finished?: Finished
}
