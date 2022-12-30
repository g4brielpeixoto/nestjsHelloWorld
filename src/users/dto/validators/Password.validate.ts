import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationOptions,
  registerDecorator,
} from 'class-validator'

@ValidatorConstraint()
export class HasSpecialCharacters implements ValidatorConstraintInterface {
  validate(value: string): boolean {
    const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
    return format.test(value) ? true : false
  }
}

export const hasSpecialCharacters = (validationOptions: ValidationOptions) => {
  return (object: object, props: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: props,
      options: validationOptions,
      constraints: [],
      validator: HasSpecialCharacters,
    })
  }
}

@ValidatorConstraint()
export class HasUpperCase implements ValidatorConstraintInterface {
  validate(value: string): boolean {
    return /[A-Z]/.test(value) ? true : false
  }
}

export const hasUpperCase = (validationOptions: ValidationOptions) => {
  return (object: object, props: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: props,
      options: validationOptions,
      constraints: [],
      validator: HasUpperCase,
    })
  }
}
