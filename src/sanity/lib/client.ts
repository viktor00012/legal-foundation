import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId, useCdn } from '../env';

// Create client only if projectId is available to avoid crash during build configuration collection
export const client = createClient({
  projectId: projectId || 'fallback-id', // Use a temporary fallback during config collection if needed
  dataset,
  apiVersion,
  useCdn,
  perspective: 'published',
});
