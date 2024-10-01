import ReactMarkdown from "react-markdown";
import { getArticleData } from "../../../lib/blogs";
import "../blogs.scss";
import rehypeRaw from "rehype-raw";
import { PluggableList } from "react-markdown/lib/react-markdown";

const Blog = async ({ params }: { params: { slugs: string } }) => {
  const articleData = await getArticleData(params.slugs);

  return (
    <section>
      <article className="article max-w-screen-md">
        <h1>{articleData.title}</h1>
        <p className="text-gray-400 text-sm">{articleData.date}</p>
        <ReactMarkdown rehypePlugins={[rehypeRaw] as PluggableList}>
          {articleData.contentHtml}
        </ReactMarkdown>
      </article>
    </section>
  );
};

export default Blog;
