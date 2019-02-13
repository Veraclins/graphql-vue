import { humanize } from '@utils';
import { validate } from 'class-validator';
export interface ValidationError {
  errors: {};
  message: string;
}
const formatValidationError = (error: any) => {
  const { property, constraints } = error;
  const messages: string[] = Object.values(constraints);

  return {
    [property]: messages.map(mess => humanize(mess)),
  };
};

/**
 * Validates a request using a validator class defined with decorators
 * @param {class} Validator the validator to use
 * @param {object} payload The request payload to be validated
 * @returns {object|boolean} the validation errors or false if none.
 */
const validateRequest = async (
  Validator: any,
  payload: any
): Promise<ValidationError> => {
  const resource = new Validator();
  let validationErrors = {};
  Object.entries(payload).forEach(([key, value]) => {
    resource[key] = typeof value === 'string' ? value.trim() : value;
  });
  const errors = await validate(resource, {
    validationError: { target: false },
    skipMissingProperties: true,
  });

  if (errors.length === 0) {
    return;
  }

  /**
   * The errors object contains too many properties that are required
   * We are only interested in the field and the error messages
   */
  for (const error of errors)
    validationErrors = {
      ...validationErrors,
      ...formatValidationError(error),
    };

  return {
    message:
      'Your request is not properly formed. Please correct the highlighted field(s).',
    errors: validationErrors,
  };
};

export default validateRequest;
