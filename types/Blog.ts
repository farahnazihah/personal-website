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

export enum EnumBlogCategory {
  ALL = "all",
  PERSONAL = "personal",
  SOFTWARE_ENGINEERING = "software-engineering"
}

export const blogCategories: Record<string, string> = {
  [EnumBlogCategory.ALL]: "All",
  [EnumBlogCategory.PERSONAL]: "Personal",
  [EnumBlogCategory.SOFTWARE_ENGINEERING]: "Software Engineering"
};
