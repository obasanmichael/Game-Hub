import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import Trailer from "../components/Trailer";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading)
    return (
      <div>
        <Spinner />
      </div>
    );
  if (error || !game) return <div>Error loading game details</div>;
  return (
    <>
      <Heading>{game.slug}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
      <Trailer gameId={game.id} />
    </>
  );
};

export default GameDetailPage;
