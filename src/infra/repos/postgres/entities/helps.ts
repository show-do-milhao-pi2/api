import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Game } from './game'

@Entity({ name: 'helps' })
export class Help {
  @PrimaryGeneratedColumn({ name: 'id' })
  id!: number

  @Column()
  help?: number

  @OneToMany(() => Game, game => game.help, { lazy: false })
  games?: Game[]
}
