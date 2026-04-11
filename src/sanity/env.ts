export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-04-11';

// These are only required when using Sanity Studio (/studio route).
// The main site uses cms/ JSON files and does not need these variables.
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || '';
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';

export const useCdn = false;
