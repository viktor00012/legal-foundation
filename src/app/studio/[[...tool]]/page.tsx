/**
 * This route is responsible for the built-in authoring environment of Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * For more information on how to support community-built plugins and tools with Next.js, 
 * visit the Sanity Studio documentation:
 * https://www.sanity.io/docs/nextjs-framework-vercel-speed-insights-next-font
 */

import { NextStudio } from 'next-sanity/studio';
import config from '../../../../sanity.config';

export const dynamic = 'force-dynamic';

export { metadata, viewport } from 'next-sanity/studio';

export default function StudioPage() {
  return <NextStudio config={config} />;
}
