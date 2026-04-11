import { type SchemaTypeDefinition } from 'sanity';
import { homeType } from './homeType';
import { lawyerType } from './lawyerType';
import { serviceType } from './serviceType';
import { articleType } from './articleType';
import { contactType } from './contactType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homeType, lawyerType, serviceType, articleType, contactType],
};
