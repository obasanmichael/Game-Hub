import { useQuery } from "react-query";
import { FetchResponse } from "../services/api-client";
import apiClient from "../services/api-client";
import platform from "../data/platform";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const UsePlatform = () => useQuery({
  queryKey: ['platforms'],
  queryFn: () =>
    apiClient.get<FetchResponse<Platform>>("/platforms/lists/parents").then((res) => res.data),
  staleTime: 24 * 60 * 60 * 1000,
  initialData: {count: platform.length, results: platform}
})

export default UsePlatform;
