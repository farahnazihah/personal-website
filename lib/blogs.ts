import fs from "fs";
import matter from "gray-matter";
import path from "path";
import moment from "moment";
import { BlogProps, EnumBlogCategory } from "@/types/Blog";

const articlesDirectory = path.join(process.cwd(), "blogs");

export const getSortedArticles = (category = "all") => {
  const fileNames = fs.readdirSync(articlesDirectory);

  const allArticlesData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.mdx$/, "");

    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");

    const matterResult = matter(fileContents);

    return {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      category: matterResult.data.category,
      snippet: matterResult.data.snippet,
      banner: matterResult.data.banner,
      link: `/blogs/${id}`
    } as BlogProps;
  });

  return allArticlesData
    .filter((article) =>
      category == EnumBlogCategory.ALL
        ? true
        : article.category?.includes(category)
    )
    .sort((a, b) => {
      const format = "DD-MM-YYYY";
      const dateOne = moment(a.date, format);
      const dateTwo = moment(b.date, format);
      console.log(dateOne.toLocaleString(), dateTwo.toLocaleString());
      // Sort by date, newest first
      if (dateOne.isBefore(dateTwo)) {
        console.log(1);
        return 1;
      } else {
        console.log(0);
        return -1;
      }
    });
};

export const getArticleData = async (id: string) => {
  const fullPath = path.join(articlesDirectory, `${id}.mdx`);

  const fileContents = fs.readFileSync(fullPath, "utf-8");

  const matterResult = matter(fileContents);

  return {
    id,
    contentHtml: matterResult.content,
    title: matterResult.data.title,
    date: moment(matterResult.data.date, "DD-MM-YYYY").format("MMMM Do YYYY"),
    category: matterResult.data.category,
    snippet: matterResult.data.snippet,
    banner: matterResult.data.banner
  } as BlogProps;
};
