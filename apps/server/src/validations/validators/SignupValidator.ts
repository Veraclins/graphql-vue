import { IsDefined } from 'class-validator';

import UserValidator from '@validations/validators/UserValidator';

const required = 'please enter a value';
export default class SignupValidator extends UserValidator {
  @IsDefined({ message: required })
  email: string;

  @IsDefined({ message: required })
  username: string;

  @IsDefined({ message: required })
  password: string;

  @IsDefined({ message: required })
  confirmPassword: string;
}
