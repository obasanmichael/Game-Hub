import ms from "ms";
import APIClient, { FetchResponse } from "../services/api-client";
import useGameStore from "../store";
import { Platform } from "./usePlatforms";
import { useInfiniteQuery } from "@tanstack/react-query";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const apiClient = new APIClient<Game>("/games");


const useGames = () => {
  const gameQuery = useGameStore((s) => s.gameQuery);
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms("24h"),
    initialPageParam: 1
  });
};

export default useGames;

