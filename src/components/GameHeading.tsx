import { Heading } from "@chakra-ui/react";
import useGameStore from "../store";
import usePlatform from "../hooks/UsePlatform";
import useGenre from "../hooks/useGenre";

const GameHeading = () => {
  const platformId = useGameStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const genreId = useGameStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);
  
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading marginY={5} fontSize="5xl" as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
