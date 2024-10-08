import { getSortedArticles } from "@/lib/blogs";
import BlogCard from "@/components/BlogCard";
import "../../blogs.scss";
import BlogCategories from "@/components/BlogCategories";
import { EnumBlogCategory } from "@/types/Blog";
import { TemplateText } from "@/components/layout/Template";

const Blogs = ({ params }: { params: { category: string } }) => {
  const blogs = getSortedArticles(params.category);

  return (
    <section className="article w-full">
      <h1 className="font-3xl text-tosca font-bold">
        I’m either yapping or napping
      </h1>
      <p className="text-center text-gray-400">so here are my yappings</p>
      <BlogCategories
        selectedCategories={params.category ?? EnumBlogCategory.ALL}
      />
      <div className="flex flex-col gap-4 md:gap-4">
        {blogs.length ? (
          blogs.map((blog) => <BlogCard key={blog.id} {...blog} />)
        ) : (
          <TemplateText text="No articles yet 😞" />
        )}
      </div>
    </section>
  );
};

export default Blogs;
