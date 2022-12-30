import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm'
import { hashSync } from 'bcryptjs'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'varchar', length: '50' })
  name: string

  @Column({ type: 'varchar' })
  email: string

  @Column({ type: 'varchar' })
  password: string

  @Column({ type: 'varchar', length: '100', name: 'avatar_url' })
  avatarUrl: string

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword(): void {
    this.password = hashSync(this.password, 10)
  }
}
