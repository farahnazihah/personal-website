import { blogCategories, BlogProps } from "@/types/Blog";
import Link from "next/link";
import Image from "next/image";

const BlogCard = ({
  title,
  category,
  date,
  snippet,
  link = "/blogs",
  banner
}: BlogProps) => {
  return (
    <Link href={link}>
      <div className="flex flex-col md:flex-row bg-white shadow-sm rounded-lg gap-2 hover:ring-1 ring-tosca">
        <div className="relative min-h-12 sm:w-full md:w-1/3 md:order-2">
          {banner ? (
            <Image
              src={banner.link}
              alt={banner ? banner.alt : "banner blog"}
              fill
              objectFit="cover"
              className="md:rounded-r-lg"
            />
          ) : null}
        </div>
        <div className="flex flex-col gap-2 p-2 md:p-4 w-full">
          <h4 className="text-tosca font-bold text-xl">{title}</h4>
          <p className="text-gray-400 !p-0 !m-0 text-sm">{date}</p>
          <div className="text-gray-600 text-sm md:text-md">{snippet}</div>
          <div className="flex flex-wrap gap-2 text-tosca text-xs">
            {category
              ? category.map((c, idx) => (
                  <div key={idx}>{blogCategories[c]}</div>
                ))
              : null}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
