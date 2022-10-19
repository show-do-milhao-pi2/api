import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Game } from './game'

@Entity({ name: 'awards' })
export class Awards {
  @PrimaryGeneratedColumn({ name: 'id' })
  id!: number

  @Column()
  award?: number

  @OneToMany(() => Game, game => game.award, { lazy: false })
  games?: Game[]
}
