/* eslint-disable @typescript-eslint/no-explicit-any */
import { gql } from "graphql-request";
import fetchDataAnilist from ".";

type responseProps = {
  Page: {
    mediaList: Record<string, any>[];
  };
};

const document = gql`
  query ($userName: String, $type: MediaType, $perPage: Int) {
    Page(perPage: $perPage) {
      mediaList(
        userName: $userName
        type: $type
        status_in: [CURRENT, REPEATING]
        sort: UPDATED_TIME_DESC
      ) {
        id
        status
        score
        progress
        progressVolumes
        media {
          id
          format
          title {
            english
          }
          coverImage {
            large
          }
          siteUrl
        }
      }
    }
  }
`;

const FormatStyling: Record<string, string> = {
  TV: "TV",
  TV_SHORT: "TV Short",
  MOVIE: "Movie",
  SPECIAL: "Special",
  OVA: "OVA",
  ONA: "ONA",
  MUSIC: "Music",
  MANGA: "Manga",
  NOVEL: "Novel",
  ONE_SHOT: "One Shot"
};

const variables = {
  userName: "betaorionis",
  type: "ANIME",
  perPage: 10
};

export const getActivity = async () => {
  const [anime, manga] = (await Promise.all([
    fetchDataAnilist(document, variables),
    fetchDataAnilist(document, { ...variables, type: "MANGA" })
  ])) as responseProps[];

  const { mediaList: mediaAnime } = anime.Page;
  const { mediaList: mediaManga } = manga.Page;

  const media: Record<string, any>[] = [];
  mediaAnime.forEach((item) => {
    media.push({
      id: item.id,
      progress: item.progress,
      format: FormatStyling[item.media.format],
      title: item.media.title.english,
      image: item.media.coverImage.large,
      link: item.media.siteUrl
    });
  });
  mediaManga.forEach((item) => {
    media.push({
      id: item.id,
      progress: item.progress,
      format: FormatStyling[item.media.format],
      title: item.media.title.english,
      image: item.media.coverImage.large,
      link: item.media.siteUrl
    });
  });

  return { activity: media };
};
