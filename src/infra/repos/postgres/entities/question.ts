import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Status, User } from '.'

@Entity({ name: 'questions' })
export class Question {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  statement?: string

  @CreateDateColumn({ name: 'created_at', nullable: true })
  createdAt?: Date

  @UpdateDateColumn({ name: 'updated_at', nullable: true })
  updatedAt?: Date

  @ManyToOne(() => User, user => user.questions, { cascade: false })
  @JoinColumn({ name: 'id_user_creator', referencedColumnName: 'id' })
  user?: User

  @ManyToOne(() => Status, status => status.questions, { cascade: false })
  @JoinColumn({ name: 'id_status', referencedColumnName: 'id' })
  status?: Status
}
