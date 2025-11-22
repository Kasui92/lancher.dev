export interface ParsedDocsCollectionId {
  slug: string;
  orderChapter?: number;
  chapter?: string;
  order: number;
  title: string;
}

export interface DocsNavItem {
  slug: string;
  title: string;
  url: string;
  active: boolean;
  chapter?: string;
  orderChapter?: number;
}
