import { IsEmail, IsNotEmpty } from 'class-validator'

export class CreateAuthDto {
  @IsEmail({}, { message: 'E-mail inválido' })
  email: string

  @IsNotEmpty({ message: 'Campo senha vazio' })
  password: string
}
