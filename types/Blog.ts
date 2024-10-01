export type BlogProps = {
  id: string;
  title: string;
  date: string;
  category?: string[];
  snippet: string;
  banner?: { link: string; alt: string };
  contentHtml: string;
  link?: string;
};
