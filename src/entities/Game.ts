import { GameTrailer } from "./GameTrailer";
import { Genres } from "./Genres";
import { Platform } from "./Platform";
import { Publisher } from "./Publisher";

export interface Game {
  id: number;
  name: string;
  slug: string;
  genres: Genres[]
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  publishers: Publisher[]
  trailer?: GameTrailer;
}
