import { IsAlpha, IsEmail, Matches, MinLength } from 'class-validator';

import { IsTheSameAs } from '@validations/isTheSameAs';

const passwordRegex = /^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,30}$/;
const alpha = 'use only letters';
const atLeast3 = 'use at least 3 characters';
export default class UserValidator {
  @IsEmail({}, { message: 'use a valid email address, example: me@you.com' })
  email: string;

  @MinLength(3, { message: atLeast3 })
  username: string;

  @Matches(passwordRegex, {
    message: 'use 6 characters or more with at least on letter and number',
  })
  password: string;

  @IsTheSameAs('password')
  confirmPassword: string;

  @IsAlpha({ message: alpha })
  @MinLength(3)
  firstName: string;

  @IsAlpha({ message: alpha })
  @MinLength(3)
  lastName: string;
}
