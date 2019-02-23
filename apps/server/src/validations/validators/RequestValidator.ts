import { IsDefined, MinLength } from 'class-validator';

const required = 'please enter a value';
const atLeast5 = 'use at least 5 characters';
export default class RequestValidator {
  @IsDefined({ message: required })
  @MinLength(5, { message: atLeast5 })
  title: string;

  @IsDefined({ message: required })
  @MinLength(5, { message: atLeast5 })
  device: string;

  @IsDefined({ message: required })
  @MinLength(20, { message: 'use at least 20 characters' })
  description: string;
}
