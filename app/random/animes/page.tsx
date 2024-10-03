import { getFavorites } from "@/anilist-graphql/favorites";
import FavSection from "@/components/Card/FavoriteCard";

const Animes = async () => {
  const res = await getFavorites();
  const { animes: favAnimes, characters: favCharacters } = res;

  return (
    <section className="flex flex-col gap-12">
      <FavSection
        items={favAnimes}
        title={"Ultimate Watchlist"}
        subtitle={
          "I'm willing to make a 4-page essay for each of these animes just to prove how well-written they are. I could yap for hours in your face just to convince you to watch them. This isn't a recommendation—it's a threat."
        }
      />
      <FavSection
        items={favCharacters}
        title={"The Cinnamon Rolls"}
        subtitle={
          "I've tried writing before, and let me tell you, creating a lovable and solid character is no easy task. But these characters completely stole my heart."
        }
      />
    </section>
  );
};

export default Animes;
