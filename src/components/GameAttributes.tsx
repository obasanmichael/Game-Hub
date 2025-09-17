import { SimpleGrid, Text } from "@chakra-ui/react";
import { Game } from "../entities/Game"
import CriticScore from "./CriticScore";
import GameAttribute from "./GameAttribute";

interface Props{
    game: Game
}
const GameAttributes = ({game}: Props) => {
  return (
    <SimpleGrid columns={2} as={"dl"}>
      <GameAttribute heading="Platforms">
        {game.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </GameAttribute>
      <GameAttribute heading="Metascore">
        <CriticScore score={game.metacritic} />
      </GameAttribute>
      <GameAttribute heading="Genre">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </GameAttribute>
      <GameAttribute heading="Publishers">
        {game.publishers.map((p) => (
          <Text>{p.name}</Text>
        ))}
      </GameAttribute>
    </SimpleGrid>
  );
}

export default GameAttributes