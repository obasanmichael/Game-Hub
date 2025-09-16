import { useQuery } from "react-query";
import APIClient from "../services/api-client";
import genres from "../data/genres";
import ms from "ms";
// import genres from "../data/genres";
export interface Genres {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<Genres>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: genres
  });

export default useGenres;
