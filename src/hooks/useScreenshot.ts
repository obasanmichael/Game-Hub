import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const useScreenshot = (game_pk: string) => {
  const apiClient = new APIClient<Screenshot>(`/games/${game_pk}/screenshots`);
  return useQuery({
    queryKey: ["screenshots", game_pk],
    queryFn: () => apiClient.getAll,
  });
};

export default useScreenshot;
