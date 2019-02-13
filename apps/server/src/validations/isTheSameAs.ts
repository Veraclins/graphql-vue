import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

export const IsTheSameAs = (
  property: string,
  validationOptions?: ValidationOptions
) => (object: object, propertyName: string) => {
  registerDecorator({
    name: 'IsTheSameAs',
    target: object.constructor,
    propertyName,
    constraints: [property],
    options: validationOptions,
    validator: IsLongerThanConstraint,
  });
};

@ValidatorConstraint({ name: 'IsTheSameAs', async: true })
export class IsLongerThanConstraint implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    const [relatedPropertyName] = args.constraints;
    const relatedValue = (args.object as any)[relatedPropertyName];
    return (
      typeof value === 'string' &&
      typeof relatedValue === 'string' &&
      value === relatedValue
    );
  }
  defaultMessage(args: ValidationArguments) {
    return 'should match $constraint1';
  }
}
