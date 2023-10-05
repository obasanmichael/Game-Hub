import UseData from "./UseData";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const UsePlatform = () => UseData<Platform>("/platforms/lists/parents");

export default UsePlatform;
