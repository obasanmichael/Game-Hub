import platform from "../data/platform";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const UsePlatform = () => ({data:platform, isLoading:false, error:null});

export default UsePlatform;
