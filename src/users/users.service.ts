import { Injectable, Logger } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { User, User as UserEntity } from './entities/user.entity'

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name)

  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const user = this.userRepository.create(createUserDto)
      await this.userRepository.save(user)
      return user
    } catch (error) {
      this.logger.error(`error: ${JSON.stringify(error.message)}`)
      return error
    }
  }

  async findAll() {
    try {
      const users = await this.userRepository.find()
      return users
    } catch (error) {
      this.logger.error(`error: ${JSON.stringify(error.message)}`)
      return error
    }
  }

  async findOne(id: number) {
    try {
      const user = await this.userRepository.findOneByOrFail({ id })
      return user
    } catch (error) {
      this.logger.error(`error: ${JSON.stringify(error.message)}`)
      return error
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      const user = await this.userRepository.update(id, updateUserDto)
      return user
    } catch (error) {
      this.logger.error(`error: ${JSON.stringify(error.message)}`)
      return error
    }
  }

  async remove(id: number) {
    try {
      const user = await this.userRepository.findOneByOrFail({ id })
      if (user) await this.userRepository.delete(id)
    } catch (error) {
      this.logger.error(`error: ${JSON.stringify(error.message)}`)
      return error
    }
  }

  async findByEmail(email: string): Promise<User> {
    try {
      const user = await this.userRepository.findOneBy({ email })
      return user
    } catch (error) {
      this.logger.error(`error: ${JSON.stringify(error.message)}`)
      return error
    }
  }
}
