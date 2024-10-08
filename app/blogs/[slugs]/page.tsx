import ReactMarkdown from "react-markdown";
import { getArticleData } from "../../../lib/blogs";
import "../blogs.scss";
import rehypeRaw from "rehype-raw";
import { PluggableList } from "react-markdown/lib/react-markdown";
import { redirect } from "next/navigation";

import { IoMdArrowRoundBack } from "react-icons/io";
import Link from "next/link";
import { blogCategories } from "@/types/Blog";

const Blog = async ({ params }: { params: { slugs: string } }) => {
  if ((params.slugs as string) === "categories") {
    redirect("/blogs/categories/all");
  }
  const articleData = await getArticleData(params.slugs);

  return (
    <section>
      <article className="article max-w-screen-md">
        <Link
          href="/blogs"
          className="flex flex-row gap-2 items-center font-bold "
        >
          <IoMdArrowRoundBack /> Back
        </Link>
        <h1>{articleData.title}</h1>
        <div className="flex flex-wrap gap-2 text-tosca my-4">
          Categories:{" "}
          {articleData.category
            ? articleData.category.map((c, idx) => (
                <div key={idx}>{blogCategories[c]}</div>
              ))
            : null}
        </div>
        <p className="text-gray-400 text-sm">{articleData.date}</p>
        <ReactMarkdown rehypePlugins={[rehypeRaw] as PluggableList}>
          {articleData.contentHtml}
        </ReactMarkdown>
        <Link
          href="/blogs"
          className="flex flex-row gap-2 items-center font-bold my-4"
        >
          <IoMdArrowRoundBack /> Back to blogs
        </Link>
      </article>
    </section>
  );
};

export default Blog;
