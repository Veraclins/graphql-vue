import { GraphQLField, GraphQLResolveInfo as Info } from 'graphql';

import { Context } from '@utils/interfaces';
import { SchemaDirectiveVisitor } from 'apollo-server-express';

const defaultFieldResolver = (
  source: any,
  args: any,
  context: Context,
  info: Info
) => {
  // ensure source is a value for which property access is acceptable.
  if (typeof source === 'object' || typeof source === 'function') {
    const property = source[info.fieldName];
    if (typeof property === 'function') {
      return source[info.fieldName](args, context, info);
    }
    return property;
  }
};

const makeAssertionDirectives = (assertions: any) => {
  // tslint:disable-next-line: no-ignored-return
  Object.keys(assertions).reduce(
    (accumulator, key) => ({
      ...accumulator,
      [key]: class extends SchemaDirectiveVisitor {
        visitFieldDefinition(
          field: GraphQLField<any, any, { [key: string]: any }>
        ) {
          const assert = assertions[key];
          const originalResolver = field.resolve || defaultFieldResolver;
          field.resolve = (...args) => {
            const [, , context] = args;
            assert(context, this.args);
            return originalResolver(...args);
          };
        }
      },
    }),
    {}
  );
};

export default makeAssertionDirectives;
