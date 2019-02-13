import { IsDefined } from 'class-validator';

import UserValidator from '@validations/validators/UserValidator';

const required = 'please enter a value';
export default class LoginValidator extends UserValidator {
  @IsDefined({ message: required })
  password: string;
}
