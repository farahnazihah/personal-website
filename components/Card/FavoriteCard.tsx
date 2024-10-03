"use client";

import { favProps } from "@/anilist-graphql/favorites";
import Image from "next/image";

type CardProps = {
  item: {
    id: string;
    title: string;
    image: string;
    link: string;
    format?: string;
    progress?: string;
  };
  index?: number | null;
};

const FavoriteCard = ({ item, index }: CardProps) => {
  return (
    <a
      className="bg-white shadow-sm rounded-md w-full md:w-auto flex flex-row h-32 gap-1 text-wrap hover:ring-1 hover:ring-gray-300"
      href={item.link}
      target="_blank"
    >
      <div className="relative h-32 w-20">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="rounded-l-md"
        />
      </div>
      <div className="flex flex-col p-1 pr-2 justify-center gap-1 md:max-w-36">
        {index ? (
          <h1 className="text-5xl font-bold text-gray-200">#{index}</h1>
        ) : null}
        <p className="break-words text-sm text-gray-500 w-full">{item.title}</p>
        <p>{item.format ?? null}</p>
        {item.progress ? (
          <p className="text-xs text-gray-500">progress: {item.progress}</p>
        ) : null}
      </div>
    </a>
  );
};

const FavSection = ({
  items,
  title,
  subtitle,
  ranked = false
}: {
  items: favProps[];
  title: string;
  subtitle: string;
  ranked?: boolean;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-3xl font-bold text-tosca">{title}</h3>
      <p className="text-sm text-gray-500 text-gray-400">{subtitle}</p>
      <div className="flex flex-wrap gap-4">
        {items.map((item: favProps, index: number) => (
          <FavoriteCard
            item={item}
            key={item.id}
            index={ranked ? index + 1 : null}
          />
        ))}
      </div>
    </div>
  );
};

export { FavoriteCard };
export default FavSection;
