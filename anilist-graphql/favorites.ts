/* eslint-disable @typescript-eslint/no-explicit-any */
import { gql } from "graphql-request";
import fetchDataAnilist from ".";

export type favProps = {
  id: string;
  title: string;
  image: string;
  link: string;
};

type responseProps = {
  User: {
    favourites: {
      anime: {
        nodes: Record<string, any>[];
      };
      characters: { nodes: Record<string, any>[] };
      manga: { nodes: Record<string, any>[] };
    };
  };
};

const document = gql`
  query GetFavorites($name: String) {
    User(name: $name) {
      favourites {
        anime {
          nodes {
            coverImage {
              large
            }
            title {
              english
            }
            id
            siteUrl
          }
        }
        characters {
          nodes {
            image {
              large
            }
            name {
              first
              middle
              last
            }
            id
            siteUrl
          }
        }
        manga {
          nodes {
            id
            siteUrl
            title {
              romaji
            }
            coverImage {
              large
            }
          }
        }
      }
    }
  }
`;

const variables = {
  name: "betaorionis"
};

export const getFavorites = async () => {
  const response = (await fetchDataAnilist(
    document,
    variables
  )) as responseProps;
  if (!response) return { animes: [], characters: [], manga: [] };

  const { anime, characters, manga } = response.User.favourites;

  const favAnimes = anime.nodes.map(
    (item) =>
      ({
        id: item.id,
        title: item.title.english,
        image: item.coverImage.large,
        link: item.siteUrl
      } as favProps)
  );

  const favCharacters = characters.nodes.map(
    (item) =>
      ({
        id: item.id,
        title: [item.name.last, item.name.first, item.name.middle].join(" "),
        image: item.image.large,
        link: item.siteUrl
      } as favProps)
  );

  const favManga = manga.nodes.map(
    (item) =>
      ({
        id: item.id,
        title: item.title.romaji,
        image: item.coverImage.large,
        link: item.siteUrl
      } as favProps)
  );

  return {
    animes: favAnimes.slice(0, 5),
    characters: favCharacters.slice(0, 5),
    manga: favManga.slice(0, 5)
  };
};
