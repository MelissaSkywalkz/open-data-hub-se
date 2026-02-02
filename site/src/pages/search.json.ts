import type { APIRoute } from 'astro';
import { buildSearchIndex } from '../utils/searchIndex';

export const GET: APIRoute = async () => {
  const items = await buildSearchIndex();
  return new Response(JSON.stringify({ items }), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
