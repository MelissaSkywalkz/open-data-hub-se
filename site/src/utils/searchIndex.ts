import { getCollection } from 'astro:content';
import { getResourceSections } from '../data/resources';

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
  const labs = await getCollection('labs');

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

  const labItems: SearchItem[] = labs.map((lab) => ({
    id: `lab:${lab.slug}`,
    type: 'lab',
    title: lab.data.title,
    description: lab.data.description,
    url: `${base}labs/${lab.slug}/`,
    badge: 'LAB',
  }));

  return [...guideItems, ...resourceItems, ...labItems];
};
