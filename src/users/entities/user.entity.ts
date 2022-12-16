import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity()
export class User {
  @PrimaryColumn({ type: 'uuid', nullable: false, name: 'id' })
  id: string

  @Column({ type: 'varchar', length: '50', name: 'name' })
  name: string

  @Column({ type: 'varchar', length: '50', name: 'email' })
  email: string

  @Column({ type: 'varchar', length: '50', name: 'password' })
  password: string

  @Column({ type: 'varchar', length: '100', name: 'avatar_url' })
  avatarUrl: string
}
