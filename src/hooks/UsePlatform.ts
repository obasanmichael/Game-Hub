import { useQuery } from "react-query";
import APIClient from "../services/api-client";
import platform from "../data/platform";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
  
const apiClient = new APIClient<Platform>(
  "/platforms/lists/parents"
);

const UsePlatform = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platform.length, results: platform, next: null },
  });

export default UsePlatform;
