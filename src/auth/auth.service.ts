import { Injectable } from '@nestjs/common'
import { UsersService } from 'src/users/users.service'
import { compare } from 'bcryptjs'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    try {
      const user = await this.usersService.findByEmail(email)
      if (user) {
        const passwordMatch = await compare(password, user.password)
        if (passwordMatch) {
          delete user.password
          return user
        }
      }
    } catch (error) {
      throw new Error(error)
    }
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id }
    return {
      accessToken: this.jwtService.sign(payload),
    }
  }
}
