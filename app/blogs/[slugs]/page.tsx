import ReactMarkdown from "react-markdown";
import { getArticleData } from "../../../lib/blogs";
import rehypeRaw from "rehype-raw";
import { PluggableList } from "react-markdown/lib/react-markdown";
import { redirect } from "next/navigation";

import { IoMdArrowRoundBack } from "react-icons/io";
import Link from "next/link";
import { blogCategories } from "@/types/Blog";

import "../blogs.scss";
import Image from "next/image";
import useTracker from "@/app/hooks/useTracker";
import Head from "next/head";

const Blog = async ({ params }: { params: { slugs: string } }) => {
  if ((params.slugs as string) === "categories") {
    redirect("/blogs/categories/all");
  }
  const articleData = await getArticleData(params.slugs);

  const tracker = useTracker();
  tracker.page_visit("Blog page", { blog_title: articleData.title });

  // const siteMetadata = {
  //   title: "Farah Nazihah's Blog",
  //   author: "Farah Nazihah",
  //   headerTitle: "Farah Nazihah",
  //   language: "en-us",
  //   siteUrl:
  //     process.env.NODE_ENV === "development"
  //       ? "http://localhost:3000"
  //       : "https://www.farahnazihah.com",
  //   siteRepo: "https://github.com/farahnazihah/personal-web",
  //   github: "https://github.com/farahnazihah",
  //   locale: "en-US"
  // };

  return (
    <>
      <Head>
        <title>My Personal Website</title>
        <meta
          name="description"
          content="A brief description of your website"
        />
        <meta property="og:title" content="My Personal Website" />
        <meta
          property="og:description"
          content="A brief description of your website"
        />
        <meta property="og:image" content="/path/to/your/image.jpg" />
        <meta property="og:url" content="https://your-website.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="My Personal Website" />
        <meta
          name="twitter:description"
          content="A brief description of your website"
        />
        <meta name="twitter:image" content="/path/to/your/image.jpg" />
      </Head>
      {articleData.banner ? (
        <div className="absolute left-0 w-full h-24 blur-[1px]">
          <Image
            objectFit="cover"
            fill
            src={articleData.banner?.link}
            alt={articleData.banner?.alt}
            className="w-full h-24"
          />
        </div>
      ) : null}
      <div className="h-32"></div> {/* space for the banner */}
      <section className="blog">
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
            className="flex flex-row gap-2 items-center font-bold my-8"
          >
            <IoMdArrowRoundBack /> Back to blogs
          </Link>
        </article>
      </section>
    </>
  );
};

export default Blog;
