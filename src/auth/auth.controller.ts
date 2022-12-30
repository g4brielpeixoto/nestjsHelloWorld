import { Controller, Post, UseGuards, Body } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport/dist'
import { AuthService } from './auth.service'
import { CreateAuthDto } from './dto/create-auth.dto'

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post()
  async create(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.login(createAuthDto)
  }
}
