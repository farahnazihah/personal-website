"use client";

import { blogCategories, EnumBlogCategory } from "@/types/Blog";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

const BlogCategories = ({
  selectedCategories = EnumBlogCategory.ALL
}: {
  selectedCategories: string;
}) => {
  const router = useRouter();

  const handleClickCategory = (category: string) => {
    router.replace(`/blogs/categories/${category ?? EnumBlogCategory.ALL}`);
  };

  return (
    <div className="text-gray-400 flex flex-wrap gap-4 my-8 w-full">
      {Object.keys(blogCategories).map((key) => (
        <div
          key={key}
          className={twMerge(
            "py-1 hover:bg-dark-tosca text-sm rounded-full px-4 cursor-pointer",
            selectedCategories === key
              ? "bg-tosca text-white"
              : "ring-1 ring-tosca text-tosca hover:text-white"
          )}
          onClick={() => handleClickCategory(key)}
        >
          {blogCategories[key]}
        </div>
      ))}
    </div>
  );
};

export default BlogCategories;
