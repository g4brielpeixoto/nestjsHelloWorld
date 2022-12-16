import { Module } from '@nestjs/common'
import { DataBaseModule } from './database/database.module'
import { UsersModule } from './users/users.module'

@Module({
  imports: [DataBaseModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
