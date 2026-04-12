'use client';

/**
 * This configuration is used to for the Sanity Studio that's mounted on the
 * src/app/studio/[[...tool]]/page.tsx route.
 */

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

import { dataset, projectId } from './src/sanity/env';
import { schema } from './src/sanity/schemaTypes';
import { structure } from './src/sanity/structure';

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema: {
    ...schema,
    templates: (prev) =>
      prev.filter((template) => !['home', 'contact'].includes(template.id)),
  },
  plugins: [
    structureTool({ structure }),
  ],
});


