import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClients, { FetchResponse } from "../services/api-clients";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClients
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24hr
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
