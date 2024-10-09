import { CiBowlNoodles } from "react-icons/ci";
import { IoIceCreamOutline } from "react-icons/io5";
import { CiCoffeeCup } from "react-icons/ci";
import { PiMosqueLight } from "react-icons/pi";
import { LuFlagTriangleRight } from "react-icons/lu";
import LinkPreview from "@/components/LinkPreview";
import { FavoriteCard } from "@/components/Card/FavoriteCard";
import { Alert } from "@/components/layout/Template";

type listProps = {
  label: string;
  link: string;
  icon?: React.ReactNode;
  image?: string;
};

const travel: listProps[] = [
  {
    label: "Place to eat",
    link: "https://maps.app.goo.gl/5GV1sdRvrxKPcZFd9",
    icon: <CiBowlNoodles />
  },
  {
    label: "Snacks",
    link: "https://maps.app.goo.gl/kc73zywGi9mYaUwZ9",
    icon: <IoIceCreamOutline />
  },
  {
    label: "Cafes",
    link: "https://maps.app.goo.gl/295ws4xFBQVUzKr47",
    icon: <CiCoffeeCup />
  },
  {
    label: "Prayer Rooms",
    link: "https://maps.app.goo.gl/U5yXZThgBUQiH7JSA",
    icon: <PiMosqueLight />
  },
  {
    label: "Destinations",
    link: "https://maps.app.goo.gl/jqDArDaeKv8kvZEf9",
    icon: <LuFlagTriangleRight />
  }
];

const movies: listProps[] = [
  {
    label: "How to Train Your Dragon",
    link: "https://www.dreamworks.com/movies/how-to-train-your-dragon",
    image: "/recommendations/how_to_train_your_dragon.jpg"
  },
  {
    label: "La La Land",
    link: "https://www.imdb.com/title/tt3783958/",
    image: "/recommendations/la_la_land.jpg"
  },
  {
    label: "The Hunger Games Series",
    link: "https://www.imdb.com/title/tt1392170/",
    image: "/recommendations/the_hunger_games.jpg"
  }
];

const books: listProps[] = [
  {
    label: "The Little Prince",
    link: "https://www.lepetitprince.com/",
    image: "/recommendations/le_petit_prince.jpg"
  }
];

const RecomendationSection = ({
  list,
  title,
  description,
  type = "strip"
}: {
  list: listProps[];
  title: string;
  description: string;
  type?: "strip" | "card";
}) => {
  return (
    <section className="flex flex-col gap-4 w-full">
      <h2>{title}</h2>
      <p className="text-gray-500 text-sm">{description}</p>
      <div className="flex flex-wrap gap-4 text-tosca font-bold">
        {type === "strip" &&
          list.map((item, idx) => (
            <LinkPreview
              title={item.label}
              link={item.link}
              key={idx}
              icon={item.icon}
            />
          ))}
        {type === "card" &&
          list.map((item, idx) => (
            <FavoriteCard
              key={idx}
              item={{
                id: String(idx + 1) + "-" + title,
                title: item.label,
                image: item.image ?? "",
                link: item.link
              }}
            />
          ))}
      </div>
    </section>
  );
};

const Recomendations = () => {
  return (
    <>
      <h1>Recomendations</h1>
      <div className="flex flex-col gap-4 items-center gap-8">
        <RecomendationSection
          title="✈️ Travel"
          description="I created this list on Google Maps for my favorite places, covering locations around the world
        (or at least I hope it will). It’s not much yet, but I’m continuously
        adding more as I discover new places. I hope you find it helpful. Note:
        They are halal or muslim-friendly (or have the options), but please
        double-check to be sure."
          list={travel}
        />
        <RecomendationSection
          title="📔 Books"
          description="Tbh I don’t read books that often nowadays, but I plan to read more. Hopefully."
          list={books}
          type="card"
        />
        <RecomendationSection
          title="🎥 Movies"
          description="These are the classics 💁‍♀️"
          list={movies}
          type="card"
        />
        <Alert
          text={
            "also check out the page [Anime Zone](/random/animes) if you’re looking for animes/mangas"
          }
        />
      </div>
    </>
  );
};

export default Recomendations;
