import { Injectable } from '@nestjs/common'
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator'
import { UsersService } from 'src/users/users.service'

@Injectable()
@ValidatorConstraint({ async: true })
export class UniqueEmail implements ValidatorConstraintInterface {
  constructor(private usersService: UsersService) {}

  async validate(value: any): Promise<boolean> {
    const user = await this.usersService.findByEmail(value)
    return user ? false : true
  }
}

export const isUniqueEmail = (validationOptions: ValidationOptions) => {
  return (object: object, props: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: props,
      options: validationOptions,
      constraints: [],
      validator: UniqueEmail,
    })
  }
}
