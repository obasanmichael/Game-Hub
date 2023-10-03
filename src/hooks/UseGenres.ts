import UseData from "./UseData";

export interface Genres {
  id: number;
  name: string;
}

const UseGenres = () => UseData<Genres>("/genres");

export default UseGenres;
