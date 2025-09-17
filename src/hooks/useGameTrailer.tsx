import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
// import { Game } from "../entities/Game";
import GameTrailer from "../entities/GameTrailer";

const useGameTrailer = (
    gameId: number,
) => {
    const apiClient = new APIClient<GameTrailer>(`/games/${gameId}/movies`)
  return useQuery({
    queryKey: ["game-trailers", gameId],
      queryFn:  apiClient.getAll,
  });
};

export default useGameTrailer;
