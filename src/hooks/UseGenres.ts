import UseData from "./UseData";

export interface Genres {
  id: number;
  name: string;
  image_background: string;
}

const UseGenres = () => UseData<Genres>("/genres");

export default UseGenres;
