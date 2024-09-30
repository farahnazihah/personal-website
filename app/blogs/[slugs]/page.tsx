import { getArticleData } from "../../../lib/blogs";
import "../blogs.scss";

const Article = async ({ params }: { params: { slugs: string } }) => {
  const articleData = await getArticleData(params.slugs);

  return (
    <section>
      <article
        className="article"
        dangerouslySetInnerHTML={{ __html: articleData.contentHtml }}
      />
    </section>
  );
};

export default Article;
