import { useQuery } from "react-query";
import APIClient from "../services/api-client";
// import genres from "../data/genres";
export interface Genres {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<Genres>("/genres");

const UseGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
  });

export default UseGenres;
