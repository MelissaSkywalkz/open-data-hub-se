import { getCollection } from 'astro:content';
import { getResourceSections } from '../data/resources';
import { getLabs } from '../data/labs';

export type SearchItem = {
  id: string;
  type: 'guide' | 'resource' | 'lab';
  title: string;
  description: string;
  url: string;
  badge: string;
};

export const buildSearchIndex = async (): Promise<SearchItem[]> => {
  const base = import.meta.env.BASE_URL;
  const guides = await getCollection('guides');

  const guideItems: SearchItem[] = guides.map((guide) => ({
    id: `guide:${guide.slug}`,
    type: 'guide',
    title: guide.data.title,
    description: guide.data.description,
    url: `${base}guides/${guide.slug}/`,
    badge: 'GUIDE',
  }));

  const resourceItems: SearchItem[] = getResourceSections(base).flatMap((section) =>
    section.items.map((item, index) => ({
      id: `resource:${section.title}-${index}`,
      type: 'resource',
      title: item.name,
      description: item.note,
      url: item.url,
      badge: 'RESOURCE',
    }))
  );

  const labItems: SearchItem[] = getLabs(base).map((lab) => ({
    id: `lab:${lab.title.toLowerCase().replace(/\\s+/g, '-')}`,
    type: 'lab',
    title: lab.title,
    description: lab.description,
    url: lab.url,
    badge: lab.badge,
  }));

  return [...guideItems, ...resourceItems, ...labItems];
};
