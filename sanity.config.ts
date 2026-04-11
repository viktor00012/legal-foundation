'use client';

/**
 * This configuration is used to for the Sanity Studio that's mounted on the
 * src/app/studio/[[...tool]]/page.tsx route.
 */

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

import { dataset, projectId } from './src/sanity/env';
import { schema } from './src/sanity/schemaTypes';

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool(),
  ],
});
