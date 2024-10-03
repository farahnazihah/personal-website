"use client";

import { favProps } from "@/anilist-graphql/favorites";
import Image from "next/image";

const FavoriteCard = ({ item, index }: { item: favProps; index: number }) => {
  return (
    <a
      className="bg-white shadow-sm rounded-md grid grid-cols-2 w-46 md:w-52 gap-1 text-wrap hover:ring-1 hover:ring-gray-300"
      href={item.link}
    >
      <div className="relative md:h-36">
        <Image
          src={item.image}
          alt={item.title}
          objectFit="cover"
          fill
          className="w-full object-cover rounded-l-md"
        />
      </div>
      <div className="flex flex-col p-1 pr-2 justify-center gap-1">
        <h1 className="text-5xl font-bold text-gray-200">#{index}</h1>
        <p className="break-words text-sm text-gray-500 w-full">{item.title}</p>
      </div>
    </a>
  );
};

const FavSection = ({
  items,
  title,
  subtitle
}: {
  items: favProps[];
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-3xl font-bold text-tosca">{title}</h3>
      <p className="text-sm text-gray-500 text-gray-400">{subtitle}</p>
      <div className="flex flex-wrap gap-4">
        {items.map((item: favProps, index: number) => (
          <FavoriteCard item={item} key={item.id} index={index + 1} />
        ))}
      </div>
    </div>
  );
};

export { FavoriteCard };
export default FavSection;
