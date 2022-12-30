import { IsEmail, MinLength, IsNotEmpty, IsUrl } from 'class-validator'
import {
  hasSpecialCharacters,
  hasUpperCase,
} from './validators/Password.validate'
import { isUniqueEmail } from './validators/UniqueEmail.validator'

export class CreateUserDto {
  @IsNotEmpty({ message: 'O nome não deve estar vazio!' })
  name: string

  @IsEmail({}, { message: 'O e-mail informado é inválido' })
  @isUniqueEmail({ message: 'Já existe um usuário com esse e-mail' })
  email: string

  @MinLength(6, { message: 'Senha precisa ter no mínimo 6 caracteres' })
  @hasSpecialCharacters({
    message: 'Senha precisa ter pelo menos um caractere especial',
  })
  @hasUpperCase({ message: 'Senha precisa ter pelo menos uma letra maiúscula' })
  password: string

  @IsUrl({}, { message: 'URL do avatar inválida' })
  avatarUrl: string
}
