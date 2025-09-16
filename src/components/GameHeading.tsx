import { Heading } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
import useGameStore from "../store";



const GameHeading = () => {
  
    const { gameQuery } = useGameStore();
    const genre = useGenre(gameQuery.genreId)
    const platform = usePlatform(gameQuery.platformId);
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading marginY={5} fontSize="5xl" as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
