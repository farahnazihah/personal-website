import { getActivity } from "@/anilist-graphql/activity";
import { favProps, getFavorites } from "@/anilist-graphql/favorites";
import useTracker from "@/app/hooks/useTracker";
import FavSection from "@/components/Card/FavoriteCard";
import { IoInformationCircleOutline } from "react-icons/io5";

export const revalidate = 3600; // revalidate every hour

const Animes = async () => {
  const res = await getFavorites();
  const { animes: favAnimes, characters: favCharacters, manga: favManga } = res;
  const { activity } = await getActivity();

  const tracker = useTracker();
  tracker.page_visit("Animes page");

  return (
    <section className="flex flex-col gap-12">
      <div className="bg-tosca bg-opacity-20 rounded-lg p-4 flex flex-row gap-2 items-center">
        <IoInformationCircleOutline className="text-2xl" />
        <p>
          The content of this page is retrieved from{" "}
          <a href="https://anilist.co/user/betaorionis/" target="_blank">
            my Anilist Profile
          </a>
        </p>
      </div>
      <FavSection
        items={activity as favProps[]}
        title={"In the Queue"}
        subtitle={
          "Not much is happening bcs Switzerland sucks, I got region locked. Enjoy the easy-accessed anime while you're still in SEA I guess."
        }
      />
      <FavSection
        items={favAnimes}
        title={"All-Time Favorites"}
        subtitle={
          "I'm willing to make a 4-page essay for each of these animes just to prove how well-written they are. I could yap for hours in your face just to convince you to watch them. This isn't a recommendation—it's a threat."
        }
        ranked
      />
      <FavSection
        items={favCharacters}
        title={"Hall of Fame"}
        subtitle={
          "I've tried writing before, and let me tell you, creating a lovable and solid character is no easy task. But these characters completely stole my heart."
        }
        ranked
      />
      <FavSection
        items={favManga}
        title={"Manga & Novels"}
        subtitle={"I also read, you know"}
        ranked
      />
    </section>
  );
};

export default Animes;
