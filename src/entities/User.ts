import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";

import { v4 as uuid } from "uuid";

@Entity("users")
export class User {
  @PrimaryColumn()
  public readonly id?: string;

  @CreateDateColumn({ name: "created_at" })
  public readonly createdAt?: string;

  @UpdateDateColumn({ name: "updated_at" })
  public readonly updatedAt?: string;

  @Column()
  public name: string;

  @Column()
  public nickname: string;

  @Column()
  public password: string;

  constructor(
    User: Omit<User, "id" >,
    id?: string
  ) {
    Object.assign(this, User);
    if (!id) {
      this.id = uuid();
    } else {
      this.id = id;
    }
  }
}
