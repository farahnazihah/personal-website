import { GraphQLClient } from "graphql-request";

const ANILIST_API = "https://graphql.anilist.co";

const client = new GraphQLClient(ANILIST_API);

const fetchDataAnilist = async (query: string, variables: object) => {
  const response = await client.request(query, variables);
  return response;
};

export default fetchDataAnilist;
