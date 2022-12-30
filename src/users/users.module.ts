import { Module } from '@nestjs/common'
import { UsersService } from './users.service'
import { UsersController } from './users.controller'
import { User } from './entities/user.entity'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UniqueEmail } from './dto/validators/UniqueEmail.validator'
import {
  HasSpecialCharacters,
  HasUpperCase,
} from './dto/validators/Password.validate'

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService, UniqueEmail, HasSpecialCharacters, HasUpperCase],
  exports: [UsersService],
})
export class UsersModule {}
